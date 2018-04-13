/**
 * 组件
 */
import Vue from 'vue'

const component = {
    props: {
        active: Boolean,
        isActive: {
            default: false,
            validator: function (val) {
                if (typeof val === 'boolean'){
                    console.log('yes')
                    return true                    
                }else{
                    throw new Error('类型不对') 
                }
            }
        }
    },
    template: `
    <div>
    {{text}}
    {{isActive}}
    <input type="text" v-show="active" v-model="text"/>
    <div @click="show">点击</div>
    </div>`,
    data() {
        return {
            text: 0
        }
    },
    methods: {
        show() {
            this.$emit('change', 1, 2)
        }
    }

}
// 全局组件
// Vue.component('CompOne', component)
new Vue({
    el: '#app',
    components: {
        CompOne: component
    },
    mounted() {
        console.log(this.$refs.comp1)
    },
    template: `
    <div>
    <comp-one ref='comp1' :isActive="false" :active="true" @change="changeChild"></comp-one>
    <comp-one :isActive="false" :active="false" ></comp-one>
    </div>
    `,
    methods: {
        changeChild(a, b) {
            console.log(a, b)
        }
    }
})