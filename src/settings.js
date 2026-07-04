import { PluginSettingTab, Setting, Notice } from 'obsidian';
import { t } from './i18n';

export class TranslatorSettingTab extends PluginSettingTab {
	constructor(app, plugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display() {
		const { containerEl } = this;
		containerEl.empty();

		containerEl.createEl('h2', { text: t('setting-title') });

		containerEl.createEl('h3', { text: t('setting-api') });

		new Setting(containerEl)
			.setName(t('setting-api-url'))
			.setDesc(t('setting-api-url-desc'))
			.addText(text => text
				.setPlaceholder('https://api.xiaomimimo.com/v1')
				.setValue(this.plugin.settings.apiBaseUrl)
				.onChange(async (value) => {
					this.plugin.settings.apiBaseUrl = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName(t('setting-api-key'))
			.setDesc(t('setting-api-key-desc'))
			.addText(text => {
				text.inputEl.type = 'password';
				text.setPlaceholder('sk-...')
					.setValue(this.plugin.settings.apiKey)
					.onChange(async (value) => {
						this.plugin.settings.apiKey = value;
						await this.plugin.saveSettings();
					});
			});

		new Setting(containerEl)
			.setName(t('setting-model'))
			.setDesc(t('setting-model-desc'))
			.addText(text => text
				.setPlaceholder('mimo-v2.5')
				.setValue(this.plugin.settings.model)
				.onChange(async (value) => {
					this.plugin.settings.model = value;
					await this.plugin.saveSettings();
				}));

		containerEl.createEl('h3', { text: t('setting-translation') });

		new Setting(containerEl)
			.setName(t('setting-prompt'))
			.setDesc(t('setting-prompt-desc'))
			.addTextArea(text => text
				.setPlaceholder(t('setting-prompt-placeholder'))
				.setValue(this.plugin.settings.translateSystemPrompt)
				.onChange(async (value) => {
					this.plugin.settings.translateSystemPrompt = value;
					await this.plugin.saveSettings();
				})
				.then(ta => {
					ta.inputEl.rows = 5;
					ta.inputEl.style.width = '100%';
				}));

		new Setting(containerEl)
			.setName(t('setting-thinking'))
			.setDesc(t('setting-thinking-desc'))
			.addToggle(toggle => toggle
				.setValue(this.plugin.settings.enableTranslateThinking)
				.onChange(async (value) => {
					this.plugin.settings.enableTranslateThinking = value;
					await this.plugin.saveSettings();
				}));

		containerEl.createEl('h3', { text: t('setting-screenshot') });

		new Setting(containerEl)
			.setName(t('setting-screenshot-translate-enable'))
			.setDesc(t('setting-screenshot-translate-enable-desc'))
			.addToggle(toggle => toggle
				.setValue(this.plugin.settings.enableScreenshotTranslate)
				.onChange(async (value) => {
					this.plugin.settings.enableScreenshotTranslate = value;
					await this.plugin.saveSettings();
					this.display();
				}));

		if (this.plugin.settings.enableScreenshotTranslate) {
			new Setting(containerEl)
				.setName(t('setting-screenshot-prompt'))
				.setDesc(t('setting-screenshot-prompt-desc'))
				.addTextArea(text => text
					.setPlaceholder(t('setting-screenshot-prompt-placeholder'))
					.setValue(this.plugin.settings.screenshotTranslatePrompt)
					.onChange(async (value) => {
						this.plugin.settings.screenshotTranslatePrompt = value;
						await this.plugin.saveSettings();
					})
					.then(ta => {
						ta.inputEl.rows = 3;
						ta.inputEl.style.width = '100%';
					}));
		}

		new Setting(containerEl)
			.setName(t('setting-screenshot-ask-enable'))
			.setDesc(t('setting-screenshot-ask-enable-desc'))
			.addToggle(toggle => toggle
				.setValue(this.plugin.settings.enableScreenshotAsk)
				.onChange(async (value) => {
					this.plugin.settings.enableScreenshotAsk = value;
					await this.plugin.saveSettings();
					this.display();
				}));

		if (this.plugin.settings.enableScreenshotAsk) {
			new Setting(containerEl)
				.setName(t('setting-screenshot-ask-prompt'))
				.setDesc(t('setting-screenshot-ask-prompt-desc'))
				.addTextArea(text => text
					.setPlaceholder(t('setting-screenshot-ask-prompt-placeholder'))
					.setValue(this.plugin.settings.screenshotAskPrompt)
					.onChange(async (value) => {
						this.plugin.settings.screenshotAskPrompt = value;
						await this.plugin.saveSettings();
					})
					.then(ta => {
						ta.inputEl.rows = 3;
						ta.inputEl.style.width = '100%';
					}));
		}

		containerEl.createEl('h3', { text: t('setting-ask') });

		new Setting(containerEl)
			.setName(t('setting-ask-enable'))
			.setDesc(t('setting-ask-enable-desc'))
			.addToggle(toggle => toggle
				.setValue(this.plugin.settings.enableAsk)
				.onChange(async (value) => {
					this.plugin.settings.enableAsk = value;
					await this.plugin.saveSettings();
					this.display();
				}));

		if (this.plugin.settings.enableAsk) {
			new Setting(containerEl)
				.setName(t('setting-ask-system-prompt'))
				.setDesc(t('setting-ask-system-prompt-desc'))
				.addTextArea(text => text
					.setPlaceholder(t('setting-ask-system-prompt-placeholder'))
					.setValue(this.plugin.settings.askSystemPrompt)
					.onChange(async (value) => {
						this.plugin.settings.askSystemPrompt = value;
						await this.plugin.saveSettings();
					})
					.then(ta => {
						ta.inputEl.rows = 4;
						ta.inputEl.style.width = '100%';
					}));

			new Setting(containerEl)
				.setName(t('setting-ask-thinking'))
				.setDesc(t('setting-ask-thinking-desc'))
				.addToggle(toggle => toggle
					.setValue(this.plugin.settings.enableAskThinking)
					.onChange(async (value) => {
						this.plugin.settings.enableAskThinking = value;
						await this.plugin.saveSettings();
					}));

			new Setting(containerEl)
				.setName(t('setting-ask-auto'))
				.setDesc(t('setting-ask-auto-desc'))
				.addToggle(toggle => toggle
					.setValue(this.plugin.settings.enableAutoAsk)
					.onChange(async (value) => {
						this.plugin.settings.enableAutoAsk = value;
						await this.plugin.saveSettings();
						this.display();
					}));

			if (this.plugin.settings.enableAutoAsk) {
				new Setting(containerEl)
					.setName(t('setting-ask-prompt'))
					.setDesc(t('setting-ask-prompt-desc'))
					.addText(text => text
						.setPlaceholder('What does this text say?')
						.setValue(this.plugin.settings.textAskPrompt)
						.onChange(async (value) => {
							this.plugin.settings.textAskPrompt = value;
							await this.plugin.saveSettings();
						}));
			}
		}

		containerEl.createEl('h3', { text: t('setting-popup') });

		new Setting(containerEl)
			.setName(t('setting-continuous'))
			.setDesc(t('setting-continuous-desc'))
			.addToggle(toggle => toggle
				.setValue(this.plugin.settings.continuousTranslate)
				.onChange(async (value) => {
					this.plugin.settings.continuousTranslate = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName(t('setting-dismiss'))
			.setDesc(t('setting-dismiss-desc'))
			.addToggle(toggle => toggle
				.setValue(this.plugin.settings.dismissOnFocusLoss)
				.onChange(async (value) => {
					this.plugin.settings.dismissOnFocusLoss = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName(t('setting-reset-pos'))
			.setDesc(t('setting-reset-pos-desc'))
			.addButton(btn => btn
				.setButtonText(t('setting-reset-btn'))
				.onClick(async () => {
					delete this.plugin.settings.popupPosition;
					await this.plugin.saveSettings();
					new Notice(t('notice-pos-reset'));
				}));
	}
}
