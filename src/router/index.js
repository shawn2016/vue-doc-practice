
import HelloWorld from '@/components/HelloWorld'
import VueRouter from 'vue-router'

export default () => {
  return new VueRouter({
    routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
        meta: {
          title: 'demo'
        },
        children: []
      }
    ],
    mode: 'history',
    // base: '/base/',
    // 选中
    linkActiveClass: 'active-link',
    // 子节点选中
    linkExactActiveClass: 'exact-active-link',
    // 浏览器滚动行为 注意: 这个功能只在 HTML5 history 模式下可用。
    // scrollBehavior(to, from, savedPosition) {
    //   console.log(to, from, savedPosition)
    //   if (savedPosition) {
    //     return savedPosition
    //   } else {
    //     return {
    //       x: 0,
    //       y: 0
    //     }
    //   }
    // },
    // parseQuery() {

    // },
    // stringifyQuery() {

    // },
    // 浏览器不支持时，会改成hash模式
    fallback: true
  })
}
