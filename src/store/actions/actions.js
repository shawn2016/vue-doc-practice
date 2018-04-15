export default {
    /**
     * 
     * @param {*} store 
     * 异步操作
     * dispatch与commit的区别:commit只会寻找mutations的方法，dispatch只会寻找actions的方法
     */
    updateAsyncCount(store, { desc, time }) {
        setTimeout(() => {
            store.commit('updateAsyncDesc', {
                desc    
            })
        }, time);
        store.dispatch('updateAsyncCount3')
    },
    updateAsyncCount3(store) {
        console.log('updateAsyncCount3')
    },
}