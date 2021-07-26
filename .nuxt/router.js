import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _39113bae = () => interopDefault(import('../pages/404.vue' /* webpackChunkName: "pages/404" */))
const _2f4ee95a = () => interopDefault(import('../pages/draft/index.vue' /* webpackChunkName: "pages/draft/index" */))
const _98a88eb6 = () => interopDefault(import('../pages/search/index.vue' /* webpackChunkName: "pages/search/index" */))
const _5d66bec8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _73508403 = () => interopDefault(import('../pages/_slug/index.vue' /* webpackChunkName: "pages/_slug/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _39113bae,
    name: "404"
  }, {
    path: "/draft",
    component: _2f4ee95a,
    name: "draft"
  }, {
    path: "/search",
    component: _98a88eb6,
    name: "search"
  }, {
    path: "/",
    component: _5d66bec8,
    name: "index"
  }, {
    path: "/:slug",
    component: _73508403,
    name: "slug"
  }, {
    path: "/page/:id",
    component: _5d66bec8,
    name: "pages"
  }, {
    path: "/category/:categoryId/page/:id",
    component: _5d66bec8,
    name: "categories"
  }, {
    path: "*",
    component: _39113bae,
    name: "custom"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
