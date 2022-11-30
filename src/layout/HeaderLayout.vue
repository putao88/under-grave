<template>
  <div class="nav">
    <div class="nav_inset">
      <img class="logo" src="../assets/cdn/images/logo.png" alt="" @click="toHome" />
      <ul class="menu_pc pc">
        <li v-for="(item, index) in navArr" :key="index" :class="{ active: navActive == index }" @click="toRoute(item)">
          <span>{{ $t(item.label) }}</span>
        </li>
      </ul>
      <ul class="menu_mobile mobile">
        <li v-for="(item, index) in navArr.slice(0, 4)" :key="index" :class="{ active: navActive == index }">
          <div @click="toRoute(item)">
            <i class="iconfont" :class="item.icon"></i>
            <div>{{ $t(item.label) }}</div>
          </div>
        </li>
        <li :class="{ active: navActive > 3 }">
          <el-popover placement="bottom" trigger="manual" v-model="isShowMore">
            <div class="menu_mobile_more">
              <div v-for="(item, index) in navArr.slice(4, 6)" :key="index" :class="{ active: navActive == index + 4 }" @click="toRoute(item)">
                <i class="iconfont" :class="item.icon"></i>
                <div>{{ $t(item.label) }}</div>
              </div>
            </div>
            <div slot="reference" @click="openMore">
              <i class="iconfont pcshenglvehao"></i>
              <div>{{ $t("nav.text9") }}</div>
            </div>
          </el-popover>
        </li>
      </ul>
      <div class="connect_lang">
        <div class="connect" @mouseover="showDisconnectFun" @mouseleave="hiddenDisconnectFun">
          <span v-if="getAccount">
            {{ getAccount | ellipsisWallet }}
          </span>
          <span v-else @click="openWalletPopup">{{ $t("nav.text6") }}</span>
          <transition name="showDisconnect" appear>
            <div v-show="showDisconnect" class="disconnect" @click="clickDisconnect">
              <span>{{ $t("nav.text7") }}</span>
              <i class="iconfont pcblock"></i>
            </div>
          </transition>
        </div>
        <div class="lang_box">
          <el-select v-model="$i18n.locale" @change="changeLang">
            <el-option v-for="item in langArr" :key="item" :label="item.toUpperCase()" :value="item"></el-option>
          </el-select>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "HeaderLayout",
  data() {
    return {
      navActive: 0,
      navArr: [
        { label: "nav.text1", icon: "pchome", link: "/home", isOpen: true },
        { label: "nav.text2", icon: "pcdianqunshichang", link: "/recruit", isOpen: true },
        { label: "nav.text3", icon: "pczijin", link: "/expedition", isOpen: true },
        { label: "nav.text4", icon: "pcdengji", link: "/tavern", isOpen: true },
        { label: "nav.text5", icon: "pcyingyongshichang", link: "/dashboard", isOpen: true },
        { label: "nav.text8", icon: "pcdengji", link: "/market", isOpen: false },
      ],
      isShowMore: false,
      showDisconnect: false,
      langArr: ["en", "zh"],
    };
  },
  computed: { ...mapGetters(["getAccount", "isConnected"]) },
  watch: {
    $route(to, from) {
      if (from.matched.length && to.matched[0].path !== from.matched[0].path) {
        window.scrollTo(0, 0);
      }
      if (to.path == "/home") {
        this.navActive = 0;
      } else if (to.path.indexOf("/recruit") !== -1) {
        this.navActive = 1;
      } else if (to.path.indexOf("/expedition") !== -1) {
        this.navActive = 2;
      } else if (to.path.indexOf("/tavern") !== -1) {
        this.navActive = 3;
      } else if (to.path.indexOf("/dashboard") !== -1) {
        this.navActive = 4;
      } else if (to.path.indexOf("/market") !== -1) {
        this.navActive = 5;
      }
    },
  },
  methods: {
    toHome() {
      this.$router.push("/home");
    },
    toRoute(item) {
      if (this.isShowMore) this.isShowMore = false;
      if (item.isOpen) this.$router.push(item.link);
      else this.$message({ message: this.$t("tips.text1") });
    },
    openMore() {
      this.isShowMore = !this.isShowMore;
    },
    changeLang(item) {
      this.$i18n.locale = item;
      this.$utils.setCookie("LANG", item);
      location.reload();
    },
    openWalletPopup() {
      this.$store.dispatch("connect");
    },
    showDisconnectFun() {
      if (this.getAccount) this.showDisconnect = true;
    },
    hiddenDisconnectFun() {
      if (this.getAccount) this.showDisconnect = false;
    },
    clickDisconnect() {
      this.$store.dispatch("resetApp");
      this.showDisconnect = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100vw;
  height: 0.8rem;
  background: #21212480;
  position: fixed;
  top: 0;
  z-index: 999;
  transition: all 0.5s;
  .nav_inset {
    width: 11.5rem;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: auto;
      height: 80%;
      cursor: pointer;
    }
    .connect_lang {
      display: flex;
      align-items: center;
      .connect {
        cursor: pointer;
        height: 0.35rem;
        line-height: 0.35rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.15rem;
        font-weight: 400;
        padding: 0 0.1rem;
        background: linear-gradient(90deg, #ac4711 0%, #d47221 100%);
        border-radius: 0.05rem;
        position: relative;
        .disconnect {
          height: 0.45rem;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          background: linear-gradient(90deg, #ac4711 0%, #d47221 100%);
          border-radius: 0.05rem;
          position: absolute;
          top: 110%;
          transition: transform 0.3s;
          transform-origin: top center;
        }
      }
      .lang_box {
        margin-left: 0.1rem;
        .el-select {
          width: 0.7rem;
          height: 0.35rem;
          
        }
      }
    }
  }

  .showDisconnect-enter,
  .showDisconnect-leave-to {
    transform: scaleY(0);
  }
  .showDisconnect-enter-to,
  .showDisconnect-leave {
    transform: scaleY(1);
  }
}
.menu_pc {
  height: 100%;
  display: flex;
  align-items: center;
  li {
    height: 80%;
    font-size: 0.2rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 1.5vw;
    &.active {
      color: #ac4711;
    }
  }
}
.menu_mobile {
  width: 100vw;
  height: 0.6rem;
  background: #0a0a0d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 5vw;
  li {
    font-size: 0.12rem;
    i {
      font-size: 0.25rem;
    }
    &.active {
      color: #ac4711;
    }
  }
}
.menu_mobile_more {
  > div {
    display: flex;
    align-items: center;
    height: 0.4rem;
    line-height: 0.4rem;
    padding: 0 0.1rem;
    i {
      margin-right: 0.1rem;
    }
    &.active {
      background: #27272e;
      color: #ac4711;
    }
  }
}
@media screen and (max-width: 750px) {
  .nav {
    width: 100vw;
    height: 0.5rem;
    .nav_inset {
      width: 90%;
      .connect_lang {
        .connect {
          height: 0.25rem;
          font-size: 0.12rem;
          font-weight: 400;
          padding: 0.05rem 0.1rem;
          border-radius: 0.03rem;
          .disconnect {
            border-radius: 0.03rem;
          }
        }
        .lang_box {
          margin-left: 0.05rem;
          .el-select {
            width: 0.5rem;
            height: 0.25rem;
          }
        }
      }
    }
  }
}
</style>
