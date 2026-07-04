# AI 翻译助手 / AI Translator

一个轻量级的翻译窗口，用于阅读笔记和 PDF —— 选择文本即可立即翻译。支持截图翻译、AI 提问和流式输出。兼容任何 OpenAI 兼容 API。

A lightweight translation popup for notes and PDFs — select text and translate instantly. Supports screenshot translation, AI asking, and streaming output. Compatible with any OpenAI-compatible API.


## 功能 / Features

- **弹窗翻译 / Popup Translation** — 独立弹窗显示翻译结果，不影响正文，支持选中复制 / Translation results in a standalone popup; supports selection and copying
- **流式输出 / Streaming Output** — 翻译结果逐字实时显示，无需等待完整响应 / Translation results appear in real-time token by token
- **PDF 支持 / PDF Support** — 在 PDF 视图中选中文本即可翻译 / Translate selected text directly in PDF views
- **连续翻译 / Continuous Translation** — 选中内容变化时自动重新翻译 / Automatically re-translate when selection changes
- **截图翻译 / Screenshot Translation** — 截取窗口内容，框选区域后利用多模态模型识别并翻译图片中的文字 / Capture the Obsidian window, select a region, and translate text in images using a multimodal model
- **AI 提问 / AI Ask** — 划词或截图后，输入任意问题对选中内容提问（可自动发送默认问题）/ Select text or take a screenshot, then ask any question about it (auto-ask supported)
- **思考模式 / Thinking Mode** — 支持 `enable_thinking`，适配推理模型，思考时显示「思考中...」/ Supports `enable_thinking` for reasoning models; shows "Thinking..." during reasoning
- **自定义提示词 / Custom Prompt** — 自由控制翻译风格和目标语言 / Control translation style and target language
- **LaTeX 渲染 / LaTeX Rendering** — 翻译结果中的数学公式自动渲染 / Math formulas in translation results are rendered automatically
- **智能翻译 / Smart Translate** — 一个快捷键搞定文本翻译和截图翻译 / One shortcut for both text and screenshot translation
- **离焦消失 / Dismiss on Blur** — 点击弹窗外部自动关闭，ESC 也可以关闭 / Close popup by clicking outside or pressing ESC


## 使用 / Usage

1. 在 `设置 → 第三方插件 → AI Translator` 中配置 API 地址、Key 和模型名称 / Configure API endpoint, key, and model in `Settings → Community plugins → AI Translator`
2. 在 `设置 → 快捷键` 中绑定以下命令 / Go to `Settings → Hotkeys` and bind:
   - **智能翻译 / Smart Translate** — 有选中文本时翻译文本，无选中时自动截图翻译 / Translates selected text if available; otherwise triggers screenshot translate
   - **智能提问 / Smart Ask** — 有选中文本时对文本提问，无选中时对截图提问（需开启 AI 提问）/ Ask about selected text if available; otherwise ask about screenshot (requires AI Ask enabled)
3. 按下快捷键即可使用 / Press the shortcut to use


## 设置说明 / Settings

### API 配置 / API Configuration

| 设置项 / Setting | 说明 / Description |
| --- | --- |
| API 地址 / API URL | OpenAI 兼容接口的 Base URL / OpenAI-compatible base URL |
| API Key | 你的 API 密钥 / Your API key |
| 模型名称 / Model | 如 mimo-v2.5、gpt-4o 等 / e.g. mimo-v2.5, gpt-4o |

### 翻译设置 / Translation

| 设置项 / Setting | 说明 / Description |
| --- | --- |
| 系统提示词 / System Prompt | 控制翻译行为和目标语言 / Controls translation behavior and target language |
| 启用思考模式 / Enable Thinking | 开启推理模式，适配推理模型（会显示「思考中...」）/ Enable reasoning mode for reasoning models |

### 截图翻译 / Screenshot Translation

| 设置项 / Setting | 说明 / Description |
| --- | --- |
| 开启截图翻译 / Enable Screenshot | 启用后可使用截图翻译功能（需要模型支持识图）/ Enable screenshot translation (requires vision model) |
| 截图翻译提示词 / Screenshot Prompt | 控制图片翻译的输出格式 / Controls image translation output format |

### AI 提问 / AI Ask

| 设置项 / Setting | 说明 / Description |
| --- | --- |
| 开启 AI 提问 / Enable AI Ask | 启用后可通过快捷键进入提问模式 / Enable ask mode via hotkey |
| 自动提问 / Auto Ask | 进入提问模式后自动发送默认问题（关闭则显示等待输入状态）/ Auto-send default question when entering ask mode |

### 弹窗行为 / Popup Behavior

| 设置项 / Setting | 说明 / Description |
| --- | --- |
| 连续翻译 / Continuous | 选中文本变化时自动翻译 / Auto-translate when text selection changes |
| 离焦自动关闭 / Dismiss on Focus Loss | 点击弹窗外部时关闭 / Close popup when clicking outside |
| 重置弹窗位置 / Reset Position | 恢复弹窗到默认位置 / Restore popup to default position |


## 开发 / Development

```bash
npm install
npm run dev    # 监听模式 / Watch mode
npm run build  # 生产构建 / Production build
```

## 许可证 / License

[GPL-3.0](LICENSE)
