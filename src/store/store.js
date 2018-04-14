import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'
import modules from './modules/modules'
const isDev = process.env.NODE_ENV === 'development'
export default () => {
    const store = new Vuex.Store({
        strict: isDev,// 开发中使用,防止你在其他的地方修改state
        state: defaultState,
        mutations,
        getters,
        actions,
        modules
    })
    if (module.hot) {
        module.hot.accept([
            './state/state',
            './mutations/mutations',
            './getters/getters',
            './actions/actions',
            './modules/modules',
        ], () => {
            // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
            const newState = require('./state/state').default;
            const newMutations = require('./mutations/mutations').default;
            const newGetters = require('./getters/getters').default;
            const newActions = require('./actions/actions').default;
            const newModules = require('./modules/modules').default;
            store.hotUpdate({
                state: newState,
                mutations: newMutations,
                getters: newGetters,
                actions: newActions,
                modules: newModules,
            })
        })
    }
    return store
}