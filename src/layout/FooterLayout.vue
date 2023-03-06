<template>
  <div class="footer_box">
    <div class="center">
      <div>
        <img class="logo" src="../assets/cdn/images/logo.png" alt="" />
        <div class="linklist">
          <a v-for="(item, index) in linkList" :key="index" :href="item.href" target="_blank">
            <img :src="item.image" alt="" />
          </a>
        </div>
      </div>
      <p>{{ $t("footer.text1")}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterLayout",
  data() {
    return {
      linkList: [
        { image: require("../assets/cdn/images/contact_Gitbook.webp"), href: "https://gamefischool.gitbook.io/undergrave_whitebook" },
        { image: require("../assets/cdn/images/contact_Twitter.webp"), href: "https://twitter.com/UnderGraveBSC" },
        { image: require("../assets/cdn/images/contact_Telegram.webp"), href: "https://t.me/UNDERGRAVE_Official" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.footer_box {
height: 2.3rem;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #070b2800;
  //background-image: url(~@/assets/cdn/images/002.png);
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: 2000px;

  .center {
    width: 6.8rem;
    text-align: center;

    >div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .logo {
        width: 1.5rem;
        height: auto;
      }

      .linklist {
        display: flex;

        a {
          width: 0.35rem;
          height: 0.35rem;
          background: linear-gradient(90deg, rgba(143, 179, 234, 0.53) 0%, rgba(97, 103, 195, 0.53) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 0.1rem;

          img {
            width: 60%;
            height: auto;
          }
        }
      }
    }

    p {
      font-size: 0.13rem;
      font-weight: bold;
      line-height: 0.5rem;
      letter-spacing: 0.06rem;
    }
  }
}

@media screen and (max-width: 750px) {
  .footer_box {
    width: 100%;
    height: 2.2rem;

    .center {
      width: 80vw;

      >div {
        .logo {
          width: 0.8rem;
          height: auto;
        }

        .linklist {
          a {
            width: 0.2rem;
            height: 0.2rem;
            margin: 0 0.05rem;
          }
        }
      }

      p {
        font-size: 0.12rem;
        font-weight: 400;
        line-height: 0.3rem;
        letter-spacing: 0;
      }
    }
  }
}
</style>
