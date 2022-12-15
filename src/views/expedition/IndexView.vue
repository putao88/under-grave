<template>
  <div class="page">
    <div class="box">
      <!--<div class="row_title">
        <span>{{ $t("expedition.text1") }}</span>
      </div>-->
      <ul class="card_list">
        <li @click="expeditionFirst">
          <div class="top"><img src="~@/assets/cdn/images/door1.png" alt="" /></div>
          <div class="center"><img src="~@/assets/cdn/images/activity_005.png" alt="" /></div>
          <div class="bottom">
            <div>{{ $t("expedition.text12") }}</div>
            <div>
              <span>{{ $t("expedition.text2") }} </span>
            </div>
            <div class="text_ellipsis_row_3">
              <pre>{{ $t("expedition.text16") }}:50</pre>
            </div>
          </div>
          <el-button>{{ $t("expedition.text1") }}
          </el-button>
        </li>
        <li @click="expeditionSecond">
          <div class="top"><img src="~@/assets/cdn/images/door2.png" alt="" /></div>
          <div class="center"><img src="~@/assets/cdn/images/activity_006.png" alt="" /></div>
          <div class="bottom">
            <div>{{ $t("expedition.text13") }}</div>
            <div>
              <span>{{ $t("expedition.text2") }} </span>
            </div>
            <div class="text_ellipsis_row_3">
              <pre>{{ $t("expedition.text16") }}:150</pre>
            </div>
          </div>
          <el-button>{{ $t("expedition.text1") }}
          </el-button>
        </li>
        <li @click="expeditionThird">
          <div class="top"><img src="~@/assets/cdn/images/door3.png" alt="" /></div>
          <div class="center"><img src="~@/assets/cdn/images/activity_007.png" alt="" /></div>
          <div class="bottom">
            <div>{{ $t("expedition.text14") }}</div>
            <div>
              <span>{{ $t("expedition.text2") }} </span>
            </div>
            <div class="text_ellipsis_row_3">
              <pre>{{ $t("expedition.text16") }}:500</pre>
            </div>
          </div>
          <el-button>{{ $t("expedition.text1") }}
          </el-button>
        </li>
        <li @click="expeditionForth">
          <div class="top"><img src="~@/assets/cdn/images/door4.png" alt="" /></div>
          <div class="center"><img src="~@/assets/cdn/images/activity_008.png" alt="" /></div>
          <div class="bottom">
            <div>{{ $t("expedition.text15") }}</div>
            <div>
              <span>{{ $t("expedition.text2") }} </span>
            </div>
            <div class="text_ellipsis_row_3">
              <pre>{{ $t("expedition.text16") }}:1000</pre>
            </div>
          </div>
          <el-button>{{ $t("expedition.text1") }}
          </el-button>
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
              <tbody @scroll="myHeroListLoad">
                <!--加载点击事件获取选定符合条件的英雄-->
                <tr v-for="(item, index) in tableData" :key="index" @click="chooseTokenId(item)">
                  <!--加载单选-->
                  <span>
                    <input type="radio" :value="item.tokenId" v-model="radio">
                    <img src="@/assets/cdn/images/battle2.png" alt />
                  </span>
                  <th>{{ index + 1 }}</th>
                  <th>{{ item.tokenId }}</th>
                  <th>{{ item.class }}</th>
                  <th>{{ item.LV }}</th>
                  <th>{{ item.exp }}</th>
                  <th>{{ item.Stamina }}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {heroType,heroNftProficiency, heroNftLevel, HeroEndurance, gethero, expeditionFirst, expeditionSecond, expeditionThird, expeditionForth } from '../expedition/battle';


export default {
  name: "EXPEDITION",
  data() {
    return {
      tableData: [],
      radio: '',
      tokenId: [],
      Stamina: [],
      LV: [],
      exp: [],
      class: []
    }
  },
  mounted() {
    this.getHeroInfo();
  },

  methods: {
    myHeroListLoad(e) {
      const scrollHeight = e.target.scrollHeight || e.srcElement.scrollHeight;
      const clientHeight = e.target.clientHeight || e.srcElement.clientHeight;
      const scrollTop = e.target.scrollTop || e.srcElement.scrollTop;
      if (scrollTop >= scrollHeight - clientHeight - 10) {
        console.log("我的英雄，加载下一页");
      }
    },

    //获取英雄详细信息添加数据
    async getHeroInfo() {
     this.tokenId = await gethero()
      this.Stamina = await HeroEndurance(this.tokenId)
      this.LV = await heroNftLevel(this.tokenId)
      this.exp = await heroNftProficiency(this.tokenId)
      this.class = await heroType(this.tokenId)
      console.log(this.tokenId.length)
      for (let i = 0; i < this.tokenId.length; i++) {
        let Id = ''
        let IdStamina = ''
        let IdLV = ''
        let Idexp = ''
        let Idclass = ''
        Id += this.tokenId[i]
        IdStamina += this.Stamina[i]
        IdLV += this.LV[i]
        Idexp += this.exp[i]
        Idclass += this.class[i]
        this.tableData.push({ tokenId: Id, class: Idclass, LV: IdLV, exp: Idexp, Stamina: IdStamina, })
      }
    },

    chooseTokenId(item) {
      this.radio = item.tokenId;
      console.log('获取选定的地址进行探险', this.radio);
    },
    expeditionFirst() {
      const tokenId = this.radio
      expeditionFirst(tokenId)
    },
    expeditionSecond() {
      const tokenId = this.radio
      expeditionSecond(tokenId)
    },
    expeditionThird() {
      const tokenId = this.radio
      expeditionThird(tokenId)
    },
    expeditionForth() {
      const tokenId = this.radio
      expeditionForth(tokenId)
    },
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

.box_title {
  margin: 0.5rem 0;
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

.card_list {
  width: 100%;
  height: 5.5rem;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 0.7rem auto;

  li {

    float: left;
    width: 2.65rem;
    height: 3.6rem;
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

      .angle2 {
        opacity: 1;
      }
    }

    img {
      width: 100%;
      height: 100%;
    }

    .top {
      width: 100%;
      height: 100%;

    }

    .center {
      width: 1.2rem;
      height: 1.2rem;
      position: absolute;
      left: 0;
      right: 0;
      top: 2.3rem;
      margin: auto;
    }

    .bottom {
      width: 100%;
      height: auto;
      padding: 0.3rem 0.1rem 0 0.1rem;

      >div {
        text-align: center;

        &:nth-child(1) {
          font-size: 0.2rem;
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

    .content {
      width: 100%;
      padding: 0.1rem 0.3rem;
      font-size: 0.15rem;
      font-weight: 600;
      overflow-y: auto;

      .hero.list {
        margin-bottom: 0.4rem;
        width: 100%;
        height: auto;
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

            td {
              //border-radius: 0.06rem;
            }
          }
        }

        tbody {
          max-height: 3rem;
          -webkit-overflow-scrolling: touch; // 为了滚动顺畅

          tr {
            height: 0.6rem;
            line-height: 0.6rem;
            font-size: 0.17rem;

            img {
              vertical-align: middle;
              width: 0.4rem;
              height: 0.4rem;
              margin-left: 5px;
              //margin-top: 0.2rem;
            }

            &:hover {
              // background: rgba(24, 24, 28, 0.8);
              // border-radius: 0.06rem;
              background: linear-gradient(90deg, #ac4711 0%, #d47221 100%);
              box-shadow: 0px 0px 8px 4px #000000;
            }


          }
        }
      }
    }

    .row {
      width: 100%;
      background: #282834;
      border-radius: 0.1rem;
      padding: 0.1rem 0.2rem;
      margin-bottom: 0.2rem;

      &:nth-child(2),
      &:nth-child(3) {
        width: 49.5%;
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

    li {
      width: 1.62rem;
      height: 3.1rem;
      margin: 0 0.1rem 0.1rem 0;
      border-radius: 0.05rem;

      &:nth-child(2n) {
        margin-right: 0;
      }

      .top {
        width: 100%;
        height: 1.8rem;
      }

      .center {
        width: 0.8rem;
        height: 0.8rem;
        top: 1.1rem;
      }

      .bottom {
        padding: 0.15rem 0.05rem 0 0.05rem;

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
        background-image: url(~@/assets/cdn/images/055.png);
        background-repeat: no-repeat;
        background-position: center;
        margin: 0.05rem 0 0 0.2rem;
      }

      .angle2 {
        width: 0.08rem;
        height: auto;
        right: 0.05rem;
        bottom: 0.05rem;
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
</style>
