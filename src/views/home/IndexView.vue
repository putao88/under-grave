<template>
  <div class="home">
    <!-- INO -->
    <div class="row4" v-if="perSale">
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
    <div class="pre-sale-container" v-else>
      <div>
        <p class="pre-title">xxxxxxxx</p>
        <div class="sale-progress">
          <el-progress :text-inside="true" :stroke-width="30" :percentage="precent" color="#d47221" status="warning"></el-progress>
          <span>{{havBnb}}BNB / {{maxBnb}}BNB</span>
        </div>
      </div>
      <div class="sale-input">
        <p class="pre-title">Presale</p>
        <el-input type="number" v-model="bnbValue">
          <template slot="prepend">Spend</template>
          <template slot="append">BNB</template>
        </el-input>
        <el-input type="number" :disabled="true" v-model="ugtValue">
          <template slot="prepend">Get</template>
          <template slot="append">UGT</template>
        </el-input>
        <el-button type="warning" plain :disabled="!bnbValue" @click="buyUgt">BUY</el-button>
      </div>
      <div class="sale-share">
        <p class="pre-title">Share token</p>
        <div class="pre-token">
          <p>{{getAccount}}</p>
          <el-button class="cli-txt" type="warning" plain @click="shareUrl">Copy</el-button>
        </div>
        <p class="pre-sale">Every time new friends join the presale, you can earn up to <span>10% ETH Reward</span></p>
      </div>
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
import PreSaleNFT from "../../abi/PreSaleNFT.json";
import { NFTPresaleAddress, SaleNFTAddress } from "../../abi/contractdata";
import ClipboardJS from 'clipboard';
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
    ...mapGetters(["getAccount", "isEnLang"]),
    ugtValue() {
      return this.bnbValue * 10000
    },
    precent() {
      let val = this.havBnb / this.maxBnb
      return val < 1 ? (val * 100) : 100
    }
  },
  data() {
    return {
      customColor: '#f56c6c',
      perSale: false,
      bnbValue: 0,
      maxBnb: 300,
      havBnb: 0,
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
      if (this.perSale) {
          this.boxsellData();
          setInterval(() => {
            setTimeout(this.boxsellData, 0)
          }, 10000);
      } else {
        this.preSaleMount()
      }
    }
  },
  methods: {
    async preSaleMount() {
        if (window.ethereum) {
          var web3 = new Web3(window.web3.currentProvider);
          web3.eth.getBalance(SaleNFTAddress).then(res => {
            let num = res || 0
            this.havBnb = num / 10 ** 18
          })
        }
    },
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
          value: countAmount * p * (10 ** 18)
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

    async buyUgt() {
      if (!this.bnbValue) {
        return
      }
      if (window.ethereum) {
        let currentProvider = window.web3.currentProvider
        let web3 = new Web3(currentProvider);
        let shareToken = this.$route.params?.shareToken
        let fromAddress = await web3.eth.getAccounts();
        let inviteAddress = shareToken || fromAddress[0]
        let SaleContract = new web3.eth.Contract(
          PreSaleNFT,
          SaleNFTAddress
        );

        let params = {
          from: fromAddress[0],
          value: this.bnbValue * (10 ** 18)
        }
        this.$bus.$emit('global-loading', true)
        SaleContract.methods.buyToken(this.ugtValue, inviteAddress).send(params).then(() => {
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

    shareUrl() {
      let url = `${window.location.origin}/#/home/${this.getAccount}`
      let clipboard = new ClipboardJS('.cli-txt', {
        text: () => {
          return url
        }
      })
      clipboard.on('success', () => {
        this.$message.success('复制成功')
      })
      clipboard.on('error', () => {
        this.$message.success('复制失败')
      })
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
  .pre-sale-container {
    width: 400px;
    padding: 20px;
    margin: 0 auto;
    > div {
      margin: 40px 0px;
    }
    .pre-title {
      font-size: 18px;
      text-align: center;
      margin-bottom: 10px;
    }
    .sale-input {
      .el-input {
        margin-bottom: 20px;
        ::v-deep {
          .el-input__inner, .el-input-group__prepend, .el-input-group__append {
            background: rgba(129, 129, 151, 0.19);
            border: 1px solid #d47221;
            -webkit-backdrop-filter: blur(0.07rem);
            backdrop-filter: blur(0.07rem);
            color: white;
          }
          .el-input__inner {
            border-left: none;
            border-right: none;
          }
          .el-input-group__prepend {
            width: 92px;
            text-align: center;
            border-radius: 0.08rem 0 0 0.08rem;
          }
          .el-input-group__append {
            width: 74px;
            text-align: center;
            border-radius: 0 0.08rem 0.08rem 0;
          }
        }
      }
      .el-button {
        height: 40px;
        width: 100%;
      }
    }
    .sale-progress {
      position: relative;
      > span {
        position: absolute;
        top: 0;
        left: 38%;
        line-height: 30px;
        font-size: 12px;
      }
      .el-progress {
        ::v-deep {
          .el-progress-bar__innerText {
            opacity: 0;
          }
        }
      }
    }
    .sale-share {
      font-size: 12px;
      .el-button {
        height: 40px;
        width: 60px;
      }
      .pre-sale {
        span {
          color: #d47221;
        }
      }
      .pre-token {
        display: flex;
        p {
          display: inline-block;
          width: calc(100% - 80px);
          margin-right: 20px;
          font-size: 14px;
          line-height: 40px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;

          background: rgba(129, 129, 151, 0.19);
          -webkit-backdrop-filter: blur(0.07rem);
          backdrop-filter: blur(0.07rem);
          border-radius: 0.08rem;
          padding: 0px 4px;
          color: white;
        }
      }
    }
  }
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
