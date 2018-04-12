/**
 * 数据绑定
 */
import Vue from 'vue'

new Vue({
    el: '#app',
    template: `
    <div :class="isActive?'aa':'bb'">
    {{text}}
    <li v-for="x in arr">{{x}}</li>
    <p v-html="html"></p>
    </div>`,
    data: {
        text: 0,
        isActive: true,
        arr: [1, 2, 3],
        html: `<span>222222</span>`
    }
})