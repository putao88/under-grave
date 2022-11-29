import i18n from "../../i18n/index";

const underGraveStore = {
  state: {
    currentLanguage: i18n.locale,
    walletAccount: "",
  },
  getters: {
    isEnLang(state) {
      return state.currentLanguage == "en";
    },
    getWalletAccount(state) {
      return state.walletAccount;
    }
  },
  mutations: {
    SET_LANGULAGE (state, currentLanguage) {
      state.currentLanguage = currentLanguage;
    },
  },
  actions: {
    changeLanguage({ state, commit }) {
      commit("SET_LANGULAGE", state);
    },
  },
};

export default underGraveStore;
