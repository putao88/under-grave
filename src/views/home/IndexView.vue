<template>
  <div class="home">
    <!-- INO -->
    <div class="row4">
      <div class="row_title">INO
      </div>
      <div class="title">
        <h5>UTC 00:00 AM
          INO Whitelist Presale<br>
          UTC 00:00 AM
          INO Public Sale
          <br>
          COUNTDOWN
        </h5>
      </div>
      <ul class="list">
        <li v-for="(item, index) in daoList" :key="index">
          <div class="radialbg"></div>
          <p>
            {{ $t(item.text1) }}
            <span>{{ $t("status.text9") }}</span>
          </p>
          <pre>
            <img :src="(`${item.imgs}`)"/>
            {{ $t(item.text2) }}
          </pre>

          <!--购买数量-->
          <!-- <div class="left">
          <div>{{ $t("recruit.text17") }}</div>
          <div class="inputbox">
                    <span class="span1"><i class="iconfont pcjianhao" @click="subtraction"></i></span>
                    <input type="number" v-model="inputAmount" oninput="value=value.replace(/^(0+)|[^\d]+/g,'')"
                      :disabled="buyloading" />
                    <span class="span2"><i class="iconfont pcjiahao" @click="addition"></i></span>
                  </div>
                </div>-->

          <div class="btn">
            <div class="progress_bar">
              <div :style="{ width: item.progress }">
                <span>{{ item.progress }}</span>
              </div>
            </div>
            <el-button>{{ $t(item.text3) }}</el-button>
          </div>
        </li>
      </ul>
    </div>

    <div class="row4" style="height:2rem">
      <div class="row_title">IDO
      </div>
    </div>

    <div class="rightbox">
      <div class="box1">
        <div class="title">
          <img src="~@/assets/cdn/images/Normal_10055.png" alt="" />
          <div>{{ $t("home.text1") }}</div>
        </div>
        <div class="content">
          <pre>{{ $t("home.text2") }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HOME",
  data() {
    return {
      infoIndex: 0,
      marketIndex: 0,
      marketOption: {
        loop: true,
        initialSlide: 0,
        effect: "slide",
        // effect: "coverflow",
        centeredSlides: true,
        slidesPerView: 5,
        // spaceBetween: "1%",
        freeMode: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "my_pagination",
          bulletActiveClass: "my_pagination_active",
          clickable: true,
        },
        coverflow: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        on: {
          slideChange: () => {
            this.marketIndex = this.$refs.marketSwiper.swiper.activeIndex;
          },
        },
      },
      daoList: [
        {
          text1: "home.daos[0].text1",
          text2: "home.daos[0].text2",
          text3: "home.daos[0].text3",
          text4: "home.daos[0].text4",
          imgs: require("@/assets/cdn/images/Normal_50006.png"),
          link: "",
          progress: "0/2000",
        },
        {
          text1: "home.daos[1].text1",
          text2: "home.daos[1].text2",
          text3: "home.daos[1].text3",
          text4: "home.daos[1].text4",
          imgs: require("@/assets/cdn/images/Normal_50026.png"),
          link: "",
          progress: "0/800",
        },
        {
          text1: "home.daos[2].text1",
          text2: "home.daos[2].text2",
          text3: "home.daos[2].text3",
          text4: "home.daos[2].text4",
          imgs: require("@/assets/cdn/images/Normal_50025.png"),
          link: "",
          progress: "0/200",
        },
        {
          text1: "home.daos[3].text1",
          text2: "home.daos[3].text2",
          text3: "home.daos[3].text3",
          text4: "home.daos[3].text4",
          imgs: require("@/assets/cdn/images/Normal_50021.png"),
          link: "",
          progress: "0/500",
        },
      ],
    };
  },
  computed: { ...mapGetters(["isEnLang"]) },
  methods: {
    toOtherPage(href) {
      if (href) window.location.href = href;
    },
    switchInfo(index) {
      this.infoIndex = index;
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  position: relative;
  background: url(~@/assets/cdn/images/landform_0301.png) no-repeat;
  background-size: 100% 100%;
  padding: 1rem 0;

}

.row_title {
  text-align: center;
  font-size: 0.36rem;
  font-weight: bold;
  color: #ce6519;
  margin-bottom: 0.5rem;
  margin-top: 0.2rem;


  padding: 5px;
  background-image: url(~@/assets/cdn/images/battle_038.png);
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
}

.row4 {
  width: 10.3rem;
  height: 11rem;
  margin: .5rem auto;

  .list {
    width: 100%;
    height: 9rem;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 0 auto;
    display: inline;

    li {
      float: left;
      margin: 0 0.15rem 0 0.2rem;
      background: #4ecad52a;
      box-shadow: 0rem 0.14rem 0.27rem -0.08rem rgba(0, 0, 0, 0.49);
      border-radius: 0.2rem;
      backdrop-filter: blur(31px);
      padding: 0.2rem 0.4rem;
      margin-bottom: 0.5rem;
      position: relative;
      overflow: hidden;

      .radialbg {
        width: 2.4rem;
        height: 2.4rem;
        background-image: radial-gradient(circle,
            rgb(158, 93, 58),
            rgba(158, 71, 58, 0.6),
            rgba(158, 86, 58, 0.4),
            rgba(153, 137, 51, 0),
            rgba(173, 146, 59, 0));
        position: absolute;
        top: -1.2rem;
        left: 0.2rem;
        z-index: -1;
      }

      p {
        font-size: 0.2rem;
        font-weight: bold;
        line-height: 0.3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          font-size: 0.12rem;
          font-weight: 400;
          color: #53d0ff;
        }
      }

      pre {
        font-size: 0.14rem;
        font-weight: 500;
        line-height: 0.2rem;
        margin: 0.1rem 0;
      }

      pre img {
        width: 40%;
      }

      .btn {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .el-button {
          width: 1.5rem;
          height: 0.3rem;
        }

        .progress_bar {
          width: 2.5rem;
          height: 0.05rem;

          div {
            position: relative;
            width: 80%;
            height: 100%;
            background: linear-gradient(134deg, rgba(0, 211, 255, 1), rgba(176, 108, 198, 1));
            border-radius: 0.05rem;

            span {
              position: absolute;
              right: 0;
              bottom: 0.05rem;
              font-size: 0.12rem;
            }
          }
        }
      }
    }
  }

  .title {
    background: rgba(0, 0, 0, 0.41);
    backdrop-filter: blur(0.07rem);
    text-align: center;
    align-items: center;
    justify-content: space-between;
    padding: 0.1rem 0.1rem 0.1rem 0.1rem;
    width: 100%;
    height: 0.8rem;
    border-radius: 0.2rem;
    font-size: 0.2rem;
    font-weight: 600;
    margin: 0rem 0 0.2rem;
  }
}

@media screen and (max-width: 750px) {
  .home {
    padding: 0.5rem 0;
  }

  .row1 {
    width: 90vw;
    margin: 0.5rem auto;
    padding-top: 0.5rem;

    .info {
      width: 100%;

      >pre {
        font-size: 0.22rem;
        line-height: 0.3rem;
        letter-spacing: 0.05rem;
      }

      >div {
        margin-top: 0.2rem;

        .tag {
          width: 1.5rem;
          height: 0.3rem;
          line-height: 0.3rem;
          border-radius: 0.3rem;
          font-size: 0.15rem;
          margin-right: 0.1rem;
        }

        .linklist {
          a {
            width: 0.3rem;
            height: 0.3rem;
            margin: 0 0.05rem;
          }
        }
      }
    }
  }

  .row2 {
    width: 90vw;
    margin: 0.5rem auto;
    justify-content: center;
    flex-wrap: wrap;

    .item {
      width: 90%;
      height: 0.9rem;
      border-radius: 0.1rem;
      margin-bottom: 0.2rem;

      &:nth-child(1) {
        .top {
          top: -0.15rem;
          left: -0.1rem;

          img {
            width: 0.49rem;
            height: 0.34rem;
          }

          .iconfont {
            font-size: 0.14rem;
            top: 0.05rem;
            left: 0.18rem;
          }
        }
      }

      &:nth-child(2),
      &:nth-child(3) {
        .top {
          top: -0.15rem;
          left: -0.08rem;

          img {
            width: 0.34rem;
            height: 0.33rem;
          }

          .iconfont {
            font-size: 0.17rem;
            top: 0.08rem;
            left: 0.08rem;
          }
        }
      }

      &:last-child {
        margin-bottom: 0;
      }

      .box {
        padding: 0.1rem;

        .radialbg {
          width: 1rem;
          height: 1rem;
          top: -0.2rem;
          left: -0.2rem;
        }

        .item_title {
          font-size: 0.14rem;
          line-height: 0.18rem;
          margin-top: 0.1rem;
        }

        p {
          font-size: 0.12rem;
          font-weight: 500;
          line-height: 0.2rem;
        }
      }
    }
  }

  .row_title {
    text-align: center;
    font-size: 0.25rem;
    font-weight: bold;
    color: #ce6519;
    margin-bottom: 0.3rem;
    background-size: 60%;
  }

  .row3 {
    width: 80vw;
    margin: 0.5rem auto;

    .tabbox {
      flex-wrap: wrap;

      .tab {
        width: 100%;
        margin-bottom: 0.1rem;
        display: flex;
        align-items: center;
        justify-content: space-around;

        img {
          width: 0.41rem;
          height: auto;
          opacity: 0.3;

          &.active {
            opacity: 1;
          }
        }
      }

      .card {
        width: 100%;
        height: 3.8rem;
        padding: 0.4rem 0.2rem;
        background-repeat: no-repeat;
        background-size: 100% 100%;

        img {
          width: 0.45rem;
          height: auto;
        }

        div {
          font-size: 0.12rem;
          font-weight: bold;
          line-height: 0.18rem;
          margin-bottom: 0.1rem;
        }

        pre {
          font-size: 0.12rem;
          font-weight: 500;
          line-height: 0.15rem;
        }
      }
    }
  }

  .row4 {
    width: 90vw;
    margin: 0.5rem auto;

    .list {

      li {
        margin-bottom: 0.2rem;
        border-radius: 0.1rem;
        padding: 0.1rem 0.1rem;
        width: 100%;
        margin: 0 0.15rem 0.15rem 0;

        .radialbg {
          width: 1.4rem;
          height: 1.4rem;
          top: -0.6rem;
          left: 0.2rem;
        }

        p {
          font-size: 0.16rem;
          line-height: 0.25rem;
        }

        pre {
          font-size: 0.12rem;
          line-height: 0.15rem;
          margin: 0.1rem 0;
        }

        pre img {
          width: 30%;
        }

        .btn {
          .el-button {
            width: 0.8rem;
            height: 0.3rem;
          }

          .progress_bar {
            width: 1.2rem;
            height: 0.05rem;
          }
        }
      }
    }
  }

  .row5 {
    width: 90vw;
    margin: 0.5rem auto;

    .titlebox {
      width: 100%;
      padding: 0.1rem;
      border-radius: 0.1rem;
      margin-bottom: 0.2rem;

      img {
        width: 0.6rem;
        height: auto;
      }

      pre {
        font-size: 0.12rem;
        font-weight: 500;
        line-height: 0.15rem;
      }
    }

    .contentbox {
      >img {
        height: 1.85rem;
      }

      >div {
        img {
          height: 0.9rem;

          &:nth-child(1) {
            margin-bottom: 0.05rem;
          }
        }
      }
    }
  }

  .row6 {
    width: 100vw;
    margin: 0.5rem auto;

    .market_swiper {
      padding-bottom: 0.3rem;

      .swiper-slide {
        .card {
          span {
            font-size: 0.12rem;
            top: 3%;
            left: 8%;
          }
        }
      }

      ::v-deep .swiper-pagination {
        .my_pagination {
          width: 0.08rem;
          height: 0.08rem;
          border-radius: 0.08rem;
          margin: 0 0.05rem;
        }
      }
    }
  }

  .row7 {
    width: 90vw;
    margin: 0.5rem auto;

    .list {
      li {
        width: 100%;
        height: 0.35rem;
        line-height: 0.35rem;
        font-size: 0.12rem;
        font-weight: 500;

        .time {
          margin-right: 0.05rem;
        }

        .tag {
          height: 0.2rem;
          line-height: 0.2rem;
          border-radius: 0.2rem;
        }

        .round {
          height: 0.1rem;
        }

        &:hover,
        &.active {
          .tag {
            width: 1.6rem;
            margin-right: 0.05rem;
          }

          .round {
            min-width: 0.1rem;
            margin-right: 0.05rem;
          }
        }
      }
    }
  }

  .row8 {
    width: 90vw;
    margin: 0 auto;

    ul {
      li {
        width: 25%;
        padding: 0.1rem;
      }
    }
  }
}











.tip_box {
  width: 11.5rem;
  height: 0.75rem;
  line-height: 0.75rem;
  background: rgba(129, 129, 151, 0.19);
  border-radius: 0.08rem;
  backdrop-filter: blur(0.07rem);
  margin: 0.4rem auto;
  font-size: 0.2rem;
  font-weight: 600;
  color: #969494;
  text-align: center;
}

.box {
  width: 11.5rem;
  margin: 0 auto;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.leftbox {
  width: 4.2rem;
  height: auto;

  .blindbox {
    width: 100%;
    height: 4.2rem;
    background: rgba(129, 129, 151, 0.19);
    border-radius: 8px;
    border: 1px solid #436e77;
    backdrop-filter: blur(0.07rem);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.4rem;

  }

  .info {
    width: 100%;
    height: .4rem;
    background: rgba(129, 129, 151, 0.19);
    border-radius: 8px;
    border: 1px solid #436e77;
    backdrop-filter: blur(0.07rem);
    padding: 0.2rem;


    div {
      width: 100%;
      height: 33%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.2rem;
      font-weight: 600;
      border-bottom: 1px solid;
      border-image: linear-gradient(135deg, rgba(212, 135, 241, 0.44), rgba(82, 224, 255, 0.44)) 1 1;

      &:last-child {
        border: none;
      }
    }
  }
}

.rightbox {
  width: 100%;
  height: auto;
  padding: 0.5rem;

  .box1 {
    width: 100%;
    background: rgba(129, 129, 151, 0.19);
    border-radius: 0.08rem;
    border: 1px solid #436e77;
    backdrop-filter: blur(0.07rem);
    margin-bottom: 0.4rem;
    overflow: hidden;

    &:last-child {
      margin-bottom: 0;
    }

    .title {
      background: rgba(0, 0, 0, 0.384);
      border-bottom: 2px solid #436e77;
      backdrop-filter: blur(0.07rem);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0.2rem;
      width: 10%;
      height: 0.5rem;
      font-size: 0.2rem;
      font-weight: 600;
      border-radius: 0.1rem;

      img {
        width: 0.35rem;
        height: 0.35rem;
      }

    }

    .box2 {
      width: 100%;
      padding: 0.2rem 0;

      .row {
        font-size: 0.15rem;
        padding: 0 0.5rem;

        &:nth-child(1) {
          font-weight: 400;
          color: #979494;
        }

        &:nth-child(2) {
          padding: 0;
          height: auto;
        }
      }

      .hasbeenon {
        width: 100%;
        height: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        .buying {
          width: 2rem;
          height: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: url(~@/assets/cdn/images/bg8.webp) no-repeat;
          background-size: 100% 100%;

          span {
            font-size: 0.15rem;
            font-weight: bold;
            border-bottom: 1px solid;
            border-image: linear-gradient(135deg, rgba(212, 135, 241, 0.44), rgba(82, 224, 255, 0.44)) 1 1;
          }
        }

        .times {
          width: 3.5rem;
          height: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: url(~@/assets/cdn/images/bg9.webp) no-repeat;
          background-size: 100% 100%;
          text-align: center;

          span {
            font-size: 0.25rem;
            font-weight: bold;
            margin: 0 0.1rem;
          }

          p {
            &:nth-child(1) {
              font-size: 0.25rem;
              font-weight: bold;
            }

            &:nth-child(2) {
              font-size: 0.12rem;
            }
          }
        }
      }

      .buy_box {
        width: 100%;
        height: 1.5rem;
        padding: 0 0.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left {
          div {
            font-size: 0.12rem;

            &:nth-child(1) {
              font-weight: bold;
              position: relative;

              &::before {
                content: "";
                width: 0.02rem;
                height: 100%;
                background: linear-gradient(135deg, rgba(212, 135, 241, 0.44), rgba(82, 224, 255, 0.44));
                position: absolute;
                top: 0;
                left: -0.1rem;
              }
            }
          }

          .inputbox {
            width: 2rem;
            height: 0.4rem;
            margin: 0.1rem 0;
            background: rgba(24, 24, 28, 0.8);
            border-radius: 0.08rem;
            border: 1px solid #606060;
            display: flex;
            align-items: center;

            input {
              width: 100%;
              height: 100%;
              font-size: 0.2rem;
              font-weight: 400;
              color: #ffffff;
              text-align: center;
            }

            .span1,
            .span2 {
              width: 0.5rem;
              height: 80%;
              border-image: linear-gradient(180deg, rgba(85, 85, 87, 0), rgba(85, 85, 87, 1), rgba(85, 85, 87, 1), rgba(85, 85, 87, 0)) 1 1;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;

              &:hover i {
                color: #29a7e1;
              }

              i {
                font-size: 0.25rem;
                font-weight: 400;
                color: #555557;
              }
            }

            .span1 {
              border-right: 1px solid;
            }

            .span2 {
              border-left: 1px solid;
            }
          }
        }

        .right {
          .el-button {
            width: 1.2rem;
            height: 0.4rem;
            line-height: 0.4rem;
            font-size: 0.15rem;
          }
        }
      }

      .progress_bar_box {
        width: 100%;
        height: 1rem;
        padding: 0 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;

        >div {
          width: 100%;
          height: auto;
          font-size: 0.12rem;

          >div:nth-child(1) {
            font-weight: bold;
          }

          .progress_bar {
            width: 100%;
            height: auto;
            background: #17181b;
            border-radius: 0.1rem;
            margin: 0.1rem 0;

            div {
              width: 0;
              transition: all 1s;
              text-align: right;
              font-size: 0.1rem;
              font-weight: 600;
              background-image: linear-gradient(to right, rgba(0, 211, 255, 0.5), rgba(176, 108, 198, 1));
              border-radius: 0.1rem;
            }
          }
        }
      }
    }

    .content {
      width: 100%;
      padding: 0.2rem 0.5rem;
      font-size: 0.15rem;
      font-weight: 600;
      overflow-y: auto;
    }
  }
}

@media screen and (max-width: 750px) {
  .page {
    width: 100%;
    min-height: calc(100vh - 1rem);
    padding: 0.5rem 0;
  }

  .tip_box {
    width: 90%;
    height: 0.3rem;
    line-height: 0.3rem;
    border-radius: 0.04rem;
    margin: 0.1rem auto;
    font-size: 0.12rem;
    font-weight: 600;
  }

  .box {
    width: 90%;
    margin: 0 auto;
    height: auto;
    display: flex;
    justify-content: space-between;
  }

  .leftbox {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;

    .blindbox {
      width: 1.5rem;
      height: 1.8rem;
      margin-bottom: 0;
    }

    .blindbox img {
      height: 50%;
    }

    .info {
      width: 1.7rem;
      height: 1.8rem;
      padding: 0.1rem;

      div {
        font-size: 0.12rem;
        font-weight: 600;
      }
    }
  }

  .rightbox {
    width: 100%;
    height: auto;
    padding: 0;

    .stepsbox {
      margin-bottom: 0.2rem;

      .stepsbox_img {
        width: 0.2rem;
        height: 0.2rem;
      }
    }

    .box1 {
      margin-bottom: 0.2rem;

      .title {
        width: 100%;
        height: 0.4rem;
        padding: 0 0.1rem;
        font-size: 0.15rem;
        font-weight: 600;

        div {
          img {
            width: 0.07rem;
            height: auto;
            margin-right: 0.05rem;
          }
        }

        ul {
          display: flex;
          align-items: center;

          li {
            width: 0.36rem;
            height: 0.15rem;
            line-height: 0.15rem;
            margin-left: 0.05rem;
            padding: 0 0.05rem;

            div {
              i {
                font-size: 0.12rem;
                font-weight: 400;
              }
            }
          }
        }
      }

      .box2 {
        width: 100%;
        padding: 0.1rem 0;

        .row {
          font-size: 0.12rem;
          padding: 0 0.2rem;

          &:nth-child(1) {
            font-weight: 400;
            color: #979494;
          }

          &:nth-child(2) {
            padding: 0;
            height: auto;
          }
        }

        .hasbeenon {
          width: 100%;
          height: 1rem;

          .buying {
            width: 1.5rem;
            height: 0.5rem;

            span {
              font-size: 0.12rem;
              font-weight: bold;
            }
          }

          .times {
            width: 100%;
            height: 0.5rem;
            justify-content: space-between;
            padding: 0 0.2rem;

            span {
              font-size: 0.25rem;
              margin: 0 0.1rem;
            }

            p {
              &:nth-child(1) {
                font-size: 0.15rem;
              }

              &:nth-child(2) {
                font-size: 0.12rem;
              }
            }
          }
        }

        .buy_box {
          width: 100%;
          height: 1.2rem;
          padding: 0 0.2rem;

          .left {
            div {
              font-size: 0.12rem;
            }

            .inputbox {
              width: 1.5rem;
              height: 0.35rem;
              margin: 0.1rem 0;

              input {
                font-size: 0.15rem;
                font-weight: 400;
              }

              .span1,
              .span2 {
                width: 0.5rem;
              }
            }
          }

          .right {
            .el-button {
              width: 1rem;
              height: 0.35rem;
              line-height: 0.35rem;
              font-size: 0.12rem;
            }
          }
        }

        .progress_bar_box {
          width: 100%;
          height: 0.8rem;
          padding: 0 0.2rem;

          >div {
            font-size: 0.12rem;

            >div:nth-child(1) {
              font-weight: bold;
            }

            .progress_bar {
              border-radius: 0.1rem;
              margin: 0.1rem 0;
            }
          }
        }
      }

      .content {
        width: 100%;
        padding: 0.1rem 0.2rem;
        font-size: 0.12rem;
      }
    }
  }
}
</style>
