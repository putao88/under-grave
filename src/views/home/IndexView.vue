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
          <!-- <div class="radialbg"></div> -->
          <p>
            {{ $t(item.text1) }}
            <span>{{ $t("status.text10") }}</span>
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
            <el-button @click="buyBlindBox(item.link, index)">{{ $t(item.text3) }}</el-button>
          </div>
        </li>
      </ul>
      <!-- <div class="row4" style="height:3rem"> -->
      <!-- </div> -->
    </div>
    <!-- <div class="row4" style="height:3rem">
      <div class="row_title_ido">IDO
      </div>
      <div class="title">
        <br>COMMING SOON
      </div>
    </div> -->
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
import NFTPresale from "../../abi/NFTPresale.json";
import { NFTPresaleAddress } from "../../abi/contractdata";
import Web3 from 'web3'

const price = {
  buyFirst: 1,
  buySecond: 2,
  buyThird: 10,
  buyHouse: 5,
}

export default {
  name: "HOME",

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
          link: "buyHouse",
          progressDone: "",
          progressTotal: "",
          percentage: 0,
          buyAmount: '1',
        },
      ],
    };
  },
  mounted() {
    if (window.ethereum) {
      this.boxsellData();
      setInterval(() => {
        setTimeout(this.boxsellData, 0)
      }, 10000);
    }

  },
  methods: {
    async boxsellData() {
      if (window.ethereum) {
        var web3 = (web3 = new Web3(window.web3.currentProvider));
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
        //console.log(this.daoList[0].progressDone)

        this.daoList[1].progressDone = await (PresaleContract.methods
          .seniorId()
          .call()) - 2000;
        this.daoList[1].progressTotal = await (PresaleContract.methods
          .senior()
          .call()) - 2000;
        this.daoList[1].percentage = (this.daoList[1].progressDone / this.daoList[1].progressTotal * 100).toFixed(2)
        //console.log(this.daoList[1].progressDone);

        this.daoList[2].progressDone = await (PresaleContract.methods
          .ultimateId()
          .call()) - 2800;
        this.daoList[2].progressTotal = await (PresaleContract.methods
          .ultimate()
          .call()) - 2800;
        this.daoList[2].percentage = (this.daoList[2].progressDone / this.daoList[2].progressTotal * 100).toFixed(2)
       // console.log(this.daoList[2].progressDone);

        this.daoList[3].progressDone = await PresaleContract.methods
          .houseId()
          .call();
        this.daoList[3].progressTotal = await PresaleContract.methods
          .houseCount()
          .call();
        this.daoList[3].percentage = (this.daoList[3].progressDone / this.daoList[3].progressTotal * 100).toFixed(2)
      } else {
        alert("Please connect the wallet");
      }
    },

    handleChange(value) {
      console.log(value);
    },
    async buyBlindBox(type, index) {
      if (window.ethereum) {
        let p = price[type]
        let currentProvider = window.web3.currentProvider
        let web3 = new Web3(currentProvider);
        let fromAddress = await web3.eth.getAccounts();
        let PresaleContract = new web3.eth.Contract(
          NFTPresale,
          NFTPresaleAddress
        );
        let countAmount = this.daoList[index].buyAmount;
        let params = {
          from: fromAddress[0],
          value: countAmount * p * (10 ** 17)
        }
        this.$bus.$emit('global-loading', true)
        PresaleContract.methods[type](countAmount)
          .send(params).then(() => {
            // TODO?
            this.$message.success('购买成功')
          }).catch(err => {
            if (err.code === 4001) {
              this.$message.error(`购买失败: ${err.message}`)
            }
          }).finally(() => {
            this.$bus.$emit('global-loading', false)
          })
      }
    },

    beforeDestroy() {
      clearInterval(this.boxsellData);
      this.daoList[0].percentage = null;
      this.daoList[1].percentage = null;
      this.daoList[2].percentage = null;
      this.daoList[3].percentage = null;
    }

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

.row_title_ido {
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

      p {
        font-size: 0.15rem;
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

  .row_title {
    text-align: center;
    font-size: 0.25rem;
    font-weight: bold;
    color: #ce6519;
    margin-bottom: 0.1rem;
    background-size: 60%;
  }

  .row_title_ido {
    text-align: center;
    font-size: 0.25rem;
    font-weight: bold;
    color: #ce6519;
    margin-bottom: 0.1rem;
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
      width: 13%;
      height: 0.5rem;
      font-size: 0.2rem;
      font-weight: 400;
      border-radius: 0.1rem;

      img {
        width: 0.35rem;
        height: 0.35rem;
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

  .rightbox {
    width: 100%;
    height: auto;
    padding: 0;

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

      .content {
        width: 100%;
        padding: 0.1rem 0.2rem;
        font-size: 0.12rem;
      }
    }
  }
}
</style>
