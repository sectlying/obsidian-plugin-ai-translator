import { t } from './i18n';

export class Api {
	constructor(plugin) {
		this.plugin = plugin;
		this.settings = plugin.settings;
	}

	updateSettings(settings) {
		this.settings = settings;
	}

	async translate(text, signal) {
		const { apiBaseUrl, apiKey, model, translateSystemPrompt, enableTranslateThinking } = this.settings;

		if (!apiKey) {
			throw new Error(t('err-no-key'));
		}

		if (!model) {
			throw new Error(t('err-no-model'));
		}

		const baseUrl = apiBaseUrl.replace(/\/+$/, '');
		const url = baseUrl + '/chat/completions';

		const messages = [];
		if (translateSystemPrompt) {
			messages.push({ role: 'system', content: translateSystemPrompt });
		}
		messages.push({ role: 'user', content: text });

		const body = {
			model,
			messages,
			stream: false
		};

		if (enableTranslateThinking) {
			body.enable_thinking = true;
		}

		const response = await requestUrl({
			url,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${apiKey}`
			},
			body: JSON.stringify(body)
		});

		if (response.status !== 200) {
			let msg = t('err-api') + response.status;
			try {
				const err = response.json;
				if (err?.error?.message) msg += ' - ' + err.error.message;
			} catch (e) {}
			throw new Error(msg);
		}

		const data = response.json;
		if (!data.choices || data.choices.length === 0) {
			throw new Error(t('err-no-result'));
		}

		const result = data.choices[0].message;

		if (enableTranslateThinking && result.reasoning_content) {
			return (result.content || result.reasoning_content).trim();
		}

		return (result.content || '').trim();
	}

	async translateStream(text, onChunk, signal) {
		const { apiBaseUrl, apiKey, model, translateSystemPrompt, enableTranslateThinking } = this.settings;

		if (!apiKey) {
			throw new Error(t('err-no-key'));
		}

		if (!model) {
			throw new Error(t('err-no-model'));
		}

		const baseUrl = apiBaseUrl.replace(/\/+$/, '');
		const url = baseUrl + '/chat/completions';

		const messages = [];
		if (translateSystemPrompt) {
			messages.push({ role: 'system', content: translateSystemPrompt });
		}
		messages.push({ role: 'user', content: text });

		const body = {
			model,
			messages,
			stream: true
		};

		if (enableTranslateThinking) {
			body.enable_thinking = true;
		}

		return this._streamRequest(url, apiKey, body, onChunk, enableTranslateThinking, signal);
	}

	async translateImageStream(base64Image, onChunk, signal) {
		const { apiBaseUrl, apiKey, model, translateSystemPrompt, screenshotTranslatePrompt, enableTranslateThinking } = this.settings;

		if (!apiKey) {
			throw new Error(t('err-no-key'));
		}

		if (!model) {
			throw new Error(t('err-no-model'));
		}

		const baseUrl = apiBaseUrl.replace(/\/+$/, '');
		const url = baseUrl + '/chat/completions';

		const prompt = screenshotTranslatePrompt || 'Translate all text in this image. Output only the translation.';

		const messages = [];
		if (translateSystemPrompt) {
			messages.push({ role: 'system', content: translateSystemPrompt });
		}
		messages.push({
			role: 'user',
			content: [
				{ type: 'text', text: prompt },
				{
					type: 'image_url',
					image_url: { url: base64Image }
				}
			]
		});

		const body = {
			model,
			messages,
			stream: true
		};

		if (enableTranslateThinking) {
			body.enable_thinking = true;
		}

		return this._streamRequest(url, apiKey, body, onChunk, enableTranslateThinking, signal);
	}

	async askStream(text, question, onChunk, history = [], signal) {
		const { apiBaseUrl, apiKey, model, askSystemPrompt, enableAskThinking } = this.settings;

		if (!apiKey) {
			throw new Error(t('err-no-key'));
		}

		if (!model) {
			throw new Error(t('err-no-model'));
		}

		const baseUrl = apiBaseUrl.replace(/\/+$/, '');
		const url = baseUrl + '/chat/completions';

		const askSystem = askSystemPrompt || 'You are a helpful learning assistant. Answer the user\'s questions concisely. Use Chinese to answer. Do not use markdown formatting.';

		const messages = [
			{ role: 'system', content: askSystem },
			{ role: 'user', content: 'Text:\n' + text + '\n\nQuestion: ' + question }
		];

		if (history.length > 0) {
			messages.splice(1, 0, ...history);
		}

		const body = {
			model,
			messages,
			stream: true
		};

		if (enableAskThinking) {
			body.enable_thinking = true;
		}

		return this._streamRequest(url, apiKey, body, onChunk, enableAskThinking, signal);
	}

	async askImageStream(base64Image, question, onChunk, history = [], signal) {
		const { apiBaseUrl, apiKey, model, askSystemPrompt, enableAskThinking } = this.settings;

		if (!apiKey) {
			throw new Error(t('err-no-key'));
		}

		if (!model) {
			throw new Error(t('err-no-model'));
		}

		const baseUrl = apiBaseUrl.replace(/\/+$/, '');
		const url = baseUrl + '/chat/completions';

		const askSystem = askSystemPrompt || 'You are a helpful learning assistant. Answer the user\'s questions concisely. Use Chinese to answer. Do not use markdown formatting.';

		const messages = [
			{ role: 'system', content: askSystem },
			{
				role: 'user',
				content: [
					{ type: 'text', text: 'Question: ' + question },
					{
						type: 'image_url',
						image_url: { url: base64Image }
					}
				]
			}
		];

		if (history.length > 0) {
			messages.splice(1, 0, ...history);
		}

		const body = {
			model,
			messages,
			stream: true
		};

		if (enableAskThinking) {
			body.enable_thinking = true;
		}

		return this._streamRequest(url, apiKey, body, onChunk, enableAskThinking, signal);
	}

	async _streamRequest(url, apiKey, body, onChunk, enableThinking, signal) {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${apiKey}`
			},
			body: JSON.stringify(body),
			signal
		});

		if (!response.ok) {
			let msg = t('err-api') + response.status;
			try {
				const err = await response.json();
				if (err?.error?.message) msg += ' - ' + err.error.message;
			} catch (e) {}
			throw new Error(msg);
		}

		const reader = response.body.getReader();
		const decoder = new TextDecoder();
		let buffer = '';
		let fullContent = '';
		let reasoningContent = '';

		while (true) {
			if (signal?.aborted) {
				reader.cancel();
				throw new DOMException('Aborted', 'AbortError');
			}

			const { done, value } = await reader.read();
			if (done) break;

			buffer += decoder.decode(value, { stream: true });
			const lines = buffer.split('\n');
			buffer = lines.pop() || '';

			for (const line of lines) {
				const trimmed = line.trim();
				if (!trimmed || !trimmed.startsWith('data:')) continue;

				const data = trimmed.slice(5).trim();
				if (data === '[DONE]') continue;

				try {
					const parsed = JSON.parse(data);
					const delta = parsed.choices?.[0]?.delta;
					if (!delta) continue;

					if (delta.content) {
						fullContent += delta.content;
						onChunk(fullContent, false);
					}

					if (enableThinking && delta.reasoning_content) {
						reasoningContent += delta.reasoning_content;
						onChunk(reasoningContent, true);
					}
				} catch (e) {}
			}
		}

		if (enableThinking && reasoningContent && !fullContent) {
			return reasoningContent.trim();
		}

		return fullContent.trim();
	}
}
