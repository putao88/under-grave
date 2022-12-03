import Vue from "vue";
import Vuex from "vuex";
import web3ModalStore from "./modules/web3Modal";
import underGraveStore from "./modules/underGrave";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    web3Modal: web3ModalStore,
    underGrave: underGraveStore,
  },
});
