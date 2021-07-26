import { wrapFunctional } from './utils'

export { default as Banner } from '../../components/Banner.vue'
export { default as Breadcrumb } from '../../components/Breadcrumb.vue'
export { default as Categories } from '../../components/Categories.vue'
export { default as Conversion } from '../../components/Conversion.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Latest } from '../../components/Latest.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Meta } from '../../components/Meta.vue'
export { default as Partner } from '../../components/Partner.vue'
export { default as PopularArticles } from '../../components/PopularArticles.vue'
export { default as Post } from '../../components/Post.vue'
export { default as RelatedBlogs } from '../../components/RelatedBlogs.vue'
export { default as Search } from '../../components/Search.vue'
export { default as Share } from '../../components/Share.vue'
export { default as Toc } from '../../components/Toc.vue'
export { default as Writer } from '../../components/Writer.vue'

export const LazyBanner = import('../../components/Banner.vue' /* webpackChunkName: "components/banner" */).then(c => wrapFunctional(c.default || c))
export const LazyBreadcrumb = import('../../components/Breadcrumb.vue' /* webpackChunkName: "components/breadcrumb" */).then(c => wrapFunctional(c.default || c))
export const LazyCategories = import('../../components/Categories.vue' /* webpackChunkName: "components/categories" */).then(c => wrapFunctional(c.default || c))
export const LazyConversion = import('../../components/Conversion.vue' /* webpackChunkName: "components/conversion" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyLatest = import('../../components/Latest.vue' /* webpackChunkName: "components/latest" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyMeta = import('../../components/Meta.vue' /* webpackChunkName: "components/meta" */).then(c => wrapFunctional(c.default || c))
export const LazyPartner = import('../../components/Partner.vue' /* webpackChunkName: "components/partner" */).then(c => wrapFunctional(c.default || c))
export const LazyPopularArticles = import('../../components/PopularArticles.vue' /* webpackChunkName: "components/popular-articles" */).then(c => wrapFunctional(c.default || c))
export const LazyPost = import('../../components/Post.vue' /* webpackChunkName: "components/post" */).then(c => wrapFunctional(c.default || c))
export const LazyRelatedBlogs = import('../../components/RelatedBlogs.vue' /* webpackChunkName: "components/related-blogs" */).then(c => wrapFunctional(c.default || c))
export const LazySearch = import('../../components/Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c))
export const LazyShare = import('../../components/Share.vue' /* webpackChunkName: "components/share" */).then(c => wrapFunctional(c.default || c))
export const LazyToc = import('../../components/Toc.vue' /* webpackChunkName: "components/toc" */).then(c => wrapFunctional(c.default || c))
export const LazyWriter = import('../../components/Writer.vue' /* webpackChunkName: "components/writer" */).then(c => wrapFunctional(c.default || c))
