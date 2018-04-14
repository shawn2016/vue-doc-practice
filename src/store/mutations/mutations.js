export default {
    /**
     * 
     * @param {*} state 
     * @param {*} num 
     * 只能同步使用，异步应该放在actions中
     */
    updateCount(state, { num }) {
        console.log('22222222222222222222222')
        state.count = num
    },
    updateCount2(state, { num }) {
        console.log('全局')
        state.count = num
    },
    updateAsyncDesc(state, { desc }) {
        state.desc = desc
    }
}