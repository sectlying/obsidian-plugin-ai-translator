import { Plugin, Notice, MarkdownView } from 'obsidian';
import { Api } from './api';
import { Popup } from './popup';
import { ScreenCapture } from './screenshot';
import { TranslatorSettingTab } from './settings';
import { t } from './i18n';

const DEFAULT_SETTINGS = {
	apiBaseUrl: 'https://api.xiaomimimo.com/v1',
	apiKey: '',
	model: 'mimo-v2.5',
	enableTranslateThinking: false,
	translateSystemPrompt: 'You are a professional translator. Translate the user\'s text into natural, fluent Simplified Chinese. If the text is already in Chinese, translate it into English. Output only the translation. Do not use markdown formatting.',
	continuousTranslate: true,
	dismissOnFocusLoss: true,
	popupPosition: null,
	enableScreenshotTranslate: false,
	screenshotTranslatePrompt: 'Translate all text in this image. Output only the translation.',
	enableScreenshotAsk: false,
	screenshotAskPrompt: 'What does this image show? Answer concisely.',
	enableAsk: false,
	enableAutoAsk: true,
	enableAskThinking: false,
	textAskPrompt: 'What does this text say?',
	askSystemPrompt: 'You are a helpful learning assistant. Answer the user\'s questions concisely. Use Chinese to answer. Do not use markdown formatting.'
};

export default class AITranslatorPlugin extends Plugin {
	async onload() {
		await this.loadSettings();
		this.api = new Api(this);
		this.popup = new Popup(this);
		this.screenCapture = new ScreenCapture(this);

		this.addCommand({
			id: 'smart-translate',
			name: t('cmd-smart'),
			callback: () => {
				const text = this.getSelectedText();
				if (text) {
					this.popup.open(text, this.getEditor());
				} else if (this.settings.enableScreenshotTranslate) {
					this._handleScreenshotTranslate();
				} else {
					new Notice(t('notice-select-first'));
				}
			}
		});

		this.addCommand({
			id: 'smart-ask',
			name: t('cmd-ask'),
			callback: () => {
				const text = this.getSelectedText();
				if (text) {
					this.popup.openAsk(text, this.getEditor());
				} else if (this.settings.enableScreenshotAsk) {
					this._handleScreenshotAsk();
				} else {
					new Notice(t('notice-select-first'));
				}
			}
		});

		this.registerEvent(
			this.app.workspace.on('editor-menu', (menu, editor) => {
				menu.addItem((item) => {
					item
						.setTitle(t('menu-translate'))
						.setIcon('languages')
						.onClick(() => {
							const selection = editor.getSelection();
							if (selection) {
								this.popup.open(selection, editor);
							} else {
								new Notice(t('notice-select-first'));
							}
						});
				});
				if (this.settings.enableAsk) {
					menu.addItem((item) => {
						item
							.setTitle(t('menu-ask'))
							.setIcon('message-square')
							.onClick(() => {
								const selection = editor.getSelection();
								if (selection) {
									this.popup.openAsk(selection, editor);
								} else {
									new Notice(t('notice-select-first'));
								}
							});
					});
				}
			})
		);

		this.addSettingTab(new TranslatorSettingTab(this.app, this));
	}

	onunload() {
		this.popup.close();
	}

	getSelectedText() {
		const editor = this.getEditor();
		if (editor) {
			const s = editor.getSelection();
			if (s && s.trim()) return s;
		}
		const sel = window.getSelection();
		if (sel && sel.toString().trim()) {
			if (this.popup.el && sel.anchorNode && this.popup.el.contains(sel.anchorNode)) {
				return '';
			}
			return sel.toString();
		}
		return '';
	}

	getEditor() {
		const view = this.app.workspace.getActiveViewOfType(MarkdownView);
		return view ? view.editor : null;
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
		if (this.api) {
			this.api.updateSettings(this.settings);
		}
	}

	async _handleScreenshotTranslate() {
		if (!this.settings.enableScreenshotTranslate) {
			new Notice(t('notice-screenshot-unsupported'));
			return;
		}

		try {
			const base64Image = await this.screenCapture.capture(t('notice-screenshot-hint'));
			if (!base64Image) {
				new Notice(t('notice-screenshot-cancelled'));
				return;
			}

			new Notice(t('notice-screenshot-captured'));
			this.popup.openImage(base64Image);
		} catch (error) {
			if (error.name === 'NotAllowedError') {
				new Notice(t('notice-screenshot-cancelled'));
			} else {
				new Notice(t('popup-error') + error.message);
			}
		}
	}

	async _handleScreenshotAsk() {
		if (!this.settings.enableScreenshotAsk) {
			new Notice(t('notice-screenshot-unsupported'));
			return;
		}

		try {
			const base64Image = await this.screenCapture.capture(t('notice-screenshot-ask-hint'));
			if (!base64Image) {
				new Notice(t('notice-screenshot-cancelled'));
				return;
			}

			new Notice(t('notice-screenshot-ask-captured'));
			this.popup.openAskImage(base64Image);
		} catch (error) {
			if (error.name === 'NotAllowedError') {
				new Notice(t('notice-screenshot-cancelled'));
			} else {
				new Notice(t('popup-error') + error.message);
			}
		}
	}
}
