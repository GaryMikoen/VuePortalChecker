import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    portal: {
      name: "",
      type: ""
    }
  },
  mutations: {
    CHANGE_PORTAL(state, {portalName, portalType}) {
      state.portal.name = portalName
      state.portal.type = portalType
    }
  },
  actions: {
    changePortal(context, {portalName, portalType }) {
      context.commit("CHANGE_PORTAL", {portalName: portalName, portalType: portalType});
    }
  },
  getters:{
    getPortalName(state){
      return state.portal.name
    },
    getPortalType(state){
      return state.portal.type
    }
  }
})
