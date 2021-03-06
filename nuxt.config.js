export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "letao",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["vant/lib/index.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/vant", "@/plugins/axios", "@/plugins/axios/api"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // axios配置
  axios: {
    // 开启代理
    proxy: true,
    // 前缀
    prefix: "/api"
  },

  // 代理配置
  proxy: {
    "/api": {
      target: "http://localhost:3666",
      pathRewrite: {
        "^/api": "/"
      }
    }
  },

  server: {
    ip: "localhost",
    port: 8080
  },
  loading: "~/components/Loading.vue"
};
