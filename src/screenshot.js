import { t } from './i18n';

const MAX_IMAGE_SIZE = 1024;

export class ScreenCapture {
	constructor(plugin) {
		this.plugin = plugin;
	}

	async capture(hintText) {
		let imageDataUrl;

		try {
			imageDataUrl = await this._captureElectronWindow();
		} catch (e) {
			throw new Error(t('notice-screenshot-unsupported'));
		}

		const region = await this._selectRegion(imageDataUrl, hintText);
		if (!region) return null;

		return this._cropAndResize(imageDataUrl, region);
	}

	async _captureElectronWindow() {
		let remote;
		try {
			const electron = window.require('electron');
			remote = electron.remote;
		} catch (e) {}

		if (!remote) {
			try {
				remote = window.require('@electron/remote');
			} catch (e) {}
		}

		if (!remote) {
			throw new Error('remote not available');
		}

		const webContents = remote.getCurrentWebContents();
		const nativeImage = await webContents.capturePage();
		return nativeImage.toDataURL();
	}

	_selectRegion(imageDataUrl, hintText) {
		return new Promise((resolve) => {
			const overlay = document.createElement('div');
			overlay.className = 'ai-tr-screenshot-overlay';

			const img = new Image();
			img.className = 'ai-tr-screenshot-bg';
			img.src = imageDataUrl;

			const hint = document.createElement('div');
			hint.className = 'ai-tr-screenshot-hint';
			hint.textContent = hintText || t('notice-screenshot-hint');

			const selection = document.createElement('div');
			selection.className = 'ai-tr-screenshot-selection';
			selection.style.display = 'none';

			overlay.appendChild(img);
			overlay.appendChild(hint);
			overlay.appendChild(selection);
			document.body.appendChild(overlay);

			let startX = 0, startY = 0;
			let isDrawing = false;

			const clientToImage = (clientX, clientY) => {
				const rect = img.getBoundingClientRect();
				const nw = img.naturalWidth;
				const nh = img.naturalHeight;
				const cw = img.clientWidth;
				const ch = img.clientHeight;
				const scale = Math.min(cw / nw, ch / nh);
				const displayW = nw * scale;
				const displayH = nh * scale;
				const offsetX = (cw - displayW) / 2;
				const offsetY = (ch - displayH) / 2;
				const x = (clientX - rect.left - offsetX) / scale;
				const y = (clientY - rect.top - offsetY) / scale;
				return { x, y };
			};

			const onMouseDown = (e) => {
				if (e.button !== 0) return;
				e.preventDefault();
				isDrawing = true;
				startX = e.clientX;
				startY = e.clientY;
				selection.style.left = startX + 'px';
				selection.style.top = startY + 'px';
				selection.style.width = '0px';
				selection.style.height = '0px';
				selection.style.display = 'block';
				hint.style.display = 'none';
			};

			const onMouseMove = (e) => {
				if (!isDrawing) return;
				const x = Math.min(e.clientX, startX);
				const y = Math.min(e.clientY, startY);
				const w = Math.abs(e.clientX - startX);
				const h = Math.abs(e.clientY - startY);
				selection.style.left = x + 'px';
				selection.style.top = y + 'px';
				selection.style.width = w + 'px';
				selection.style.height = h + 'px';
			};

			const onMouseUp = (e) => {
				if (!isDrawing) return;
				isDrawing = false;

				const x1 = Math.min(e.clientX, startX);
				const y1 = Math.min(e.clientY, startY);
				const x2 = Math.max(e.clientX, startX);
				const y2 = Math.max(e.clientY, startY);

				const p1 = clientToImage(x1, y1);
				const p2 = clientToImage(x2, y2);

				cleanup();

				if ((x2 - x1) < 5 || (y2 - y1) < 5) {
					resolve(null);
					return;
				}

				const rx = Math.max(0, Math.round(p1.x));
				const ry = Math.max(0, Math.round(p1.y));
				const rw = Math.min(Math.round(p2.x - p1.x), img.naturalWidth - rx);
				const rh = Math.min(Math.round(p2.y - p1.y), img.naturalHeight - ry);

				if (rw < 1 || rh < 1) {
					resolve(null);
					return;
				}

				resolve({ x: rx, y: ry, w: rw, h: rh });
			};

			const onKeyDown = (e) => {
				if (e.key === 'Escape') {
					cleanup();
					resolve(null);
				}
			};

			const cleanup = () => {
				overlay.remove();
				document.removeEventListener('mousedown', onMouseDown, true);
				document.removeEventListener('mousemove', onMouseMove, true);
				document.removeEventListener('mouseup', onMouseUp, true);
				document.removeEventListener('keydown', onKeyDown, true);
			};

			document.addEventListener('mousedown', onMouseDown, true);
			document.addEventListener('mousemove', onMouseMove, true);
			document.addEventListener('mouseup', onMouseUp, true);
			document.addEventListener('keydown', onKeyDown, true);
		});
	}

	_cropAndResize(imageDataUrl, region) {
		return new Promise((resolve, reject) => {
			const img = new Image();
			img.onload = () => {
				let w = region.w;
				let h = region.h;

				if (w > MAX_IMAGE_SIZE || h > MAX_IMAGE_SIZE) {
					if (w > h) {
						h = Math.round(h * MAX_IMAGE_SIZE / w);
						w = MAX_IMAGE_SIZE;
					} else {
						w = Math.round(w * MAX_IMAGE_SIZE / h);
						h = MAX_IMAGE_SIZE;
					}
				}

				const canvas = document.createElement('canvas');
				canvas.width = w;
				canvas.height = h;
				const ctx = canvas.getContext('2d');
				ctx.drawImage(img, region.x, region.y, region.w, region.h, 0, 0, w, h);
				resolve(canvas.toDataURL('image/jpeg', 0.85));
			};
			img.onerror = () => reject(new Error('Failed to process image'));
			img.src = imageDataUrl;
		});
	}
}
