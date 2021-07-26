import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_5357fe80 from 'nuxt_plugin_plugin_5357fe80' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_workbox_f0e3b91c from 'nuxt_plugin_workbox_f0e3b91c' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_nuxticons_e7c4599c from 'nuxt_plugin_nuxticons_e7c4599c' // Source: ./nuxt-icons.js (mode: 'all')
import nuxt_plugin_webfontloader_6a474854 from 'nuxt_plugin_webfontloader_6a474854' // Source: ./webfontloader.js (mode: 'client')
import nuxt_plugin_googleanalytics_6e396a90 from 'nuxt_plugin_googleanalytics_6e396a90' // Source: ./google-analytics.js (mode: 'client')
import nuxt_plugin_dayjsplugin_c8469f72 from 'nuxt_plugin_dayjsplugin_c8469f72' // Source: ./dayjs-plugin.js (mode: 'all')
import nuxt_plugin_vuescrollto_53dc20e5 from 'nuxt_plugin_vuescrollto_53dc20e5' // Source: ../plugins/vue-scrollto (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"htmlAttrs":{"prefix":"og: http:\u002F\u002Fogp.me\u002Fns#","lang":"ja"},"titleTemplate":"%s | microCMSブログ","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"microCMSはAPIベースの日本製ヘッドレスCMSです。本ブログはmicroCMSの開発メンバーがmicroCMSの使い方や技術的な内容を発信するブログです。"},{"hid":"og:site_name","property":"og:site_name","content":"microCMSブログ"},{"hid":"og:type","property":"og:type","content":"website"},{"hid":"og:url","property":"og:url","content":"https:\u002F\u002Fblog.microcms.io"},{"hid":"og:title","property":"og:title","content":"microCMSブログ"},{"hid":"og:description","property":"og:description","content":"microCMSはAPIベースの日本製ヘッドレスCMSです。本ブログはmicroCMSの開発メンバーがmicroCMSの使い方や技術的な内容を発信するブログです。"},{"hid":"og:image","property":"og:image","content":"https:\u002F\u002Fblog.microcms.io\u002Fimages\u002Fogp.png"},{"name":"twitter:card","content":"summary_large_image"},{"name":"twitter:site","content":"@micro_cms"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"microcms-blog"},{"hid":"theme-color","name":"theme-color","content":"#331cbf"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"https:\u002F\u002Fblog.microcms.io\u002Ffavicon.png"},{"rel":"alternate","type":"application\u002Fatom+xml","href":"https:\u002F\u002Fblog.microcms.io\u002Ffeed.xml","title":"Atom"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.0cef9e0e.json"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64.41cbf0.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512.41cbf0.png","sizes":"512x512"}],"script":[{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Flazysizes\u002F5.2.2\u002Flazysizes.min.js","async":true}],"style":[],"title":"microcms-blog"},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_5357fe80 === 'function') {
    await nuxt_plugin_plugin_5357fe80(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_f0e3b91c === 'function') {
    await nuxt_plugin_workbox_f0e3b91c(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxticons_e7c4599c === 'function') {
    await nuxt_plugin_nuxticons_e7c4599c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_webfontloader_6a474854 === 'function') {
    await nuxt_plugin_webfontloader_6a474854(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_6e396a90 === 'function') {
    await nuxt_plugin_googleanalytics_6e396a90(app.context, inject)
  }

  if (typeof nuxt_plugin_dayjsplugin_c8469f72 === 'function') {
    await nuxt_plugin_dayjsplugin_c8469f72(app.context, inject)
  }

  if (typeof nuxt_plugin_vuescrollto_53dc20e5 === 'function') {
    await nuxt_plugin_vuescrollto_53dc20e5(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    router.push(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
