import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _73e09fd0 = () => interopDefault(import('../pages/404.vue' /* webpackChunkName: "pages/404" */))
const _0235c7a5 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _d0dde908 = () => interopDefault(import('../pages/draft/index.vue' /* webpackChunkName: "pages/draft/index" */))
const _53addac3 = () => interopDefault(import('../pages/search/index.vue' /* webpackChunkName: "pages/search/index" */))
const _21eda26a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _48dab3b6 = () => interopDefault(import('../pages/_slug/index.vue' /* webpackChunkName: "pages/_slug/index" */))

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
    component: _73e09fd0,
    name: "404"
  }, {
    path: "/about",
    component: _0235c7a5,
    name: "about"
  }, {
    path: "/draft",
    component: _d0dde908,
    name: "draft"
  }, {
    path: "/search",
    component: _53addac3,
    name: "search"
  }, {
    path: "/",
    component: _21eda26a,
    name: "index"
  }, {
    path: "/:slug",
    component: _48dab3b6,
    name: "slug"
  }, {
    path: "/page/:id",
    component: _21eda26a,
    name: "pages"
  }, {
    path: "/category/:categoryId/page/:id",
    component: _21eda26a,
    name: "categories"
  }, {
    path: "*",
    component: _73e09fd0,
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
