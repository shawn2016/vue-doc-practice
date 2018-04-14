export default {
    /**
     * 
     * @param {*} state 
     * @param {*} num 
     * 只能同步使用，异步应该放在actions中
     */
    updateCount(state, { num }) {
        state.count = num
    },
    updateAsyncDesc(state, { desc }) {
        state.desc = desc
    }
}