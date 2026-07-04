import { t } from './i18n';

export class Popup {
	constructor(plugin) {
		this.plugin = plugin;
		this.el = null;
		this.contentEl = null;
		this.continuousToggle = null;
		this.focusToggle = null;
		this.isTranslating = false;
		this.lastTranslatedText = '';
		this.monitorInterval = null;
		this.mode = null;
		this._focusLossHandler = null;
		this._abortController = null;

		this._askHistory = [];
		this._askIndex = -1;
		this._pagerEl = null;
		this._pagerIndexEl = null;
		this._askTextarea = null;
		this._askText = null;
		this._askImage = null;
	}

	close() {
		if (this._abortController) {
			this._abortController.abort();
			this._abortController = null;
		}
		if (this.monitorInterval) {
			clearInterval(this.monitorInterval);
			this.monitorInterval = null;
		}
		if (this.el) {
			this.el.remove();
			this.el = null;
			this.contentEl = null;
			this.continuousToggle = null;
			this.focusToggle = null;
		}
		this.mode = null;
		this._askHistory = [];
		this._askIndex = -1;
		this._pagerEl = null;
		this._pagerIndexEl = null;
		this._askTextarea = null;
		this._askText = null;
		this._askImage = null;
	}

	open(text, editor) {
		this.close();
		this.mode = 'text';
		this.lastTranslatedText = '';
		this.isTranslating = false;

		const settings = this.plugin.settings;
		const popup = this._createPopup();
		const header = this._buildHeader(popup, editor, false);
		const content = document.createElement('div');
		content.className = 'ai-tr-popup-content';
		content.textContent = t('popup-translating');

		popup.appendChild(header);
		popup.appendChild(content);
		document.body.appendChild(popup);

		this.el = popup;
		this.contentEl = content;

		this._restorePosition(popup);
		this._enableDrag(popup, header);
		this._setupFocusLoss(popup);
		popup.focus();

		this._doTranslate(text);

		if (settings.continuousTranslate) {
			this._startMonitoring(editor);
		}
	}

	openImage(base64Image) {
		this.close();
		this.mode = 'image';
		this.isTranslating = false;

		const popup = this._createPopup();
		const header = this._buildHeader(popup, null, false);

		const preview = this._createPreview(base64Image);

		const content = document.createElement('div');
		content.className = 'ai-tr-popup-content';
		content.textContent = t('popup-translating');

		popup.appendChild(header);
		popup.appendChild(preview);
		popup.appendChild(content);
		document.body.appendChild(popup);

		this.el = popup;
		this.contentEl = content;

		this._restorePosition(popup);
		this._enableDrag(popup, header);
		this._setupFocusLoss(popup);
		popup.focus();

		this._doTranslateImage(base64Image);
	}

	openAsk(text, editor) {
		this.close();
		this.mode = 'ask';
		this.isTranslating = false;
		this._askText = text;
		this._askImage = null;

		const settings = this.plugin.settings;
		const popup = this._createPopup();
		const header = this._buildHeader(popup, editor, true);

		const contentWrapper = document.createElement('div');
		contentWrapper.className = 'ai-tr-ask-content-wrap';
		const content = document.createElement('div');
		content.className = 'ai-tr-popup-content';
		contentWrapper.appendChild(content);

		popup.appendChild(header);
		popup.appendChild(contentWrapper);

		this.el = popup;
		this.contentEl = content;

		this._buildAskInput(popup);
		this._buildPager(contentWrapper);

		document.body.appendChild(popup);

		this._restorePosition(popup);
		this._enableDrag(popup, header);
		this._setupFocusLoss(popup);

		if (settings.enableAutoAsk) {
			const defaultQ = settings.textAskPrompt || t('ask-default-text');
			this._doAsk(defaultQ);
		} else {
			content.textContent = t('popup-waiting');
			this._updatePager();
			this._focusInput();
		}
	}

	openAskImage(base64Image) {
		this.close();
		this.mode = 'ask';
		this.isTranslating = false;
		this._askText = null;
		this._askImage = base64Image;

		const settings = this.plugin.settings;
		const popup = this._createPopup();
		const header = this._buildHeader(popup, null, true);

		const preview = this._createPreview(base64Image);

		const contentWrapper = document.createElement('div');
		contentWrapper.className = 'ai-tr-ask-content-wrap';
		const content = document.createElement('div');
		content.className = 'ai-tr-popup-content';
		contentWrapper.appendChild(content);

		popup.appendChild(header);
		popup.appendChild(preview);
		popup.appendChild(contentWrapper);

		this.el = popup;
		this.contentEl = content;

		this._buildAskInput(popup);
		this._buildPager(contentWrapper);

		document.body.appendChild(popup);

		this._restorePosition(popup);
		this._enableDrag(popup, header);
		this._setupFocusLoss(popup);

		if (settings.enableAutoAsk) {
			const defaultQ = settings.screenshotAskPrompt || t('ask-default-image');
			this._doAsk(defaultQ);
		} else {
			content.textContent = t('popup-waiting');
			this._updatePager();
			this._focusInput();
		}
	}

	_createPopup() {
		const popup = document.createElement('div');
		popup.className = 'ai-tr-popup';
		popup.tabIndex = -1;
		popup.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				e.preventDefault();
				e.stopPropagation();
				this.close();
			}
		});
		return popup;
	}

	_createPreview(base64Image) {
		const preview = document.createElement('div');
		preview.className = 'ai-tr-screenshot-preview';
		const img = document.createElement('img');
		img.src = base64Image;
		preview.appendChild(img);
		return preview;
	}

	_buildHeader(popup, editor, isAsk) {
		const settings = this.plugin.settings;
		const isImage = this.mode === 'image';

		const header = document.createElement('div');
		header.className = 'ai-tr-popup-header';

		const title = document.createElement('span');
		title.className = 'ai-tr-popup-title';
		title.textContent = isAsk ? t('popup-ask-title') : t('popup-title');

		const actions = document.createElement('div');
		actions.className = 'ai-tr-popup-actions';

		if (!isAsk && !isImage) {
			const continuousLabel = document.createElement('label');
			continuousLabel.className = 'ai-tr-popup-option';
			const continuousCb = document.createElement('input');
			continuousCb.type = 'checkbox';
			continuousCb.checked = settings.continuousTranslate;
			const continuousText = document.createElement('span');
			continuousText.textContent = t('popup-continuous');
			continuousLabel.appendChild(continuousCb);
			continuousLabel.appendChild(continuousText);
			this.continuousToggle = continuousCb;

			continuousCb.addEventListener('change', async () => {
				settings.continuousTranslate = continuousCb.checked;
				await this.plugin.saveSettings();
				if (continuousCb.checked) {
					this._startMonitoring(editor);
				} else {
					this._stopMonitoring();
				}
			});
			actions.appendChild(continuousLabel);
		}

		const focusLabel = document.createElement('label');
		focusLabel.className = 'ai-tr-popup-option';
		const focusCb = document.createElement('input');
		focusCb.type = 'checkbox';
		focusCb.checked = settings.dismissOnFocusLoss;
		const focusText = document.createElement('span');
		focusText.textContent = t('popup-dismiss-focus');
		focusLabel.appendChild(focusCb);
		focusLabel.appendChild(focusText);
		this.focusToggle = focusCb;

		focusCb.addEventListener('change', async () => {
			settings.dismissOnFocusLoss = focusCb.checked;
			await this.plugin.saveSettings();
			this._setupFocusLoss(popup);
		});

		const closeBtn = document.createElement('button');
		closeBtn.className = 'ai-tr-popup-close';
		closeBtn.textContent = '\u00d7';
		closeBtn.addEventListener('click', () => this.close());

		actions.appendChild(focusLabel);
		actions.appendChild(closeBtn);

		header.appendChild(title);
		header.appendChild(actions);

		return header;
	}

	_buildAskInput(popup) {
		const inputArea = document.createElement('div');
		inputArea.className = 'ai-tr-ask-input';

		const input = document.createElement('input');
		input.type = 'text';
		input.className = 'ai-tr-ask-text';
		input.placeholder = t('ask-placeholder');

		const sendBtn = document.createElement('button');
		sendBtn.className = 'ai-tr-ask-send';
		sendBtn.textContent = t('ask-send');

		const onSend = () => {
			const q = input.value.trim();
			if (!q || this.isTranslating) return;
			input.value = '';
			this._doAsk(q);
		};

		input.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' && !e.shiftKey) {
				e.preventDefault();
				e.stopPropagation();
				onSend();
			}
		});

		sendBtn.addEventListener('click', onSend);

		inputArea.appendChild(input);
		inputArea.appendChild(sendBtn);
		popup.appendChild(inputArea);

		this._askTextarea = input;
	}

	_buildPager(popup) {
		const pager = document.createElement('div');
		pager.className = 'ai-tr-ask-pager';

		const prevBtn = document.createElement('button');
		prevBtn.className = 'ai-tr-pager-btn';
		prevBtn.textContent = '\u25C0';
		prevBtn.title = t('pager-prev');
		prevBtn.addEventListener('click', () => this._pagerNav(-1));

		const indexEl = document.createElement('span');
		indexEl.className = 'ai-tr-pager-index';

		const nextBtn = document.createElement('button');
		nextBtn.className = 'ai-tr-pager-btn';
		nextBtn.textContent = '\u25B6';
		nextBtn.title = t('pager-next');
		nextBtn.addEventListener('click', () => this._pagerNav(1));

		pager.appendChild(prevBtn);
		pager.appendChild(indexEl);
		pager.appendChild(nextBtn);

		popup.appendChild(pager);

		this._pagerEl = pager;
		this._pagerIndexEl = indexEl;
		this._updatePager();
	}

	_pagerNav(delta) {
		if (this._askHistory.length === 0) return;
		const newIdx = this._askIndex + delta;
		if (newIdx < 0 || newIdx >= this._askHistory.length) return;
		this._askIndex = newIdx;
		this._showHistory();
	}

	_updatePager() {
		if (!this._pagerEl) return;
		if (this._askHistory.length <= 1) {
			this._pagerEl.style.display = 'none';
			return;
		}
		this._pagerEl.style.display = 'flex';
		this._pagerIndexEl.textContent = (this._askIndex + 1) + ' / ' + this._askHistory.length;
	}

	_showHistory() {
		const entry = this._askHistory[this._askIndex];
		if (!entry || !this.contentEl) return;
		this.contentEl.textContent = entry.text;
		this.contentEl.className = 'ai-tr-popup-content ai-tr-done';
		this._renderMath(this.contentEl, entry.text);
		this._updatePager();
	}

	_focusInput() {
		if (this._askTextarea) {
			setTimeout(() => this._askTextarea.focus(), 50);
		}
	}

	async _doAsk(question) {
		if (!this.contentEl) return;

		if (this._abortController) {
			this._abortController.abort();
		}
		this._abortController = new AbortController();

		this.isTranslating = true;
		this.contentEl.textContent = t('popup-thinking');
		this.contentEl.className = 'ai-tr-popup-content';

		try {
			let seenContent = false;
			const api = this.plugin.api;
			const onChunk = (chunk, isReasoning) => {
				if (!this.contentEl) return;
				if (isReasoning) {
					if (!seenContent) {
						this.contentEl.textContent = t('popup-thinking');
					}
				} else {
					seenContent = true;
					this.contentEl.textContent = chunk;
				}
			};

			const history = this._askHistory.map(item => [
				{ role: 'user', content: this._askImage ? 'Question: ' + item.question : 'Text:\n' + this._askText + '\n\nQuestion: ' + item.question },
				{ role: 'assistant', content: item.text }
			]).flat();

			let result;
			if (this._askImage) {
				result = await api.askImageStream(this._askImage, question, onChunk, history, this._abortController.signal);
			} else {
				result = await api.askStream(this._askText, question, onChunk, history, this._abortController.signal);
			}

			if (this.contentEl) {
				this.contentEl.className = 'ai-tr-popup-content ai-tr-done';
				this._renderMath(this.contentEl, result);

				this._askHistory.push({ question, text: result });
				this._askIndex = this._askHistory.length - 1;
				this._updatePager();
			}
		} catch (error) {
			if (error.name === 'AbortError') return;
			if (this.contentEl) {
				this.contentEl.textContent = t('popup-error') + error.message;
				this.contentEl.className = 'ai-tr-popup-content ai-tr-error';
			}
		} finally {
			this.isTranslating = false;
			this._abortController = null;
			this._focusInput();
		}
	}

	_setupFocusLoss(popup) {
		if (this._focusLossHandler) {
			popup.removeEventListener('focusout', this._focusLossHandler);
		}

		if (!this.plugin.settings.dismissOnFocusLoss) return;

		this._focusLossHandler = () => {
			setTimeout(() => {
				if (this.el === popup && !popup.contains(document.activeElement)) {
					this.close();
				}
			}, 150);
		};
		popup.addEventListener('focusout', this._focusLossHandler);
	}

	_restorePosition(popup) {
		const saved = this.plugin.settings.popupPosition;
		if (saved && typeof saved.x === 'number' && typeof saved.y === 'number') {
			const x = Math.max(0, Math.min(saved.x, window.innerWidth - 420));
			const y = Math.max(0, Math.min(saved.y, window.innerHeight - 320));
			popup.style.left = x + 'px';
			popup.style.top = y + 'px';
		} else {
			popup.style.top = '120px';
			popup.style.right = '20px';
		}
	}

	_savePosition(popup) {
		const rect = popup.getBoundingClientRect();
		this.plugin.settings.popupPosition = {
			x: Math.round(rect.left),
			y: Math.round(rect.top)
		};
		this.plugin.saveSettings();
	}

	_enableDrag(popup, handle) {
		let dragging = false;
		let startX = 0, startY = 0;
		let origLeft = 0, origTop = 0;

		const onMouseDown = (e) => {
			if (e.target.closest('button') || e.target.closest('label') || e.target.closest('input')) return;
			e.preventDefault();
			dragging = true;
			startX = e.clientX;
			startY = e.clientY;
			origLeft = popup.offsetLeft;
			origTop = popup.offsetTop;
			document.addEventListener('mousemove', onMouseMove);
			document.addEventListener('mouseup', onMouseUp);
		};

		const onMouseMove = (e) => {
			if (!dragging) return;
			const dx = e.clientX - startX;
			const dy = e.clientY - startY;
			popup.style.left = (origLeft + dx) + 'px';
			popup.style.top = (origTop + dy) + 'px';
			popup.style.right = 'auto';
		};

		const onMouseUp = () => {
			dragging = false;
			document.removeEventListener('mousemove', onMouseMove);
			document.removeEventListener('mouseup', onMouseUp);
			this._savePosition(popup);
		};

		handle.addEventListener('mousedown', onMouseDown);
	}

	_startMonitoring(editor) {
		this._stopMonitoring();
		this.monitorInterval = setInterval(() => {
			let selection = '';
			if (editor) {
				selection = editor.getSelection();
			} else {
				const sel = window.getSelection();
				if (sel) selection = sel.toString();
			}
			if (!selection || this.isTranslating) return;
			if (selection === this.lastTranslatedText) return;
			if (this.lastTranslatedText && this.lastTranslatedText.includes(selection)) return;
			this._doTranslate(selection);
		}, 500);
	}

	_stopMonitoring() {
		if (this.monitorInterval) {
			clearInterval(this.monitorInterval);
			this.monitorInterval = null;
		}
	}

	async _doTranslate(text) {
		if (!this.contentEl || !text.trim()) return;

		if (this._abortController) {
			this._abortController.abort();
		}
		this._abortController = new AbortController();

		this.isTranslating = true;
		this.lastTranslatedText = text;
		this.contentEl.textContent = t('popup-translating');
		this.contentEl.className = 'ai-tr-popup-content';

		try {
			let seenContent = false;
			const result = await this.plugin.api.translateStream(text, (chunk, isReasoning) => {
				if (!this.contentEl) return;
				if (isReasoning) {
					if (!seenContent) {
						this.contentEl.textContent = t('popup-thinking');
					}
				} else {
					seenContent = true;
					this.contentEl.textContent = chunk;
				}
			}, this._abortController.signal);
			if (this.contentEl) {
				this.contentEl.className = 'ai-tr-popup-content ai-tr-done';
				this._renderMath(this.contentEl, result);
			}
		} catch (error) {
			if (error.name === 'AbortError') return;
			if (this.contentEl) {
				this.contentEl.textContent = t('popup-error') + error.message;
				this.contentEl.className = 'ai-tr-popup-content ai-tr-error';
			}
		} finally {
			this.isTranslating = false;
			this._abortController = null;
		}
	}

	async _doTranslateImage(base64Image) {
		if (!this.contentEl) return;

		if (this._abortController) {
			this._abortController.abort();
		}
		this._abortController = new AbortController();

		this.isTranslating = true;
		this.contentEl.textContent = t('popup-translating');
		this.contentEl.className = 'ai-tr-popup-content';

		try {
			let seenContent = false;
			const result = await this.plugin.api.translateImageStream(base64Image, (chunk, isReasoning) => {
				if (!this.contentEl) return;
				if (isReasoning) {
					if (!seenContent) {
						this.contentEl.textContent = t('popup-thinking');
					}
				} else {
					seenContent = true;
					this.contentEl.textContent = chunk;
				}
			}, this._abortController.signal);
			if (this.contentEl) {
				this.contentEl.className = 'ai-tr-popup-content ai-tr-done';
				this._renderMath(this.contentEl, result);
			}
		} catch (error) {
			if (error.name === 'AbortError') return;
			if (this.contentEl) {
				this.contentEl.textContent = t('popup-error') + error.message;
				this.contentEl.className = 'ai-tr-popup-content ai-tr-error';
			}
		} finally {
			this.isTranslating = false;
			this._abortController = null;
		}
	}

	_renderMath(el, text) {
		const hasMath = /(\$\$[\s\S]+?\$\$|\$[^\$\n]+?\$|\\\(.*?\\\)|\\\[[\s\S]+?\\\])/.test(text);
		if (!hasMath) {
			el.textContent = text;
			return;
		}

		const escaped = text
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');

		const withMath = escaped
			.replace(/\$\$([\s\S]+?)\$\$/g, '<div class="math-block">$$$$$1$$$$</div>')
			.replace(/\$([^\$\n]+?)\$/g, '<span class="math-inline">$$$1$$</span>');

		el.innerHTML = withMath;

		if (window.MathJax && window.MathJax.typesetPromise) {
			window.MathJax.typesetPromise([el]).catch(() => {});
		}
	}
}
