import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'
export default () => {
    return new Vuex.Store({
        strict:true,// 开发中使用,防止你在其他的地方修改state
        state: defaultState,
        mutations,
        getters,
        actions
    })
}