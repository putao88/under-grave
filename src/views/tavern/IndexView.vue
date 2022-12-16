<template>
  <div class="page">
    <div class="box">
      <div class="leftbox">
        <div>
          <div class="avatar">
            <img src="~@/assets/cdn/images/20.png" alt="" />
          </div>
          <div class="lis">
            <div><i><img src="~@/assets/cdn/images/house.png" alt="" /></i></div>
          </div>
          <div class="btn">
            <h3>MY TAVERN</h3>
          </div>
          <div class="btn">
            <el-button :disabled="false"> {{ $t("tavern.text5") }} </el-button>
          </div>
        </div>
      </div>
      <div class="rightbox">
        <div class="title">
          <div>{{ $t("tavern.text1") }}</div>
        </div>
        <div class="content">
          <table class="hero list">
            <thead>
              <tr>
                <!--加载表头-->
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
              <template  v-if="getHeroData.data.length">
                <tr v-for="(item, index) in getHeroData.data" :key="index" @click="chooseTokenId(item)">
                  <!--加载单选-->
                  <span>
                    <input type="radio" :value="item.tokenId" v-model="radio">
                    <img src="@/assets/cdn/images/sleep.png" alt />
                  </span>
                  <th>{{ index + 1 }}</th>
                  <th>{{ item.tokenId }}</th>
                  <th>{{ heroType(item.type) }}</th>
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
</template>

<script>

import { heroType } from '@/utils/tools'
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "TAVERN",
  data() {
    return {
      loading: false,
      radio: '',
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
    heroType,
    myHeroListLoad(e) {
      const scrollHeight = e.target.scrollHeight || e.srcElement.scrollHeight;
      const clientHeight = e.target.clientHeight || e.srcElement.clientHeight;
      const scrollTop = e.target.scrollTop || e.srcElement.scrollTop;
      if (scrollTop >= scrollHeight - clientHeight - 10) {
        console.log("我的英雄，加载下一页");
      }
    },

    chooseTokenId(item) {
      this.radio = item.tokenId;
      console.log('获取选定的地址进行探险', this.radio);
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  padding: 0.8rem 0;
  background: url(~@/assets/cdn/images/landform_0301.png) no-repeat;
  background-size: 100% 100%;
}

.box {
  width: 12rem;
  margin: 0.5rem auto;
  background: rgba(129, 129, 151, 0.19);
  border-radius: 0.08rem;
  border: 1px solid #535151;
  backdrop-filter: blur(0.07rem);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.8rem 0.5rem 0.5rem 0.5rem;
}

.leftbox {
  width: 3.5rem;
  height: fit-content;

  >div {
    width: 100%;
    height: 100%;
    position: relative;
    background: rgba(24, 24, 28, 0.567);
    border-radius: 0.06rem;
    padding: 0.8rem 0.2rem 0.2rem 0.2rem;

    .avatar {
      width: 1.2rem;
      height: 1.2rem;
      padding: 0.1rem;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0);
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -0.5rem;
      left: 0;
      right: 0;
      margin: auto;

      img {
        width: 100%;
      }
    }

    .title {
      font-size: 0.3rem;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;

      i {
        font-size: 0.3rem;
        margin-left: 0.1rem;
      }
    }

    .linklist {
      width: fit-content;
      margin: 0.2rem auto;
      display: flex;
      align-items: center;
      border-radius: 0.15rem;
      overflow: hidden;

      a {
        width: 0.55rem;
        height: 0.35rem;
        background: rgba(255, 255, 255, 0.21);
        backdrop-filter: blur(0.06rem);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0.05rem;

        img {
          width: 50%;
          height: auto;
        }

        &:last-child {
          margin-right: 0;
        }

        &:hover {
          background: linear-gradient(90deg, #38697f 0%, #5d4c78 100%);
          box-shadow: 0px 0px 8px 4px #000000;
        }
      }
    }

    .lis {
      width: 100%;
      padding: 0.2rem;
      border-bottom: 1px solid;
      margin: 0 auto;
      border-image: linear-gradient(135deg, rgba(212, 135, 241, 0.44), rgba(82, 224, 255, 0.44)) 1 1;
      display: flex;
      align-items: center;
      justify-content: space-between;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.15rem;
        font-weight: 300;

        i {
          font-size: 0.35rem;
          margin-right: 0.1rem;

          img {
            width: 100%;
          }
        }
      }
    }

    .btn {
      width: fit-content;
      margin: 0.2rem auto;
      font-size: 0.2rem;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;

      .el-button {
        width: 1.2rem;
        height: 0.49rem;
        line-height: 0.2rem;
        font-size: 0.15rem;
        background-image: url(~@/assets/cdn/images/055.png);
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
}

.rightbox {
  width: calc(100% - 3.5rem);

  .title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.3rem;
    font-weight: bold;
    padding: 0 0.2rem;
    margin-bottom: 0.1rem;

    .el-select {
      width: 1.5rem;
      height: 0.4rem;
    }
  }

  // tbody 滚动
  table tbody {
    display: block;
    overflow-x: scroll;
    overflow-y: scroll;
  }

  table thead,
  tbody tr,
  tfoot tr,
  thead tr {
    width: 100%;
    display: table;
    table-layout: fixed;
    //overflow-x: scroll;
    overflow-y: scroll;
  }

  .content {
    width: 100%;
    padding: 0.1rem 0.3rem;
    font-size: 0.15rem;
    font-weight: 600;

    .hero.list {
      margin-bottom: 0.3rem;
      width: 100%;
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
        height: 4rem;
        -webkit-overflow-scrolling: touch; // 为了滚动顺畅

        tr {
          height: 0.4rem;
          line-height: 0.5rem;
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

  ::-webkit-scrollbar {
    /* 隐藏滚动条 */
    display: none;
  }
}

@media screen and (max-width: 750px) {
  .page {
    width: 100%;
    padding: 0.5rem 0;
  }

  .box {
    width: 90%;
    margin: 0.2rem auto;
    padding: 0.5rem 0 0 0;
  }

  .leftbox {
    width: 100%;
    height: fit-content;
    margin-bottom: 0.2rem;
    padding: 0 0.2rem;

    >div {
      padding: 0.5rem 0 0.2rem 0;

      .avatar {
        width: 0.8rem;
        height: 0.8rem;
        padding: 0.05rem;
        top: -0.4rem;
      }

      .title {
        font-size: 0.2rem;
        font-weight: bold;

        i {
          font-size: 0.2rem;
          margin-left: 0.1rem;
        }
      }

      .lis {
        width: 70%;
        padding: 0.1rem;

        div {
          font-size: 0.12rem;
          font-weight: 300;

          i {
            font-size: 0.2rem;
            margin-right: 0.1rem;
          }
        }
      }

      .btn {
        width: fit-content;
        margin: 0.1rem auto;

        .el-button {
          width: 1.2rem;
          height: 0.49rem;
          line-height: 0.2rem;
          font-size: 0.15rem;
          background-image: url(~@/assets/cdn/images/055.png);
          background-repeat: no-repeat;
          background-position: center;
        }
      }
    }
  }

  ::-webkit-scrollbar {
    /* 隐藏滚动条 */
    display: none;
  }

  .rightbox {
    width: 100%;
    padding: 0 0.1rem;

    .title {
      width: 100%;
      font-size: 0.2rem;
      font-weight: 500;
      padding: 0 0.1rem;
      margin-bottom: 0.05rem;

      .el-select {
        width: 1.2rem;
        height: 0.3rem;
      }
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
        width: 4.9rem;
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
.no-data {
  height: 4rem;
  line-height: 4rem;
}
</style>
