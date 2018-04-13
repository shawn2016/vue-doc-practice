/**
 * 双向绑定
 */
import Vue from 'vue'
const component = {
    props: ['value'],
    model:{
        props:'value',
        event:'change'
    },
    template: `<div>
    <input type="text" :value="value" @input="handleInput"/>
    </div>`,
    data() {
        return {

        }
    },
    methods: {
        handleInput(e) {
            this.$emit('change', e.target.value)
        }
    }
}
new Vue({
    el: '#app',
    components: {
        CompOne: component
    },
    data: {
        value: '2222'
    },
    template: `
    <div>
    <comp-one v-model="value"></comp-one>
    <comp-one :value="value" @input="value=arguments[0]"></comp-one>
    </div>
    `,
    watch:{
        value:function (newValue) {
            console.log(newValue)
        }
    }

})