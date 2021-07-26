import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Banner: () => import('../../components/Banner.vue' /* webpackChunkName: "components/banner" */).then(c => wrapFunctional(c.default || c)),
  Breadcrumb: () => import('../../components/Breadcrumb.vue' /* webpackChunkName: "components/breadcrumb" */).then(c => wrapFunctional(c.default || c)),
  Categories: () => import('../../components/Categories.vue' /* webpackChunkName: "components/categories" */).then(c => wrapFunctional(c.default || c)),
  Conversion: () => import('../../components/Conversion.vue' /* webpackChunkName: "components/conversion" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  Latest: () => import('../../components/Latest.vue' /* webpackChunkName: "components/latest" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Meta: () => import('../../components/Meta.vue' /* webpackChunkName: "components/meta" */).then(c => wrapFunctional(c.default || c)),
  Partner: () => import('../../components/Partner.vue' /* webpackChunkName: "components/partner" */).then(c => wrapFunctional(c.default || c)),
  PopularArticles: () => import('../../components/PopularArticles.vue' /* webpackChunkName: "components/popular-articles" */).then(c => wrapFunctional(c.default || c)),
  Post: () => import('../../components/Post.vue' /* webpackChunkName: "components/post" */).then(c => wrapFunctional(c.default || c)),
  RelatedBlogs: () => import('../../components/RelatedBlogs.vue' /* webpackChunkName: "components/related-blogs" */).then(c => wrapFunctional(c.default || c)),
  Search: () => import('../../components/Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c)),
  Share: () => import('../../components/Share.vue' /* webpackChunkName: "components/share" */).then(c => wrapFunctional(c.default || c)),
  Toc: () => import('../../components/Toc.vue' /* webpackChunkName: "components/toc" */).then(c => wrapFunctional(c.default || c)),
  Writer: () => import('../../components/Writer.vue' /* webpackChunkName: "components/writer" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
