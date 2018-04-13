/**
 * 原生指令
 */

import Vue from 'vue'

new Vue({
    el: '#app',
    template: `
     <div >
     <p v-show="isActive">v-text会替换的元素之间的文本{{text}}</p>
     <p v-text="text">hhh:<li>22</li>{{text}}</p>
     <p v-if="isActive">{{text}}</p>
     <p  else-if="isActive">{{text}}</p>
     <p  else="isActive">{{text}}</p>
     <p  v-html="html"></p>
     <p><input type="text" v-model="text"/></p>
     <p>转成numberv-model.number="text"<input type="text" v-model.number="text"/></p>
     <p>去除前后输入框的空格：v-model.trim="text"<input type="text" v-model.trim="text"/></p>
     
     <ul>
     数组选中的：
     <li v-for="(x,index) in arr" :key="x">
     {{x}}-{{index}}
     </li>
     </ul>
     多选：
     <input type="checkbox" :value="1" v-model="arr"/>
     <input type="checkbox" :value="2"  v-model="arr"/>
     <input type="checkbox" :value="3"  v-model="arr"/>
     单选：
     {{active}}
     <input type="radio" value="one" v-model="active"/>
     <input type="radio" value="two"  v-model="active"/>
     <p v-pre>v-pre:{{text}}</p>
     <p v-cloak>v-cloak代码加载之前，隐藏元素:{{text}}</p>
     <p v-once>v-once:{{text}}</p>
     </div>
     `,
    data: {
        text: 0,
        isActive: true,
        arr: [1, 2, 3],
        html: '<div>9999<div>',
        active:true
    }
})