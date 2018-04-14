export default { // 模块下中可以继续增加模块
    a: {
        state: {
            text: 'a'
        },
        mutations: { // mutations默认会加入到全局mutations中,可以使用namespaced进行约束
            updateAtext(state, data) {
                console.log('a.state', state)
            },
            updateCount2(state, data) {
                console.log('a.-----------', state)
            }
        },
        getters: { // 三个参数 state:当前模块下的state,   getters：namespaced:false时getters为全局下的否则是当前模块中    rootState 全局的state
            textPlus(state, getters, rootState) {
                console.log(getters+'000000111')
                return state.text + rootState.count
            }
        },
        actions: {  // 如果要调用全局的mutations必须添加root为true,否则只会在该模块下寻找,全局和该模块下都定义了同名字的都会执行
            add({ state, commit, rootState }) {
                commit('updateCount2', { num: rootState.count })
            }
        }
    },
    b: {
        namespaced: true,
        state: {
            text: 'b'
        },
        mutations: { // mutations默认会加入到全局mutations中,可以使用namespaced进行约束
            updateBtext(state, data) {
                console.log('b.state', state)
            }
        },
        getters: { // 三个参数 state:当前模块下的state,   getters：namespaced:false时getters为全局下的否则是当前模块中    rootState 全局的state
            textPlus(state, getters, rootState) {
                console.log(getters)
                return state.text + rootState.count
            }
        },
        actions: { // 如果要调用全局的mutations必须添加root为true,否则只会在该模块下寻找,全局和该模块下都定义了同名字的都会执行
            add({ state, commit, rootState }) {
                commit('updateCount', { num: rootState.count }, { root: true })
            },
            add2({ state, commit, rootState }) {
                commit('a/updateCount2', { num: rootState.count }, { root: true })
            },
        }
    },

}