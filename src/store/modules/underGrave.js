import i18n from "../../i18n/index";
import {heroType,heroNftProficiency, heroNftLevel, HeroEndurance, gethero } from '@/views/expedition/battle';

const underGraveStore = {
  namespaced: true,
  state: {
    currentLanguage: i18n.locale,
    walletAccount: "",
    heroInfo: {
      data: [],
      getOnce: false
    },
  },
  getters: {
    isEnLang(state) {
      return state.currentLanguage == "en";
    },
    getWalletAccount(state) {
      return state.walletAccount;
    },
    getHeroData(state) {
      return state.heroInfo;
    }
  },
  mutations: {
    SET_LANGULAGE (state, currentLanguage) {
      state.currentLanguage = currentLanguage;
    },
    SET_HERO_INFO (state, data) {
      state.heroInfo.data = data
      state.heroInfo.getOnce = true
    }
  },
  actions: {
    changeLanguage({ state, commit }) {
      commit("SET_LANGULAGE", state);
    },
    //获取英雄详细信息添加数据
    async getHeroInfo({commit}) {
      let tokenId = await gethero()
      let tableData = []
      if (tokenId && tokenId.length) {
        let stamina = await HeroEndurance(tokenId)
        let lv = await heroNftLevel(tokenId)
        let exp = await heroNftProficiency(tokenId)
        let type = await heroType(tokenId)
        for (let i = 0; i < tokenId.length; i++) {
          tableData.push({ tokenId: tokenId[i], type: type[i], lv: lv[i], exp: exp[i], stamina: stamina[i], })
        }
      }
      commit('SET_HERO_INFO', tableData)
    }
  },
};

export default underGraveStore;
