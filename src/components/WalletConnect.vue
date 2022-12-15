<template>
  <web3-modal-vue
    ref="web3modal"
    :theme="theme"
    :provider-options="providerOptions"
    cache-provider
  />
</template>

<script>
import Web3ModalVue from "web3modal-vue";
import WalletConnectProvider from "@walletconnect/web3-provider";
export default {
name: "WalletConnect",
components: {
  Web3ModalVue,
},
data() {
  return {
    theme: "light",
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: "-",
        },
      },
    },
  };
},
mounted() {
  this.$nextTick(async () => {
    const web3modal = this.$refs.web3modal;
    this.$store.commit("setWeb3Modal", web3modal);
    if (web3modal.cachedProvider) {
      this.$store.dispatch("connect");
    }
  });
},
methods: {},
};
</script>