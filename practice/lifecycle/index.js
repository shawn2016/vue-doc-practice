/**
 * 生命周期
 */
import Vue from 'vue'
/**
 * beforeCreate,create,beforeMount,mounted 只会调用一次
 * beforeMount,mounted 服务端渲染不会被调用
 */
const app = new Vue({
    el: '#app',
    template: '<div>{{text}}</div>',
    data: {
        text: 0
    },
    beforeCreate() {
        console.log(this.$el, 'beforeCreate')
    },
    create() {
        console.log(this.$el, 'create')
    },
    beforeMount() {
        console.log(this.$el, 'beforeMount')
    },
    mounted() {
        console.log(this.$el, 'mounted')
    },
    beforeUpdate() {
        console.log(this, 'beforeUpdate')
    },
    updated() {
        console.log(this, 'updated')
    },
    beforeDestroy() {
        console.log(this, 'beforeDestroy')
    },
    destroyed() {
        console.log(this, 'destroyed')
    },
    render(h) {
        // throw new TypeError('测试一下,抛出异常')
        return h('div', {}, '<span>999</span>')
    },
    // 只会捕捉到自己本组件中的错误，其他的不管
    renderError(h, err) {
        return h('div', {}, err.stack)
    },
    // 高级一些，可以捕获到子组件的错误，会向上冒泡，正式环境可以使用
    // errorCaptured(h, err) {
    //     return h('div', {}, err.stack)
    // }

})

setInterval(() => {
    app.$data.text += 1
}, 1000)