<template>
  <div class="page">

    <div class="box">
      <ul class="card_list">
        <div class="center"></div>
        <li @click="expedition('expeditionFirst')">
          <div class="title">
            <div>{{ $t("expedition.text12") }} </div>
            <div>
              <span>{{ $t("expedition.text2") }} </span>
            </div>
          </div>
          <div class="top">
            <div class="attack1"></div>
            <div class="bottom">
              <div class="text_ellipsis_row_3">
                <pre>{{ $t("expedition.text16") }}:50</pre>
              </div>
            </div>
            <el-button>{{ $t("expedition.text1") }}
            </el-button>
          </div>
        </li>
        <li @click="expedition('expeditionSecond')">
          <div class="title">
            <div>{{ $t("expedition.text13") }}</div>
            <div>
              <span>{{ $t("expedition.text2") }} </span>
            </div>
          </div>
          <div class="top">
            <div class="attack2"></div>
            <div class="bottom">
              <div class="text_ellipsis_row_3">
                <pre>{{ $t("expedition.text16") }}:150</pre>
              </div>
            </div>
            <el-button>{{ $t("expedition.text1") }}
            </el-button>
          </div>
        </li>
        <li @click="expedition('expeditionThird')">
          <div class="title">
            <div>{{ $t("expedition.text14") }}</div>
            <div>
              <span>{{ $t("expedition.text2") }} </span>
            </div>
          </div>
          <div class="top">
            <div class="attack3"></div>
            <div class="bottom">
              <div class="text_ellipsis_row_3">
                <pre>{{ $t("expedition.text16") }}:500</pre>
              </div>
            </div>
            <el-button>{{ $t("expedition.text1") }}
            </el-button>
          </div>
        </li>
        <li @click="expedition('expeditionForth')">
          <div class="title">
            <div>{{ $t("expedition.text15") }}</div>
            <div>
              <span>{{ $t("expedition.text2") }} </span>
            </div>
          </div>
          <div class="top">
            <div class="attack4"></div>
            <div class="bottom">
              <div class="text_ellipsis_row_3">
                <pre>{{ $t("expedition.text16") }}:1000</pre>
              </div>
            </div>
            <el-button>{{ $t("expedition.text1") }}
            </el-button>
          </div>
        </li>
      </ul>
      <div class="box3">
        <div class="box1">
          <div class="title">
            <img src="~@/assets/cdn/images/Normal_10055.png" alt="" />
            <div>{{ $t("expedition.text17") }}</div>
          </div>
          <div class="content">
            <table class="hero list">
              <thead>
                <tr>
                  <!--表头-->
                  <td>{{ $t("class.text11") }}</td>
                  <td>{{ $t("class.text12") }}</td>
                  <td>{{ $t("class.text6") }}</td>
                  <td>{{ $t("class.text7") }}</td>
                  <td>{{ $t("class.text8") }}</td>
                  <td>{{ $t("class.text9") }}</td>
                  <td>{{ $t("class.text10") }}</td>
                </tr>
              </thead>
              <!--列表加载自动滚动-->
              <tbody v-loading="loading" @scroll="myHeroListLoad">
                <!--加载点击事件获取选定符合条件的英雄-->
                <template v-if="getHeroData.data.length">
                  <tr v-for="(item, index) in getHeroData.data" :key="index" @click="chooseTokenId(item)">
                    <!--加载单选-->
                    <span>
                      <input type="radio" :value="item.tokenId" v-model="tokenId">
                      <img src="@/assets/cdn/images/battle2.png" alt />
                    </span>
                    <th>{{ index + 1 }}</th>
                    <th>{{ item.tokenId }}</th>
                    <th>{{
                        heroType(item.type) == 1 ? $t("class.text2") 
                        : (heroType(item.type) == 2 ? $t("class.text3") : $t("class.text4"))
                    }}
                    </th>
                    <th>{{ item.lv }}</th>
                    <th>{{ item.exp }}</th>
                    <th>{{ item.stamina }}</th>
                  </tr>
                </template>
                <template v-else>
                  <div class="no-data">No Data</div>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { heroType } from '@/utils/tools'
import GameAbi from "../../abi/Game.json";
import { gameAddress } from "../../abi/contractdata";
import Web3 from 'web3'

export default {
  name: "EXPEDITION",
  data() {
    return {
      loading: false,
      tokenId: '',
    }
  },
  computed: {
    ...mapGetters('underGrave', ['getHeroData'])
  },
  async mounted() {
    if (!this.getHeroData.getOnce) {
      this.loading = true
      await this.getHeroInfo();
      this.loading = false
    }
  },

  methods: {
    ...mapActions('underGrave', ['getHeroInfo']),
    heroType(type) {
      return heroType(type)
    },
    myHeroListLoad(e) {
      const scrollHeight = e.target.scrollHeight || e.srcElement.scrollHeight;
      const clientHeight = e.target.clientHeight || e.srcElement.clientHeight;
      const scrollTop = e.target.scrollTop || e.srcElement.scrollTop;
      if (scrollTop >= scrollHeight - clientHeight - 10) {
        console.log("我的英雄，加载下一页");
      }

    },

    chooseTokenId(item) {
      this.tokenId = item.tokenId;
    },
    async expedition(type) {
      if (!this.tokenId) {
        this.$message.warning({ message: this.$t("expedition.text18") });
        return
      }
      // 英雄战斗接口
      if (window.ethereum) {
        let web3 = new Web3(window.web3.currentProvider);
        const fromAddress = await web3.eth.getAccounts();
        const battlecontract = new web3.eth.Contract(GameAbi, gameAddress)

        this.$bus.$emit('global-loading', true)
        battlecontract.methods[type](this.tokenId).send({
          from: fromAddress[0]
          //, value: 1 * (10 ** 2)
        }).then(async (res) => {
          console.log(res, '11111111')
          // 获取奖励接口
          const rewards = await battlecontract.methods.rewards(fromAddress[0]).call()
          this.$bus.$emit('global-loading', false)
          console.log(rewards, '33333333')
        }).catch(err => {
          if (err.code === 4001) {
            let str = `The expedition failed: ${err.message}`
            this.$message.error(str)
          } else {
            this.$message.error({ message: this.$t("expedition.text19") })
          }
          console.log(err, '22222222')
          this.$bus.$emit('global-loading', false)
        })
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  padding: 0.8rem 0;
  background: url(~@/assets/cdn/images/landform_1201.png) no-repeat;
  background-size: 100% 100%;
  flex-wrap: wrap;
}

.box {
  width: 11.5rem;
  height: auto;
  margin: 0.2rem auto;
}

.card_list {
  width: 100%;
  height: 4.9rem;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 0.5rem 0 0 0.3rem;

  li {
    float: left;
    width: 2.6rem;
    //width: 3.4rem;
    // width: 3rem;
    height: 3.3rem;
    margin: 0 0.3rem 0.3rem 0;
    background: rgba(0, 0, 0, 0);
    border-radius: 0.1rem;
    border: 0rem solid #3f3e44;
    backdrop-filter: blur(4px);
    transition: all 0.3s;
    position: relative;
    cursor: pointer;

    &:nth-child(4n) {
      margin-right: 0;
    }

    &:hover {
      background: rgba(51, 52, 60, 0.57);
      box-shadow: 0.05rem 0.08rem 0.1rem 0rem rgba(0, 0, 0, 0.5);
    }

    img {
      width: 100%;
      height: 100%;
    }

    .title {
      padding-top: 10%;
      text-align: center;

      &:nth-child(1) {
        font-size: 0.15rem;
        font-weight: 600;
      }

      &:nth-child(2) {
        font-size: 0.12rem;
        font-weight: bold;

        span {
          &:nth-child(2) {
            color: #00d6ff;
          }
        }
      }

      &:nth-child(3) {
        margin-top: 0.2rem;
        font-size: 0.12rem;
        text-align: center;
      }
    }

    .top {
      width: 100%;
      height: 100%;
      margin-top: 0.2rem;

      .attack1 {
        width: 100%;
        height: 100%;
        margin-top: 0.2rem;
        background: url("~@/assets/cdn/spring/spritesheet1.png")no-repeat;
        transform: translate(0%, 30px);
        animation: ghost1 3s steps(7) infinite;
      }

      .attack2 {
        width: 100%;
        height: 100%;
        margin-top: 0.2rem;
        background: url("~@/assets/cdn/spring/spritesheet2.png")no-repeat;
        transform: translate(0%, -60px);
        animation: ghost2 3s steps(11) infinite;
      }

      .attack3 {
        width: 100%;
        height: 100%;
        margin-top: 0.2rem;
        background: url("~@/assets/cdn/spring/spritesheet3.png")no-repeat;
        transform: translate(0px, 70px);
        animation: ghost3 3s steps(7) infinite;
      }

      .attack4 {
        width: 100%;
        height: 100%;
        margin-top: 0.2rem;
        background: url("~@/assets/cdn/spring/spritesheet4.png")no-repeat;
        transform: translate(10px, -10px);
        animation: ghost4 2.5s steps(7) infinite;
      }

      @keyframes ghost1 {
        0% {
          background-position: 0 0;
        }

        100% {
          background-position: -1749px 0;
        }
      }

      @keyframes ghost2 {
        0% {
          background-position: 0 0;
        }

        100% {
          background-position: -2640px 0;
        }
      }

      @keyframes ghost3 {
        0% {
          background-position: 0 0;
        }

        100% {
          background-position: -1750px 0;
        }
      }

      @keyframes ghost4 {
        0% {
          background-position: 0 0;
        }

        100% {
          background-position: -1846px 0;
        }
      }

      .bottom {
        width: 100%;
        height: auto;
        margin: -0.7rem 0rem 0 0rem;

        >div {
          text-align: center;

          &:nth-child(1) {
            font-size: 0.1rem;
            font-weight: 600;
          }

          &:nth-child(2) {
            font-size: 0.12rem;
            font-weight: bold;

            span {
              &:nth-child(2) {
                color: #00d6ff;
              }
            }
          }

          &:nth-child(3) {
            margin-top: 0.2rem;
            font-size: 0.12rem;
            text-align: center;
          }
        }

      }

      .el-button {
        width: 1.2rem;
        height: 0.49rem;
        line-height: 0.2rem;
        font-size: 0.15rem;
        background-image: url(~@/assets/cdn/images/055.png);
        background-repeat: no-repeat;
        background-position: center;
        margin: 0.1rem 0 0 0.7rem;
      }
    }
  }
}

.box3 {
  width: 100%;
  height: auto;
  padding: 0.2rem;

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
      width: 17%;
      height: 0.5rem;
      font-size: 0.2rem;
      font-weight: 600;
      border-radius: 0.1rem;

      img {
        width: 0.35rem;
        height: 0.35rem;
      }

    }

    // tbody 滚动
    table tbody {
      display: block;
      overflow-x: hidden;
      overflow-y: scroll;
    }

    table thead,
    tbody tr,
    tfoot tr,
    thead tr {
      width: 100%;
      display: table;
      table-layout: fixed;
    }

    .content {
      width: 100%;
      padding: 0.1rem 0.3rem;
      font-size: 0.15rem;
      font-weight: 600;
      overflow-y: auto;

      .hero.list {
        margin-bottom: 0.4rem;
        width: 100%;
        height: 3.8rem;
        font-size: 0.18rem;
        font-weight: 400;
        text-align: center;

        thead {
          tr {
            height: 0.3rem;
            line-height: 0.5rem;
            padding-right: 0.05rem;
            background: rgba(24, 24, 28, 0.8);
            border-radius: 0.06rem;
            border: 1px solid #3b3b49;
            margin-left: 8px;
            margin-right: 5px;

            td {
              //border-radius: 0.06rem;
            }
          }
        }

        tbody {
          height: 3rem;
          -webkit-overflow-scrolling: touch; // 为了滚动顺畅

          tr {
            height: 0.6rem;
            line-height: 0.6rem;
            font-size: 0.17rem;
            margin-left: 8px;
            margin-right: 5px;

            img {
              vertical-align: middle;
              width: 0.4rem;
              height: 0.4rem;
              margin-left: 5px;
              //margin-top: 0.2rem;
            }

            &:hover {
              background: linear-gradient(90deg, #ac4711 0%, #d47221 100%);
              border-radius: 0.06rem;
              box-shadow: 0px 0px 8px 4px #000000;
            }


          }
        }
      }
    }

  }
}

@media screen and (max-width: 750px) {
  .page {
    width: 100%;
    padding: 0.5rem 0;
  }

  .box {
    width: 100%;
    height: auto;
  }

  .card_list {
    width: 90%;
    height: 6rem;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 0.2rem 0 0 0.3rem;

    li {
      width: 1.62rem;
      height: 4rem;
      margin: 0 0.1rem 0.1rem 0;
      border-radius: 0.05rem;

      &:nth-child(2n) {
        margin-right: 0;
      }

      .top {
        .attack1 {
          width: 130%;
          height: 2.5rem;
          margin: 0 0 0 0;
          transform: translate(-15%, 0px);
        }

        .attack2 {
          width: 130%;
          height: 2.5rem;
          margin: 0 0 0 0;
          transform: translate(-15%, -40px);
        }

        .attack3 {
          width: 130%;
          height: 2.5rem;
          margin: 0 0 0 0;
          transform: translate(-20%, 50px);
        }

        .attack4 {
          width: 130%;
          height: 2.5rem;
          margin: 0 0 0 0;
          transform: translate(-17%, -0px);
        }

        .bottom {
          padding: 0rem 0.05rem 0 0.05rem;
          margin: 0rem 0rem 0 0rem;

          >div {
            &:nth-child(1) {
              font-size: 0.12rem;
              font-weight: bold;
            }

            &:nth-child(2) {
              font-size: 0.12rem;
            }

            &:nth-child(3) {
              margin-top: 0.1rem;
              font-size: 0.12rem;
            }
          }
        }

        .el-button {
          width: 1.2rem;
          height: 0.49rem;
          line-height: 0.2rem;
          font-size: 0.15rem;
          background-image: url("~@/assets/cdn/images/055.png");
          // background: #00000000;
          background-repeat: no-repeat;
          background-position: center;
          margin: 0.05rem 0 0 0.2rem;
        }
      }
    }
  }

  .box3 {
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
      }

      ::-webkit-scrollbar {
        /* 隐藏滚动条 */
        display: none;
      }

      table tbody {
        display: block;
        overflow-x: hidden;
        overflow-y: scroll;
      }

      table thead,
      tbody tr,
      tfoot tr,
      thead tr {
        width: 100%;
        display: table;
        table-layout: fixed;
      }

      .content {
        width: 100%;
        padding: 0.1rem 0.3rem;
        font-size: 0.15rem;
        font-weight: 600;
        overflow-y: auto;

        .hero.list {
          margin-bottom: 0.4rem;
          width: 6rem;
          height: auto;
          font-size: 0.18rem;
          font-weight: 400;
          text-align: center;

          thead {
            tr {
              height: 0.4rem;
              line-height: 0.5rem;
              padding-right: 0.05rem;
              background: rgba(24, 24, 28, 0.8);
              border: 1px solid #3b3b49;
              border-radius: 0.06rem;

              td {
                //border-radius: 0.06rem;
              }
            }
          }

          tbody {
            max-height: 4rem;
            -webkit-overflow-scrolling: touch; // 为了滚动顺畅

            tr {
              height: 0.4rem;
              line-height: 0.5rem;
              font-size: 0.17rem;
            }
          }

          .table_td_btn {
            display: flex;
            align-items: center;
            justify-content: center;

            .el-button {
              width: 0.7rem;
              height: 0.3rem;
              font-size: 0.12rem;
              font-weight: 400;
              margin-left: 0.1rem;
            }
          }
        }
      }
    }
  }
}

.no-data {
  height: 3rem;
  line-height: 3rem;
}
</style>
