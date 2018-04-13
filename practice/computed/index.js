/**
 * computed、watch、methods
 */
import Vue from 'vue'

new Vue({
    el: '#app',
    template: `
    <div>
     <p>fullName:{{fullName}}</p>
     <p>fullName:<input type='text' v-model="fullName" /></p>
     <p>firstName:<input type='text' v-model="firstName" /></p>
     <p>lastName:<input type='text' v-model="lastName" /></p>
     <p>{{getName()}}</p>             
     </div>`,
    data: {
        text: 0,
        firstName: 'dai',
        lastName: 'zhixiang'
    },
    computed: {
        fullName: {
            // getter
            get: function () {
                return `${this.firstName} ${this.lastName}`
            },
            // setter
            set: function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }

        }
    },
    watch: {
        firstName: function (newValue, oldValue) {
            console.log(newValue, oldValue)
        }
    },
    methods: {
        getName() {
            return `${this.firstName} ${this.lastName}`
        }
    }
})