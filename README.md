# AI 翻译助手 / AI Translator

一个轻量级的翻译窗口，用于阅读笔记和PDF —— 选择文本即可立即翻译。兼容任何兼容 OpenAI 的 API。

A lightweight translation popup for notes and PDFs — just select text and translate instantly. Compatible with any OpenAI-compatible API.


## 功能 / Features

- **弹窗翻译 / Popup Translation** — 独立弹窗显示翻译结果，不影响正文，支持选中复制 / Translation results in a standalone popup; supports selection and copying
- **PDF 支持 / PDF Support** — 在 PDF 视图中选中文本即可翻译 / Translate selected text directly in PDF views
- **连续翻译 / Continuous Translation** — 选中内容变化时自动重新翻译（PDF 下自动防抖） / Automatically re-translate when selection changes (built-in debounce for PDF)

- **OpenAI 兼容 / OpenAI Compatible** — 手动配置 API 地址、Key、模型名称 / Manually configure API endpoint, key, and model name
- **思考模式 / Thinking Mode** — 支持 `enable_thinking`，适配推理模型 / Supports `enable_thinking` for reasoning models
- **自定义提示词 / Custom Prompt** — 自由控制翻译风格和目标语言 / Control translation style and target language


## 使用 / Usage

1. 在 `设置 → 第三方插件 → AI Translator` 中配置 OpenAI API / Configure OpenAI API in `Settings → Community plugins → AI Translator`
2. 在设置 → 快捷键中，找到「AI Translator: 翻译选中文本」，设置快捷键（如 `Alt+Z`）/ Go to `Settings → Hotkeys`, find "AI Translator: Translate Selection", set a shortcut (e.g., `Alt+Z`)
3. 选中文本，按下快捷键即可翻译 / Select text and press the shortcut to translate


## 开发 / Development

```bash
npm install
npm run dev    # 监听模式 / Watch mode
npm run build  # 生产构建 / Production build
```

## 许可证 / License

[GPL-3.0](LICENSE)
