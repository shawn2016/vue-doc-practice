export default {
    /**
     * 
     * @param {*} store 
     * 异步操作
     */
    updateAsyncCount(store, { desc, time }) {
        setTimeout(() => {
            store.commit('updateAsyncDesc', {
                desc    
            })
        }, time);
    }
}