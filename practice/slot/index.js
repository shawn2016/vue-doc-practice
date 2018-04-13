/**
 * 插槽
 */
import Vue from 'vue'

const components = {
    template: `
    <div :style="style">
    <slot></slot>
    <slot name="body"></slot>
    <slot name="body2" value="插槽属性"></slot>
    </div>
    `, data() {
        return {
            style: {
                width: '200px',
                height: '200px',
                border: '1px solid red'
            }
        }
    }
}
new Vue({
    el: '#app',
    components: {
        compOne: components
    },
    template: `
    <div>
    <comp-one>
    <div>插槽</div>
    <div slot="body">具名插槽</div>
    <div slot="body2" slot-scope="props">{{props.value}}</div>
    </comp-one>
    </div>
    `
})