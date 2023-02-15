import { createApp } from "vue"

import "normalize.css"
import "element-plus/dist/index.css"

import VueMarkdownEditor from "@kangc/v-md-editor"

import VMdPreviewHtml from "@kangc/v-md-editor/lib/preview-html"
import "@kangc/v-md-editor/lib/style/preview-html.css"
import "@kangc/v-md-editor/lib/style/preview.css"
import githubTheme from "@kangc/v-md-editor/lib/theme/github.js"
import "@kangc/v-md-editor/lib/theme/style/github.css"

import VMdPreview from "@kangc/v-md-editor/lib/preview"
import hljs from "highlight.js"

VMdPreview.use(githubTheme, {
	Hljs: hljs,
})

import App from "./App.vue"
import router from "./router"
import pinia from "./store"
import "@/assets/css/reset.css"

const app = createApp(App)

app.use(VMdPreviewHtml)
app.use(VMdPreview)

app.use(router)
app.use(pinia)

app.mount("#app")
