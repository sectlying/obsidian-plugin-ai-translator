var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.js
var main_exports = {};
__export(main_exports, {
  default: () => AITranslatorPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian2 = require("obsidian");

// locales/en.json
var en_default = {
  "plugin-name": "AI Translator",
  "cmd-translate": "Translate Selection",
  "cmd-screenshot": "Screenshot Translate",
  "cmd-smart": "Smart Translate (Auto)",
  "cmd-ask": "Smart Ask (Auto)",
  "menu-translate": "Translate Selection",
  "menu-screenshot": "Screenshot Translate",
  "menu-ask": "AI Q&A",
  "notice-select-first": "Please select text to translate first",
  "notice-screenshot-captured": "Screenshot captured, translating...",
  "notice-screenshot-ask-captured": "Screenshot captured, answering...",
  "notice-screenshot-cancelled": "Screenshot cancelled",
  "notice-screenshot-hint": "Drag to select the region to translate, press Esc to cancel",
  "notice-screenshot-ask-hint": "Drag to select the region to ask about, press Esc to cancel",
  "notice-screenshot-unsupported": "Screenshot not supported in current environment",
  "popup-title": "AI Translate",
  "popup-ask-title": "AI Q&A",
  "popup-translating": "Translating...",
  "popup-thinking": "Thinking...",
  "popup-continuous": "Continuous",
  "popup-dismiss-focus": "Dismiss on blur",
  "popup-waiting": "Waiting for your question",
  "popup-error": "Translation failed: ",
  "ask-placeholder": "Enter your question...",
  "ask-send": "Send",
  "ask-default-text": "What does this text say?",
  "ask-default-image": "What does this image show?",
  "pager-prev": "Previous answer",
  "pager-next": "Next answer",
  "setting-title": "AI Translator Settings",
  "setting-api": "API Configuration",
  "setting-api-url": "API Base URL",
  "setting-api-url-desc": "OpenAI-compatible base URL, e.g. https://api.xiaomimimo.com/v1",
  "setting-api-key": "API Key",
  "setting-api-key-desc": "Your API key",
  "setting-model": "Model",
  "setting-model-desc": "e.g. mimo-v2.5, gpt-4o, qwen-plus",
  "setting-thinking": "Enable Thinking",
  "setting-thinking-desc": "Enable reasoning/thinking mode (requires model support)",
  "setting-translation": "Translation",
  "setting-prompt": "Translation System Prompt",
  "setting-prompt-desc": "System prompt used for translation. Controls target language and style.",
  "setting-prompt-placeholder": "You are a professional translation assistant...",
  "setting-screenshot": "Screenshot",
  "setting-screenshot-translate-enable": "Enable Screenshot Translation",
  "setting-screenshot-translate-enable-desc": "Enable screenshot translation (requires model with vision support)",
  "setting-screenshot-prompt": "Screenshot Translation Prompt",
  "setting-screenshot-prompt-desc": "Prompt for image translation. Controls output format and style.",
  "setting-screenshot-prompt-placeholder": "Translate the text in this image. Output only the translation...",
  "setting-screenshot-ask-enable": "Enable Screenshot Q&A",
  "setting-screenshot-ask-enable-desc": "Enable screenshot Q&A (requires model with vision support)",
  "setting-screenshot-ask-prompt": "Screenshot Q&A Prompt",
  "setting-screenshot-ask-prompt-desc": "Prompt for screenshot Q&A",
  "setting-screenshot-ask-prompt-placeholder": "What does this image show? Describe briefly...",
  "setting-ask": "AI Q&A",
  "setting-ask-enable": "Enable AI Q&A",
  "setting-ask-enable-desc": "Enter Q&A mode after selecting text",
  "setting-ask-system-prompt": "Q&A System Prompt",
  "setting-ask-system-prompt-desc": "Controls the AI Q&A assistant's role and response style",
  "setting-ask-system-prompt-placeholder": "You are a helpful learning assistant...",
  "setting-ask-thinking": "Enable Q&A Thinking",
  "setting-ask-thinking-desc": "Enable reasoning/thinking mode for Q&A (requires model support)",
  "setting-ask-auto": "Auto Ask",
  "setting-ask-auto-desc": "Automatically send the default question when entering Q&A mode (turn off to show waiting state)",
  "setting-ask-prompt": "Default Text Question",
  "setting-ask-prompt-desc": "Default question auto-sent when text is selected",
  "setting-popup": "Popup Behavior",
  "setting-continuous": "Continuous Translation",
  "setting-continuous-desc": "Automatically translate when text selection changes",
  "setting-dismiss": "Dismiss on Focus Loss",
  "setting-dismiss-desc": "Close popup when clicking outside it",
  "setting-reset-pos": "Reset Popup Position",
  "setting-reset-pos-desc": "Restore popup position to default",
  "setting-reset-btn": "Reset",
  "notice-pos-reset": "Popup position reset",
  "err-no-key": "API Key not configured. Please set it in plugin settings.",
  "err-no-model": "Model not configured. Please set it in plugin settings.",
  "err-api": "API Error: ",
  "err-no-result": "No content returned from API"
};

// locales/zh.json
var zh_default = {
  "plugin-name": "AI \u7FFB\u8BD1\u52A9\u624B",
  "cmd-translate": "\u7FFB\u8BD1\u9009\u4E2D\u6587\u672C",
  "cmd-screenshot": "\u622A\u56FE\u7FFB\u8BD1",
  "cmd-smart": "\u667A\u80FD\u7FFB\u8BD1\uFF08\u81EA\u52A8\u8BC6\u522B\uFF09",
  "cmd-ask": "\u667A\u80FD\u95EE\u7B54\uFF08\u81EA\u52A8\u8BC6\u522B\uFF09",
  "menu-translate": "\u7FFB\u8BD1\u9009\u4E2D\u6587\u672C",
  "menu-screenshot": "\u622A\u56FE\u7FFB\u8BD1",
  "menu-ask": "AI \u95EE\u7B54",
  "notice-select-first": "\u8BF7\u5148\u9009\u4E2D\u8981\u7FFB\u8BD1\u7684\u6587\u672C",
  "notice-screenshot-captured": "\u622A\u56FE\u5DF2\u5B8C\u6210\uFF0C\u6B63\u5728\u7FFB\u8BD1...",
  "notice-screenshot-ask-captured": "\u622A\u56FE\u5DF2\u5B8C\u6210\uFF0C\u6B63\u5728\u89E3\u7B54...",
  "notice-screenshot-cancelled": "\u622A\u56FE\u5DF2\u53D6\u6D88",
  "notice-screenshot-hint": "\u62D6\u52A8\u9F20\u6807\u6846\u9009\u8981\u7FFB\u8BD1\u7684\u533A\u57DF\uFF0C\u6309 Esc \u53D6\u6D88",
  "notice-screenshot-ask-hint": "\u62D6\u52A8\u9F20\u6807\u6846\u9009\u8981\u63D0\u95EE\u7684\u533A\u57DF\uFF0C\u6309 Esc \u53D6\u6D88",
  "notice-screenshot-unsupported": "\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\u622A\u56FE\u529F\u80FD",
  "popup-title": "AI \u7FFB\u8BD1",
  "popup-ask-title": "AI \u95EE\u7B54",
  "popup-translating": "\u7FFB\u8BD1\u4E2D...",
  "popup-thinking": "\u601D\u8003\u4E2D...",
  "popup-continuous": "\u8FDE\u7EED\u7FFB\u8BD1",
  "popup-dismiss-focus": "\u79BB\u7126\u6D88\u5931",
  "popup-waiting": "\u7B49\u5F85\u4F60\u7684\u63D0\u95EE",
  "popup-error": "\u7FFB\u8BD1\u5931\u8D25: ",
  "ask-placeholder": "\u8F93\u5165\u4F60\u7684\u95EE\u9898...",
  "ask-send": "\u53D1\u9001",
  "ask-default-text": "What does this text say?",
  "ask-default-image": "What does this image show?",
  "pager-prev": "\u4E0A\u4E00\u4E2A\u56DE\u7B54",
  "pager-next": "\u4E0B\u4E00\u4E2A\u56DE\u7B54",
  "setting-title": "AI \u7FFB\u8BD1\u8BBE\u7F6E",
  "setting-api": "API \u914D\u7F6E",
  "setting-api-url": "API \u5730\u5740",
  "setting-api-url-desc": "\u517C\u5BB9 OpenAI \u63A5\u53E3\u7684 Base URL\uFF0C\u4F8B\u5982 https://api.xiaomimimo.com/v1",
  "setting-api-key": "API Key",
  "setting-api-key-desc": "\u4F60\u7684 API \u5BC6\u94A5",
  "setting-model": "\u6A21\u578B\u540D\u79F0",
  "setting-model-desc": "\u4F8B\u5982 mimo-v2.5\u3001gpt-4o\u3001qwen-plus \u7B49",
  "setting-thinking": "\u542F\u7528\u601D\u8003\u6A21\u5F0F",
  "setting-thinking-desc": "\u5F00\u542F\u63A8\u7406/\u601D\u8003\u6A21\u5F0F\uFF08\u9700\u8981\u6A21\u578B\u652F\u6301\uFF09",
  "setting-translation": "\u7FFB\u8BD1\u8BBE\u7F6E",
  "setting-prompt": "\u7FFB\u8BD1\u7CFB\u7EDF\u63D0\u793A\u8BCD",
  "setting-prompt-desc": "\u7528\u4E8E\u7FFB\u8BD1\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\uFF0C\u63A7\u5236\u76EE\u6807\u8BED\u8A00\u548C\u98CE\u683C",
  "setting-prompt-placeholder": "\u4F60\u662F\u4E00\u4E2A\u4E13\u4E1A\u7684\u7FFB\u8BD1\u52A9\u624B...",
  "setting-screenshot": "\u622A\u56FE\u8BBE\u7F6E",
  "setting-screenshot-translate-enable": "\u5F00\u542F\u622A\u56FE\u7FFB\u8BD1",
  "setting-screenshot-translate-enable-desc": "\u542F\u7528\u622A\u56FE\u7FFB\u8BD1\u529F\u80FD\uFF08\u9700\u8981\u6A21\u578B\u652F\u6301\u8BC6\u56FE\uFF09",
  "setting-screenshot-prompt": "\u622A\u56FE\u7FFB\u8BD1\u63D0\u793A\u8BCD",
  "setting-screenshot-prompt-desc": "\u7528\u4E8E\u56FE\u7247\u7FFB\u8BD1\u7684\u63D0\u793A\u8BCD\uFF0C\u63A7\u5236\u8F93\u51FA\u683C\u5F0F\u548C\u98CE\u683C",
  "setting-screenshot-prompt-placeholder": "\u8BF7\u7FFB\u8BD1\u56FE\u7247\u4E2D\u7684\u6587\u5B57\uFF0C\u53EA\u8F93\u51FA\u7FFB\u8BD1\u7ED3\u679C...",
  "setting-screenshot-ask-enable": "\u5F00\u542F\u622A\u56FE\u95EE\u7B54",
  "setting-screenshot-ask-enable-desc": "\u542F\u7528\u622A\u56FE\u95EE\u7B54\u529F\u80FD\uFF08\u9700\u8981\u6A21\u578B\u652F\u6301\u8BC6\u56FE\uFF09",
  "setting-screenshot-ask-prompt": "\u622A\u56FE\u95EE\u7B54\u63D0\u793A\u8BCD",
  "setting-screenshot-ask-prompt-desc": "\u7528\u4E8E\u622A\u56FE\u95EE\u7B54\u7684\u63D0\u793A\u8BCD",
  "setting-screenshot-ask-prompt-placeholder": "\u8FD9\u5F20\u56FE\u7247\u663E\u793A\u4E86\u4EC0\u4E48\uFF1F\u8BF7\u7B80\u8981\u63CF\u8FF0...",
  "setting-ask": "AI \u95EE\u7B54",
  "setting-ask-enable": "\u5F00\u542F AI \u95EE\u7B54",
  "setting-ask-enable-desc": "\u5212\u8BCD\u540E\u8FDB\u5165\u95EE\u7B54\u6A21\u5F0F\uFF0C\u53EF\u624B\u52A8\u8F93\u5165\u95EE\u9898",
  "setting-ask-system-prompt": "\u95EE\u7B54\u7CFB\u7EDF\u63D0\u793A\u8BCD",
  "setting-ask-system-prompt-desc": "\u63A7\u5236 AI \u95EE\u7B54\u52A9\u624B\u7684\u89D2\u8272\u548C\u56DE\u7B54\u65B9\u5F0F",
  "setting-ask-system-prompt-placeholder": "\u4F60\u662F\u4E00\u4E2A\u4E50\u4E8E\u52A9\u4EBA\u7684\u5B66\u4E60\u52A9\u624B...",
  "setting-ask-thinking": "\u542F\u7528\u95EE\u7B54\u601D\u8003\u6A21\u5F0F",
  "setting-ask-thinking-desc": "\u5F00\u542F\u95EE\u7B54\u63A8\u7406/\u601D\u8003\u6A21\u5F0F\uFF08\u9700\u8981\u6A21\u578B\u652F\u6301\uFF09",
  "setting-ask-auto": "\u81EA\u52A8\u63D0\u95EE",
  "setting-ask-auto-desc": "\u8FDB\u5165\u95EE\u7B54\u6A21\u5F0F\u540E\u81EA\u52A8\u53D1\u9001\u9ED8\u8BA4\u95EE\u9898\uFF08\u5173\u95ED\u5219\u663E\u793A\u7B49\u5F85\u8F93\u5165\u72B6\u6001\uFF09",
  "setting-ask-prompt": "\u6587\u672C\u9ED8\u8BA4\u63D0\u95EE",
  "setting-ask-prompt-desc": "\u9009\u4E2D\u6587\u672C\u540E\u81EA\u52A8\u53D1\u9001\u7684\u9ED8\u8BA4\u95EE\u9898",
  "setting-popup": "\u5F39\u7A97\u884C\u4E3A",
  "setting-continuous": "\u8FDE\u7EED\u7FFB\u8BD1",
  "setting-continuous-desc": "\u9009\u4E2D\u6587\u672C\u53D8\u5316\u65F6\u81EA\u52A8\u7FFB\u8BD1",
  "setting-dismiss": "\u79BB\u7126\u81EA\u52A8\u5173\u95ED",
  "setting-dismiss-desc": "\u70B9\u51FB\u5F39\u7A97\u5916\u90E8\u65F6\u81EA\u52A8\u5173\u95ED\u5F39\u7A97",
  "setting-reset-pos": "\u91CD\u7F6E\u5F39\u7A97\u4F4D\u7F6E",
  "setting-reset-pos-desc": "\u5C06\u5F39\u7A97\u4F4D\u7F6E\u6062\u590D\u4E3A\u9ED8\u8BA4\u4F4D\u7F6E",
  "setting-reset-btn": "\u91CD\u7F6E",
  "notice-pos-reset": "\u5F39\u7A97\u4F4D\u7F6E\u5DF2\u91CD\u7F6E",
  "err-no-key": "\u672A\u914D\u7F6E API Key\uFF0C\u8BF7\u5728\u63D2\u4EF6\u8BBE\u7F6E\u4E2D\u586B\u5199",
  "err-no-model": "\u672A\u914D\u7F6E\u6A21\u578B\u540D\u79F0\uFF0C\u8BF7\u5728\u63D2\u4EF6\u8BBE\u7F6E\u4E2D\u586B\u5199",
  "err-api": "API \u9519\u8BEF: ",
  "err-no-result": "API \u672A\u8FD4\u56DE\u7FFB\u8BD1\u7ED3\u679C"
};

// src/i18n.js
var localeMap = { en: en_default, zh: zh_default };
function t(key) {
  const lang = window.localStorage.getItem("language") || "en";
  const locale = localeMap[lang] || localeMap[lang.split("-")[0]] || localeMap["en"];
  return locale[key] || en_default[key] || key;
}

// src/api.js
var Api = class {
  constructor(plugin) {
    this.plugin = plugin;
    this.settings = plugin.settings;
  }
  updateSettings(settings) {
    this.settings = settings;
  }
  async translate(text, signal) {
    var _a;
    const { apiBaseUrl, apiKey, model, translateSystemPrompt, enableTranslateThinking } = this.settings;
    if (!apiKey) {
      throw new Error(t("err-no-key"));
    }
    if (!model) {
      throw new Error(t("err-no-model"));
    }
    const baseUrl = apiBaseUrl.replace(/\/+$/, "");
    const url = baseUrl + "/chat/completions";
    const messages = [];
    if (translateSystemPrompt) {
      messages.push({ role: "system", content: translateSystemPrompt });
    }
    messages.push({ role: "user", content: text });
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify(body)
    });
    if (response.status !== 200) {
      let msg = t("err-api") + response.status;
      try {
        const err = response.json;
        if ((_a = err == null ? void 0 : err.error) == null ? void 0 : _a.message) msg += " - " + err.error.message;
      } catch (e) {
      }
      throw new Error(msg);
    }
    const data = response.json;
    if (!data.choices || data.choices.length === 0) {
      throw new Error(t("err-no-result"));
    }
    const result = data.choices[0].message;
    if (enableTranslateThinking && result.reasoning_content) {
      return (result.content || result.reasoning_content).trim();
    }
    return (result.content || "").trim();
  }
  async translateStream(text, onChunk, signal) {
    const { apiBaseUrl, apiKey, model, translateSystemPrompt, enableTranslateThinking } = this.settings;
    if (!apiKey) {
      throw new Error(t("err-no-key"));
    }
    if (!model) {
      throw new Error(t("err-no-model"));
    }
    const baseUrl = apiBaseUrl.replace(/\/+$/, "");
    const url = baseUrl + "/chat/completions";
    const messages = [];
    if (translateSystemPrompt) {
      messages.push({ role: "system", content: translateSystemPrompt });
    }
    messages.push({ role: "user", content: text });
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
      throw new Error(t("err-no-key"));
    }
    if (!model) {
      throw new Error(t("err-no-model"));
    }
    const baseUrl = apiBaseUrl.replace(/\/+$/, "");
    const url = baseUrl + "/chat/completions";
    const prompt = screenshotTranslatePrompt || "Translate all text in this image. Output only the translation.";
    const messages = [];
    if (translateSystemPrompt) {
      messages.push({ role: "system", content: translateSystemPrompt });
    }
    messages.push({
      role: "user",
      content: [
        { type: "text", text: prompt },
        {
          type: "image_url",
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
      throw new Error(t("err-no-key"));
    }
    if (!model) {
      throw new Error(t("err-no-model"));
    }
    const baseUrl = apiBaseUrl.replace(/\/+$/, "");
    const url = baseUrl + "/chat/completions";
    const askSystem = askSystemPrompt || "You are a helpful learning assistant. Answer the user's questions concisely. Use Chinese to answer. Do not use markdown formatting.";
    const messages = [
      { role: "system", content: askSystem },
      { role: "user", content: "Text:\n" + text + "\n\nQuestion: " + question }
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
      throw new Error(t("err-no-key"));
    }
    if (!model) {
      throw new Error(t("err-no-model"));
    }
    const baseUrl = apiBaseUrl.replace(/\/+$/, "");
    const url = baseUrl + "/chat/completions";
    const askSystem = askSystemPrompt || "You are a helpful learning assistant. Answer the user's questions concisely. Use Chinese to answer. Do not use markdown formatting.";
    const messages = [
      { role: "system", content: askSystem },
      {
        role: "user",
        content: [
          { type: "text", text: "Question: " + question },
          {
            type: "image_url",
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
    var _a, _b, _c;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify(body),
      signal
    });
    if (!response.ok) {
      let msg = t("err-api") + response.status;
      try {
        const err = await response.json();
        if ((_a = err == null ? void 0 : err.error) == null ? void 0 : _a.message) msg += " - " + err.error.message;
      } catch (e) {
      }
      throw new Error(msg);
    }
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let fullContent = "";
    let reasoningContent = "";
    while (true) {
      if (signal == null ? void 0 : signal.aborted) {
        reader.cancel();
        throw new DOMException("Aborted", "AbortError");
      }
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || !trimmed.startsWith("data:")) continue;
        const data = trimmed.slice(5).trim();
        if (data === "[DONE]") continue;
        try {
          const parsed = JSON.parse(data);
          const delta = (_c = (_b = parsed.choices) == null ? void 0 : _b[0]) == null ? void 0 : _c.delta;
          if (!delta) continue;
          if (delta.content) {
            fullContent += delta.content;
            onChunk(fullContent, false);
          }
          if (enableThinking && delta.reasoning_content) {
            reasoningContent += delta.reasoning_content;
            onChunk(reasoningContent, true);
          }
        } catch (e) {
        }
      }
    }
    if (enableThinking && reasoningContent && !fullContent) {
      return reasoningContent.trim();
    }
    return fullContent.trim();
  }
};

// src/popup.js
var Popup = class {
  constructor(plugin) {
    this.plugin = plugin;
    this.el = null;
    this.contentEl = null;
    this.continuousToggle = null;
    this.focusToggle = null;
    this.isTranslating = false;
    this.lastTranslatedText = "";
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
    this.mode = "text";
    this.lastTranslatedText = "";
    this.isTranslating = false;
    const settings = this.plugin.settings;
    const popup = this._createPopup();
    const header = this._buildHeader(popup, editor, false);
    const content = document.createElement("div");
    content.className = "ai-tr-popup-content";
    content.textContent = t("popup-translating");
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
    this.mode = "image";
    this.isTranslating = false;
    const popup = this._createPopup();
    const header = this._buildHeader(popup, null, false);
    const preview = this._createPreview(base64Image);
    const content = document.createElement("div");
    content.className = "ai-tr-popup-content";
    content.textContent = t("popup-translating");
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
    this.mode = "ask";
    this.isTranslating = false;
    this._askText = text;
    this._askImage = null;
    const settings = this.plugin.settings;
    const popup = this._createPopup();
    const header = this._buildHeader(popup, editor, true);
    const contentWrapper = document.createElement("div");
    contentWrapper.className = "ai-tr-ask-content-wrap";
    const content = document.createElement("div");
    content.className = "ai-tr-popup-content";
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
      const defaultQ = settings.textAskPrompt || t("ask-default-text");
      this._doAsk(defaultQ);
    } else {
      content.textContent = t("popup-waiting");
      this._updatePager();
      this._focusInput();
    }
  }
  openAskImage(base64Image) {
    this.close();
    this.mode = "ask";
    this.isTranslating = false;
    this._askText = null;
    this._askImage = base64Image;
    const settings = this.plugin.settings;
    const popup = this._createPopup();
    const header = this._buildHeader(popup, null, true);
    const preview = this._createPreview(base64Image);
    const contentWrapper = document.createElement("div");
    contentWrapper.className = "ai-tr-ask-content-wrap";
    const content = document.createElement("div");
    content.className = "ai-tr-popup-content";
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
      const defaultQ = settings.screenshotAskPrompt || t("ask-default-image");
      this._doAsk(defaultQ);
    } else {
      content.textContent = t("popup-waiting");
      this._updatePager();
      this._focusInput();
    }
  }
  _createPopup() {
    const popup = document.createElement("div");
    popup.className = "ai-tr-popup";
    popup.tabIndex = -1;
    popup.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        this.close();
      }
    });
    return popup;
  }
  _createPreview(base64Image) {
    const preview = document.createElement("div");
    preview.className = "ai-tr-screenshot-preview";
    const img = document.createElement("img");
    img.src = base64Image;
    preview.appendChild(img);
    return preview;
  }
  _buildHeader(popup, editor, isAsk) {
    const settings = this.plugin.settings;
    const isImage = this.mode === "image";
    const header = document.createElement("div");
    header.className = "ai-tr-popup-header";
    const title = document.createElement("span");
    title.className = "ai-tr-popup-title";
    title.textContent = isAsk ? t("popup-ask-title") : t("popup-title");
    const actions = document.createElement("div");
    actions.className = "ai-tr-popup-actions";
    if (!isAsk && !isImage) {
      const continuousLabel = document.createElement("label");
      continuousLabel.className = "ai-tr-popup-option";
      const continuousCb = document.createElement("input");
      continuousCb.type = "checkbox";
      continuousCb.checked = settings.continuousTranslate;
      const continuousText = document.createElement("span");
      continuousText.textContent = t("popup-continuous");
      continuousLabel.appendChild(continuousCb);
      continuousLabel.appendChild(continuousText);
      this.continuousToggle = continuousCb;
      continuousCb.addEventListener("change", async () => {
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
    const focusLabel = document.createElement("label");
    focusLabel.className = "ai-tr-popup-option";
    const focusCb = document.createElement("input");
    focusCb.type = "checkbox";
    focusCb.checked = settings.dismissOnFocusLoss;
    const focusText = document.createElement("span");
    focusText.textContent = t("popup-dismiss-focus");
    focusLabel.appendChild(focusCb);
    focusLabel.appendChild(focusText);
    this.focusToggle = focusCb;
    focusCb.addEventListener("change", async () => {
      settings.dismissOnFocusLoss = focusCb.checked;
      await this.plugin.saveSettings();
      this._setupFocusLoss(popup);
    });
    const closeBtn = document.createElement("button");
    closeBtn.className = "ai-tr-popup-close";
    closeBtn.textContent = "\xD7";
    closeBtn.addEventListener("click", () => this.close());
    actions.appendChild(focusLabel);
    actions.appendChild(closeBtn);
    header.appendChild(title);
    header.appendChild(actions);
    return header;
  }
  _buildAskInput(popup) {
    const inputArea = document.createElement("div");
    inputArea.className = "ai-tr-ask-input";
    const input = document.createElement("input");
    input.type = "text";
    input.className = "ai-tr-ask-text";
    input.placeholder = t("ask-placeholder");
    const sendBtn = document.createElement("button");
    sendBtn.className = "ai-tr-ask-send";
    sendBtn.textContent = t("ask-send");
    const onSend = () => {
      const q = input.value.trim();
      if (!q || this.isTranslating) return;
      input.value = "";
      this._doAsk(q);
    };
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        e.stopPropagation();
        onSend();
      }
    });
    sendBtn.addEventListener("click", onSend);
    inputArea.appendChild(input);
    inputArea.appendChild(sendBtn);
    popup.appendChild(inputArea);
    this._askTextarea = input;
  }
  _buildPager(popup) {
    const pager = document.createElement("div");
    pager.className = "ai-tr-ask-pager";
    const prevBtn = document.createElement("button");
    prevBtn.className = "ai-tr-pager-btn";
    prevBtn.textContent = "\u25C0";
    prevBtn.title = t("pager-prev");
    prevBtn.addEventListener("click", () => this._pagerNav(-1));
    const indexEl = document.createElement("span");
    indexEl.className = "ai-tr-pager-index";
    const nextBtn = document.createElement("button");
    nextBtn.className = "ai-tr-pager-btn";
    nextBtn.textContent = "\u25B6";
    nextBtn.title = t("pager-next");
    nextBtn.addEventListener("click", () => this._pagerNav(1));
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
      this._pagerEl.style.display = "none";
      return;
    }
    this._pagerEl.style.display = "flex";
    this._pagerIndexEl.textContent = this._askIndex + 1 + " / " + this._askHistory.length;
  }
  _showHistory() {
    const entry = this._askHistory[this._askIndex];
    if (!entry || !this.contentEl) return;
    this.contentEl.textContent = entry.text;
    this.contentEl.className = "ai-tr-popup-content ai-tr-done";
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
    this.contentEl.textContent = t("popup-thinking");
    this.contentEl.className = "ai-tr-popup-content";
    try {
      let seenContent = false;
      const api = this.plugin.api;
      const onChunk = (chunk, isReasoning) => {
        if (!this.contentEl) return;
        if (isReasoning) {
          if (!seenContent) {
            this.contentEl.textContent = t("popup-thinking");
          }
        } else {
          seenContent = true;
          this.contentEl.textContent = chunk;
        }
      };
      const history = this._askHistory.map((item) => [
        { role: "user", content: this._askImage ? "Question: " + item.question : "Text:\n" + this._askText + "\n\nQuestion: " + item.question },
        { role: "assistant", content: item.text }
      ]).flat();
      let result;
      if (this._askImage) {
        result = await api.askImageStream(this._askImage, question, onChunk, history, this._abortController.signal);
      } else {
        result = await api.askStream(this._askText, question, onChunk, history, this._abortController.signal);
      }
      if (this.contentEl) {
        this.contentEl.className = "ai-tr-popup-content ai-tr-done";
        this._renderMath(this.contentEl, result);
        this._askHistory.push({ question, text: result });
        this._askIndex = this._askHistory.length - 1;
        this._updatePager();
      }
    } catch (error) {
      if (error.name === "AbortError") return;
      if (this.contentEl) {
        this.contentEl.textContent = t("popup-error") + error.message;
        this.contentEl.className = "ai-tr-popup-content ai-tr-error";
      }
    } finally {
      this.isTranslating = false;
      this._abortController = null;
      this._focusInput();
    }
  }
  _setupFocusLoss(popup) {
    if (this._focusLossHandler) {
      popup.removeEventListener("focusout", this._focusLossHandler);
    }
    if (!this.plugin.settings.dismissOnFocusLoss) return;
    this._focusLossHandler = () => {
      setTimeout(() => {
        if (this.el === popup && !popup.contains(document.activeElement)) {
          this.close();
        }
      }, 150);
    };
    popup.addEventListener("focusout", this._focusLossHandler);
  }
  _restorePosition(popup) {
    const saved = this.plugin.settings.popupPosition;
    if (saved && typeof saved.x === "number" && typeof saved.y === "number") {
      const x = Math.max(0, Math.min(saved.x, window.innerWidth - 420));
      const y = Math.max(0, Math.min(saved.y, window.innerHeight - 320));
      popup.style.left = x + "px";
      popup.style.top = y + "px";
    } else {
      popup.style.top = "120px";
      popup.style.right = "20px";
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
      if (e.target.closest("button") || e.target.closest("label") || e.target.closest("input")) return;
      e.preventDefault();
      dragging = true;
      startX = e.clientX;
      startY = e.clientY;
      origLeft = popup.offsetLeft;
      origTop = popup.offsetTop;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };
    const onMouseMove = (e) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      popup.style.left = origLeft + dx + "px";
      popup.style.top = origTop + dy + "px";
      popup.style.right = "auto";
    };
    const onMouseUp = () => {
      dragging = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      this._savePosition(popup);
    };
    handle.addEventListener("mousedown", onMouseDown);
  }
  _startMonitoring(editor) {
    this._stopMonitoring();
    this.monitorInterval = setInterval(() => {
      let selection = "";
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
    this.contentEl.textContent = t("popup-translating");
    this.contentEl.className = "ai-tr-popup-content";
    try {
      let seenContent = false;
      const result = await this.plugin.api.translateStream(text, (chunk, isReasoning) => {
        if (!this.contentEl) return;
        if (isReasoning) {
          if (!seenContent) {
            this.contentEl.textContent = t("popup-thinking");
          }
        } else {
          seenContent = true;
          this.contentEl.textContent = chunk;
        }
      }, this._abortController.signal);
      if (this.contentEl) {
        this.contentEl.className = "ai-tr-popup-content ai-tr-done";
        this._renderMath(this.contentEl, result);
      }
    } catch (error) {
      if (error.name === "AbortError") return;
      if (this.contentEl) {
        this.contentEl.textContent = t("popup-error") + error.message;
        this.contentEl.className = "ai-tr-popup-content ai-tr-error";
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
    this.contentEl.textContent = t("popup-translating");
    this.contentEl.className = "ai-tr-popup-content";
    try {
      let seenContent = false;
      const result = await this.plugin.api.translateImageStream(base64Image, (chunk, isReasoning) => {
        if (!this.contentEl) return;
        if (isReasoning) {
          if (!seenContent) {
            this.contentEl.textContent = t("popup-thinking");
          }
        } else {
          seenContent = true;
          this.contentEl.textContent = chunk;
        }
      }, this._abortController.signal);
      if (this.contentEl) {
        this.contentEl.className = "ai-tr-popup-content ai-tr-done";
        this._renderMath(this.contentEl, result);
      }
    } catch (error) {
      if (error.name === "AbortError") return;
      if (this.contentEl) {
        this.contentEl.textContent = t("popup-error") + error.message;
        this.contentEl.className = "ai-tr-popup-content ai-tr-error";
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
    const escaped = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const withMath = escaped.replace(/\$\$([\s\S]+?)\$\$/g, '<div class="math-block">$$$$$1$$$$</div>').replace(/\$([^\$\n]+?)\$/g, '<span class="math-inline">$$$1$$</span>');
    el.innerHTML = withMath;
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([el]).catch(() => {
      });
    }
  }
};

// src/screenshot.js
var MAX_IMAGE_SIZE = 1024;
var ScreenCapture = class {
  constructor(plugin) {
    this.plugin = plugin;
  }
  async capture(hintText) {
    let imageDataUrl;
    try {
      imageDataUrl = await this._captureElectronWindow();
    } catch (e) {
      throw new Error(t("notice-screenshot-unsupported"));
    }
    const region = await this._selectRegion(imageDataUrl, hintText);
    if (!region) return null;
    return this._cropAndResize(imageDataUrl, region);
  }
  async _captureElectronWindow() {
    let remote;
    try {
      const electron = window.require("electron");
      remote = electron.remote;
    } catch (e) {
    }
    if (!remote) {
      try {
        remote = window.require("@electron/remote");
      } catch (e) {
      }
    }
    if (!remote) {
      throw new Error("remote not available");
    }
    const webContents = remote.getCurrentWebContents();
    const nativeImage = await webContents.capturePage();
    return nativeImage.toDataURL();
  }
  _selectRegion(imageDataUrl, hintText) {
    return new Promise((resolve) => {
      const overlay = document.createElement("div");
      overlay.className = "ai-tr-screenshot-overlay";
      const img = new Image();
      img.className = "ai-tr-screenshot-bg";
      img.src = imageDataUrl;
      const hint = document.createElement("div");
      hint.className = "ai-tr-screenshot-hint";
      hint.textContent = hintText || t("notice-screenshot-hint");
      const selection = document.createElement("div");
      selection.className = "ai-tr-screenshot-selection";
      selection.style.display = "none";
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
        selection.style.left = startX + "px";
        selection.style.top = startY + "px";
        selection.style.width = "0px";
        selection.style.height = "0px";
        selection.style.display = "block";
        hint.style.display = "none";
      };
      const onMouseMove = (e) => {
        if (!isDrawing) return;
        const x = Math.min(e.clientX, startX);
        const y = Math.min(e.clientY, startY);
        const w = Math.abs(e.clientX - startX);
        const h = Math.abs(e.clientY - startY);
        selection.style.left = x + "px";
        selection.style.top = y + "px";
        selection.style.width = w + "px";
        selection.style.height = h + "px";
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
        if (x2 - x1 < 5 || y2 - y1 < 5) {
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
        if (e.key === "Escape") {
          cleanup();
          resolve(null);
        }
      };
      const cleanup = () => {
        overlay.remove();
        document.removeEventListener("mousedown", onMouseDown, true);
        document.removeEventListener("mousemove", onMouseMove, true);
        document.removeEventListener("mouseup", onMouseUp, true);
        document.removeEventListener("keydown", onKeyDown, true);
      };
      document.addEventListener("mousedown", onMouseDown, true);
      document.addEventListener("mousemove", onMouseMove, true);
      document.addEventListener("mouseup", onMouseUp, true);
      document.addEventListener("keydown", onKeyDown, true);
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
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, region.x, region.y, region.w, region.h, 0, 0, w, h);
        resolve(canvas.toDataURL("image/jpeg", 0.85));
      };
      img.onerror = () => reject(new Error("Failed to process image"));
      img.src = imageDataUrl;
    });
  }
};

// src/settings.js
var import_obsidian = require("obsidian");
var TranslatorSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: t("setting-title") });
    containerEl.createEl("h3", { text: t("setting-api") });
    new import_obsidian.Setting(containerEl).setName(t("setting-api-url")).setDesc(t("setting-api-url-desc")).addText((text) => text.setPlaceholder("https://api.xiaomimimo.com/v1").setValue(this.plugin.settings.apiBaseUrl).onChange(async (value) => {
      this.plugin.settings.apiBaseUrl = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName(t("setting-api-key")).setDesc(t("setting-api-key-desc")).addText((text) => {
      text.inputEl.type = "password";
      text.setPlaceholder("sk-...").setValue(this.plugin.settings.apiKey).onChange(async (value) => {
        this.plugin.settings.apiKey = value;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(containerEl).setName(t("setting-model")).setDesc(t("setting-model-desc")).addText((text) => text.setPlaceholder("mimo-v2.5").setValue(this.plugin.settings.model).onChange(async (value) => {
      this.plugin.settings.model = value;
      await this.plugin.saveSettings();
    }));
    containerEl.createEl("h3", { text: t("setting-translation") });
    new import_obsidian.Setting(containerEl).setName(t("setting-prompt")).setDesc(t("setting-prompt-desc")).addTextArea((text) => text.setPlaceholder(t("setting-prompt-placeholder")).setValue(this.plugin.settings.translateSystemPrompt).onChange(async (value) => {
      this.plugin.settings.translateSystemPrompt = value;
      await this.plugin.saveSettings();
    }).then((ta) => {
      ta.inputEl.rows = 5;
      ta.inputEl.style.width = "100%";
    }));
    new import_obsidian.Setting(containerEl).setName(t("setting-thinking")).setDesc(t("setting-thinking-desc")).addToggle((toggle) => toggle.setValue(this.plugin.settings.enableTranslateThinking).onChange(async (value) => {
      this.plugin.settings.enableTranslateThinking = value;
      await this.plugin.saveSettings();
    }));
    containerEl.createEl("h3", { text: t("setting-screenshot") });
    new import_obsidian.Setting(containerEl).setName(t("setting-screenshot-translate-enable")).setDesc(t("setting-screenshot-translate-enable-desc")).addToggle((toggle) => toggle.setValue(this.plugin.settings.enableScreenshotTranslate).onChange(async (value) => {
      this.plugin.settings.enableScreenshotTranslate = value;
      await this.plugin.saveSettings();
      this.display();
    }));
    if (this.plugin.settings.enableScreenshotTranslate) {
      new import_obsidian.Setting(containerEl).setName(t("setting-screenshot-prompt")).setDesc(t("setting-screenshot-prompt-desc")).addTextArea((text) => text.setPlaceholder(t("setting-screenshot-prompt-placeholder")).setValue(this.plugin.settings.screenshotTranslatePrompt).onChange(async (value) => {
        this.plugin.settings.screenshotTranslatePrompt = value;
        await this.plugin.saveSettings();
      }).then((ta) => {
        ta.inputEl.rows = 3;
        ta.inputEl.style.width = "100%";
      }));
    }
    new import_obsidian.Setting(containerEl).setName(t("setting-screenshot-ask-enable")).setDesc(t("setting-screenshot-ask-enable-desc")).addToggle((toggle) => toggle.setValue(this.plugin.settings.enableScreenshotAsk).onChange(async (value) => {
      this.plugin.settings.enableScreenshotAsk = value;
      await this.plugin.saveSettings();
      this.display();
    }));
    if (this.plugin.settings.enableScreenshotAsk) {
      new import_obsidian.Setting(containerEl).setName(t("setting-screenshot-ask-prompt")).setDesc(t("setting-screenshot-ask-prompt-desc")).addTextArea((text) => text.setPlaceholder(t("setting-screenshot-ask-prompt-placeholder")).setValue(this.plugin.settings.screenshotAskPrompt).onChange(async (value) => {
        this.plugin.settings.screenshotAskPrompt = value;
        await this.plugin.saveSettings();
      }).then((ta) => {
        ta.inputEl.rows = 3;
        ta.inputEl.style.width = "100%";
      }));
    }
    containerEl.createEl("h3", { text: t("setting-ask") });
    new import_obsidian.Setting(containerEl).setName(t("setting-ask-enable")).setDesc(t("setting-ask-enable-desc")).addToggle((toggle) => toggle.setValue(this.plugin.settings.enableAsk).onChange(async (value) => {
      this.plugin.settings.enableAsk = value;
      await this.plugin.saveSettings();
      this.display();
    }));
    if (this.plugin.settings.enableAsk) {
      new import_obsidian.Setting(containerEl).setName(t("setting-ask-system-prompt")).setDesc(t("setting-ask-system-prompt-desc")).addTextArea((text) => text.setPlaceholder(t("setting-ask-system-prompt-placeholder")).setValue(this.plugin.settings.askSystemPrompt).onChange(async (value) => {
        this.plugin.settings.askSystemPrompt = value;
        await this.plugin.saveSettings();
      }).then((ta) => {
        ta.inputEl.rows = 4;
        ta.inputEl.style.width = "100%";
      }));
      new import_obsidian.Setting(containerEl).setName(t("setting-ask-thinking")).setDesc(t("setting-ask-thinking-desc")).addToggle((toggle) => toggle.setValue(this.plugin.settings.enableAskThinking).onChange(async (value) => {
        this.plugin.settings.enableAskThinking = value;
        await this.plugin.saveSettings();
      }));
      new import_obsidian.Setting(containerEl).setName(t("setting-ask-auto")).setDesc(t("setting-ask-auto-desc")).addToggle((toggle) => toggle.setValue(this.plugin.settings.enableAutoAsk).onChange(async (value) => {
        this.plugin.settings.enableAutoAsk = value;
        await this.plugin.saveSettings();
        this.display();
      }));
      if (this.plugin.settings.enableAutoAsk) {
        new import_obsidian.Setting(containerEl).setName(t("setting-ask-prompt")).setDesc(t("setting-ask-prompt-desc")).addText((text) => text.setPlaceholder("What does this text say?").setValue(this.plugin.settings.textAskPrompt).onChange(async (value) => {
          this.plugin.settings.textAskPrompt = value;
          await this.plugin.saveSettings();
        }));
      }
    }
    containerEl.createEl("h3", { text: t("setting-popup") });
    new import_obsidian.Setting(containerEl).setName(t("setting-continuous")).setDesc(t("setting-continuous-desc")).addToggle((toggle) => toggle.setValue(this.plugin.settings.continuousTranslate).onChange(async (value) => {
      this.plugin.settings.continuousTranslate = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName(t("setting-dismiss")).setDesc(t("setting-dismiss-desc")).addToggle((toggle) => toggle.setValue(this.plugin.settings.dismissOnFocusLoss).onChange(async (value) => {
      this.plugin.settings.dismissOnFocusLoss = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName(t("setting-reset-pos")).setDesc(t("setting-reset-pos-desc")).addButton((btn) => btn.setButtonText(t("setting-reset-btn")).onClick(async () => {
      delete this.plugin.settings.popupPosition;
      await this.plugin.saveSettings();
      new import_obsidian.Notice(t("notice-pos-reset"));
    }));
  }
};

// src/main.js
var DEFAULT_SETTINGS = {
  apiBaseUrl: "https://api.xiaomimimo.com/v1",
  apiKey: "",
  model: "mimo-v2.5",
  enableTranslateThinking: false,
  translateSystemPrompt: "You are a professional translator. Translate the user's text into natural, fluent Simplified Chinese. If the text is already in Chinese, translate it into English. Output only the translation. Do not use markdown formatting.",
  continuousTranslate: true,
  dismissOnFocusLoss: true,
  popupPosition: null,
  enableScreenshotTranslate: false,
  screenshotTranslatePrompt: "Translate all text in this image. Output only the translation.",
  enableScreenshotAsk: false,
  screenshotAskPrompt: "What does this image show? Answer concisely.",
  enableAsk: false,
  enableAutoAsk: true,
  enableAskThinking: false,
  textAskPrompt: "What does this text say?",
  askSystemPrompt: "You are a helpful learning assistant. Answer the user's questions concisely. Use Chinese to answer. Do not use markdown formatting."
};
var AITranslatorPlugin = class extends import_obsidian2.Plugin {
  async onload() {
    await this.loadSettings();
    this.api = new Api(this);
    this.popup = new Popup(this);
    this.screenCapture = new ScreenCapture(this);
    this.addCommand({
      id: "smart-translate",
      name: t("cmd-smart"),
      callback: () => {
        const text = this.getSelectedText();
        if (text) {
          this.popup.open(text, this.getEditor());
        } else if (this.settings.enableScreenshotTranslate) {
          this._handleScreenshotTranslate();
        } else {
          new import_obsidian2.Notice(t("notice-select-first"));
        }
      }
    });
    this.addCommand({
      id: "smart-ask",
      name: t("cmd-ask"),
      callback: () => {
        const text = this.getSelectedText();
        if (text) {
          this.popup.openAsk(text, this.getEditor());
        } else if (this.settings.enableScreenshotAsk) {
          this._handleScreenshotAsk();
        } else {
          new import_obsidian2.Notice(t("notice-select-first"));
        }
      }
    });
    this.registerEvent(
      this.app.workspace.on("editor-menu", (menu, editor) => {
        menu.addItem((item) => {
          item.setTitle(t("menu-translate")).setIcon("languages").onClick(() => {
            const selection = editor.getSelection();
            if (selection) {
              this.popup.open(selection, editor);
            } else {
              new import_obsidian2.Notice(t("notice-select-first"));
            }
          });
        });
        if (this.settings.enableAsk) {
          menu.addItem((item) => {
            item.setTitle(t("menu-ask")).setIcon("message-square").onClick(() => {
              const selection = editor.getSelection();
              if (selection) {
                this.popup.openAsk(selection, editor);
              } else {
                new import_obsidian2.Notice(t("notice-select-first"));
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
        return "";
      }
      return sel.toString();
    }
    return "";
  }
  getEditor() {
    const view = this.app.workspace.getActiveViewOfType(import_obsidian2.MarkdownView);
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
      new import_obsidian2.Notice(t("notice-screenshot-unsupported"));
      return;
    }
    try {
      const base64Image = await this.screenCapture.capture(t("notice-screenshot-hint"));
      if (!base64Image) {
        new import_obsidian2.Notice(t("notice-screenshot-cancelled"));
        return;
      }
      new import_obsidian2.Notice(t("notice-screenshot-captured"));
      this.popup.openImage(base64Image);
    } catch (error) {
      if (error.name === "NotAllowedError") {
        new import_obsidian2.Notice(t("notice-screenshot-cancelled"));
      } else {
        new import_obsidian2.Notice(t("popup-error") + error.message);
      }
    }
  }
  async _handleScreenshotAsk() {
    if (!this.settings.enableScreenshotAsk) {
      new import_obsidian2.Notice(t("notice-screenshot-unsupported"));
      return;
    }
    try {
      const base64Image = await this.screenCapture.capture(t("notice-screenshot-ask-hint"));
      if (!base64Image) {
        new import_obsidian2.Notice(t("notice-screenshot-cancelled"));
        return;
      }
      new import_obsidian2.Notice(t("notice-screenshot-ask-captured"));
      this.popup.openAskImage(base64Image);
    } catch (error) {
      if (error.name === "NotAllowedError") {
        new import_obsidian2.Notice(t("notice-screenshot-cancelled"));
      } else {
        new import_obsidian2.Notice(t("popup-error") + error.message);
      }
    }
  }
};
