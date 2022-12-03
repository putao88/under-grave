<template>
  <div id="container" :class="isEnLang ? 'fontfamily_en' : 'fontfamily_zh'">
    <HeaderLayout />
    <div id="container_body">
      <router-view />
      <FooterLayout />
    </div>
    <el-backtop></el-backtop>
    <WalletConnect />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import HeaderLayout from "@/layout/HeaderLayout.vue";
import FooterLayout from "@/layout/FooterLayout.vue";
import WalletConnect from "../src/components/WalletConnect.vue";


export default {
  components: { HeaderLayout, FooterLayout, WalletConnect },
  data() {
    return {};
  },
  computed: { ...mapGetters(["isEnLang"]) },
  mounted() {
    window.addEventListener("load", () => {
      this.resetRem();
    });
    window.addEventListener("resize", () => {
      this.resetRem();
    });
  },
  beforeDestroy() {
    window.removeEventListener("load", this.resetRem());
    window.removeEventListener("resize", this.resetRem());
  },
  methods: {
    resetRem() {
      const clientWidth = document.body.clientWidth;
      let rem = 0;
      if (1440 <= clientWidth) {
        rem = 100;
      } else if (750 < clientWidth && clientWidth < 1440) {
        rem = (clientWidth * 100) / 1440;
      } else if (clientWidth <= 750) {
        rem = (clientWidth * 100) / 375;
      }
      document.getElementsByTagName("html")[0].style.fontSize = rem + "px";
    },
  },
};
</script>

<style lang="scss">
@media screen and (max-width: 750px) {
  #container {
    #container_body {
      padding-bottom: 0.6rem;
    }
  }
}
</style>
