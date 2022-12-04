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
          <!--购买数量组件-->
          <el-input-number size="mini" v-model="item.buyAmount" @change="handleChange" :min="1" :max="100">
          </el-input-number>
          <!--购买组件，计数组件，计数器组件需单独设定，合约盲盒数量为整体数字-->
          <div class="btn">
            <div class="progress_bar">
              <el-progress :percentage="Number(item.percentage)" :color="customColor"></el-progress>
            </div>
            <el-button @click="click(item.link)">{{ $t(item.text3) }}</el-button>
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
//import Process from "@/components/Process.vue";
import NFTPresale from "../../abi/NFTPresale.json";
import Web3 from 'web3'
export default {
  name: "HOME",
  // components: { Process },
  computed: {
    ...mapGetters(["isEnLang"])
  },
  data() {
    return {
      customColor: '#f56c6c',
      daoList: [
        {
          text1: "home.daos[0].text1",
          text2: "home.daos[0].text2",
          text3: "home.daos[0].text3",
          text4: "home.daos[0].text4",
          imgs: require("@/assets/cdn/images/Normal_50006.png"),
          link: "buyFirst",
          progressDone: "",
          progressTotal: "",
          percentage: 0,
          buyAmount: '1',
        },
        {
          text1: "home.daos[1].text1",
          text2: "home.daos[1].text2",
          text3: "home.daos[1].text3",
          text4: "home.daos[1].text4",
          imgs: require("@/assets/cdn/images/Normal_50026.png"),
          link: "buySecond",
          progressDone: "",
          progressTotal: "",
          percentage: 0,
          buyAmount: '1',
        },
        {
          text1: "home.daos[2].text1",
          text2: "home.daos[2].text2",
          text3: "home.daos[2].text3",
          text4: "home.daos[2].text4",
          imgs: require("@/assets/cdn/images/Normal_50025.png"),
          link: "buyThird",
          progressDone: "",
          progressTotal: "",
          percentage: 0,
          buyAmount: '1',
        },
        {
          text1: "home.daos[3].text1",
          text2: "home.daos[3].text2",
          text3: "home.daos[3].text3",
          text4: "home.daos[3].text4",
          imgs: require("@/assets/cdn/images/Normal_50021.png"),
          link: "",
          progressDone: "",
          progressTotal: "",
          percentage: 100,
          buyAmount: '1',
        },
      ],
    };
  },
  mounted() {
    // this.daoList[0].percentage = setInterval(() => {
    //   setTimeout(this.boxsellData, 0)
    // }, 100 * 60)
    this.boxsellData();
  },
  methods: {
    async boxsellData() {
      if (window.ethereum) {
        var web3 = (web3 = new Web3(window.web3.currentProvider));
        let fromAddress = await web3.eth.getAccounts();
        console.log(fromAddress)
        let NFTPresaleAddress = "0x2c884FCDd3dEea45D3175b85965042f3e21a15C1"; //INO地址
        let PresaleContract = new web3.eth.Contract(
          NFTPresale,
          NFTPresaleAddress
        );
        this.daoList[0].progressDone = await PresaleContract.methods
          .primaryId()
          .call();
        this.daoList[0].progressTotal = await PresaleContract.methods
          .primary()
          .call();
        this.daoList[0].percentage = (this.daoList[0].progressDone / this.daoList[0].progressTotal * 100).toFixed(2)
        console.log(this.daoList[0].progressDone)

        this.daoList[1].progressDone = await (PresaleContract.methods
          .seniorId()
          .call()) - 2000;
        this.daoList[1].progressTotal = await (PresaleContract.methods
          .senior()
          .call()) - 2000;
        this.daoList[1].percentage = (this.daoList[1].progressDone / this.daoList[1].progressTotal * 100).toFixed(2)
        console.log(this.daoList[1].progressDone);

        this.daoList[2].progressDone = await (PresaleContract.methods
          .ultimateId()
          .call()) - 2800;
        this.daoList[2].progressTotal = await (PresaleContract.methods
          .ultimate()
          .call()) - 2800;
        this.daoList[2].percentage = (this.daoList[2].progressDone / this.daoList[2].progressTotal * 100).toFixed(2)
        console.log(this.daoList[2].progressDone);
      } else {
        alert("Please connect the wallet");
      }
    },

    handleChange(value) {
      console.log(value);
    },
    click: function (e) {
      this[e]();
    },
    buyFirst: async function () {
      if (window.ethereum) {
        var web3 = (web3 = new Web3(window.web3.currentProvider));
        let fromAddress = await web3.eth.getAccounts();
        console.log(fromAddress)
        let NFTPresaleAddress = "0x2c884FCDd3dEea45D3175b85965042f3e21a15C1"; //INO地址
        let PresaleContract = new web3.eth.Contract(
          NFTPresale,
          NFTPresaleAddress
        );
        console.log(PresaleContract)
        let countAmount = this.daoList[0].buyAmount;
        PresaleContract.methods
          .buyFirst(countAmount)
          .send({
            from: fromAddress[0],
            value: countAmount * 1 * (10 ** 17)
          });
      }
    },
    buySecond: async function () {
      if (window.ethereum) {
        var web3 = (web3 = new Web3(window.web3.currentProvider));
        let fromAddress = await web3.eth.getAccounts();
        console.log(fromAddress)
        let NFTPresaleAddress = "0x2c884FCDd3dEea45D3175b85965042f3e21a15C1"; //INO地址
        let PresaleContract = new web3.eth.Contract(
          NFTPresale,
          NFTPresaleAddress
        );
        console.log(PresaleContract)
        let countAmount = this.daoList[1].buyAmount;
        PresaleContract.methods
          .buySecond(countAmount)
          .send({
            from: fromAddress[0],
            value: countAmount * 2 * (10 ** 17)
          });
      }
    },
    buyThird: async function () {
      if (window.ethereum) {
        var web3 = (web3 = new Web3(window.web3.currentProvider));
        let fromAddress = await web3.eth.getAccounts();
        console.log(fromAddress)
        let NFTPresaleAddress = "0x2c884FCDd3dEea45D3175b85965042f3e21a15C1"; //INO地址
        let PresaleContract = new web3.eth.Contract(
          NFTPresale,
          NFTPresaleAddress
        );
        console.log(PresaleContract)
        let countAmount = this.daoList[2].buyAmount;
        PresaleContract.methods
          .buyThird(countAmount)
          .send({
            from: fromAddress[0],
            value: countAmount * 1 * (10 ** 18)
          });
      }
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
      padding: 0.2rem 0.38rem;
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
          // div {
          //   position: relative;
          //   width: 80%;
          //   height: 100%;
          //   background: linear-gradient(134deg, rgba(0, 211, 255, 1), rgba(176, 108, 198, 1));
          //   border-radius: 0.05rem;
          // }
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
    margin-bottom: -0.5rem;
    background-size: 60%;
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
          padding: 0.1rem;

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

          // .progress_bar {
          //   width: 100%;
          //   height: auto;
          //   background: #17181b;
          //   border-radius: 0.1rem;
          //   margin: 0.1rem 0;

          //   div {
          //     width: 0;
          //     transition: all 1s;
          //     text-align: right;
          //     font-size: 0.1rem;
          //     font-weight: 600;
          //     background-image: linear-gradient(to right, rgba(0, 211, 255, 0.5), rgba(176, 108, 198, 1));
          //     border-radius: 0.1rem;
          //   }
          // }
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
