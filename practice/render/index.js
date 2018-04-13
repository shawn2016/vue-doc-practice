/**
 * render 函数
 */

import Vue from 'vue'

new Vue({
    el: '#app',
    // template:
    //     `
    //     <div>
    //     888
    //     </div>
    //     `,
    render: function (h) {
        return h('div', {
            style: {
                width: '200px',
                color: 'red'
            }
        }, '888')
    }
})