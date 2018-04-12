/**
 * vue的实例
 */

import Vue from 'vue'

// 方式一
// new Vue({
//     el: '#app',
//     template: '<div>222</div>'
// })

// 方式二
const app = new Vue({
    // el: '#app',
    template: '<div>{{text}}-{{obj.a}}</div>',
    data: {
        text: 0,
        obj: {}
    },
    // 自动销毁
    // watch: {
    //     text(newVal, oldValue) {
    //         console.log(newVal, oldValue)
    //     }
    // }
})

app.$mount('#app')
let i = 0
setInterval(() => {
    i++
    // app.text += 1
    // 两个效果一样
    // app.$data.text += 1
    // app.obj.a = app.text
    app.$set(app.obj, 'a', i)
}, 1000)

// 属性
// console.log(app.$data)
// console.log(app.$options)
// console.log(app.$props)
// console.log(app.$el)

// // 更新的时候会触发
// app.$options.render = (h) => {
//     console.log('gg')
//     // return h('div', {}, '实例学习')
// }
// console.log(app.$root)
// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$isServer)// 服务端渲染判断
// console.log(app.$refs)

// 方法
const unwatch = app.$watch('text', (newVal, oldValue) => {
    console.log(newVal, oldValue)
})

setTimeout(() => {
    unwatch() // 两秒之后自动销毁
}, 2000);

app.$on('test', (newVal, oldValue) => {
    console.log(newVal, oldValue)
})
app.$emit('test')