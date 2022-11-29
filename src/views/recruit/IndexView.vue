<template>
  <div class="page">
    <!-- <div class="tip_box">{{ $t("recruit.text1") }} {{ $t(nowStatusText) }}</div>-->
    <div class="box">
      <div class="herobox">
        <div class="leftbox">
          <div class="blindbox">
            <img src="~@/assets/cdn/images/door6.png" alt="" />
            <!--定格动画组件-->
            <!--<LottieAnimation></LottieAnimation>-->
          </div>
        </div>
        <div class="endbox">
          <div class="box1">
            <div class="title">
              <img src="~@/assets/cdn/images/Normal_10055.png" alt="" />
              <div>{{ $t("recruit.text6") }}</div>
            </div>
            <div class="box2">
              <div class="row">
                <span>{{ $t("recruit.text3") }}</span> <span>{{ balanceAmount }} UGT</span>
              </div>
              <div class="row">
                <div class="buy_box">
                  <div class="left">
                    <span>{{ $t("recruit.text4") }}</span> <span>{{ boxPrice }} UGT</span>
                  </div>
                  <div class="right">
                    <el-button type="primary" :loading="buyloading" @click="buyBoxesBefore">{{ $t("recruit.text19") }}
                    </el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="herobox">
        <div class="rightbox">
          <div class="blindbox">
            <img src="~@/assets/cdn/images/tool2.png" alt="" />
            <!--定格动画组件-->
            <!--<LottieAnimation></LottieAnimation>-->
          </div>
        </div>
        <div class="endbox">
          <div class="box1">
            <div class="title">
              <img src="~@/assets/cdn/images/play_dungeon0201.png" alt="" />
              <div>{{ $t("recruit.text6") }}</div>
            </div>
            <div class="box2">
              <div class="row">
                <span>{{ $t("recruit.text3") }}</span> <span>{{ balanceAmount }} UGT</span>
              </div>
              <div class="row">
                <div class="buy_box">
                  <div class="left">
                    <span>{{ $t("recruit.text4") }}</span> <span>{{ boxPrice }} UGT</span>
                  </div>
                  <div class="right">
                    <el-button type="primary" :loading="buyloading" @click="buyBoxesBefore">{{ $t("recruit.text20") }}
                    </el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box3">
      <div class="box1">
        <div class="title">
          <img src="~@/assets/cdn/images/Normal_10055.png" alt="" />
          <div>{{ $t("recruit.text22") }}</div>
        </div>
        <div class="content">
          <pre>{{ $t("recruit.introduction2") }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RECRUIT",
  data() {
    return {
      boxType: 0,
      totalAmount: 0,
      soldAmount: 0,
      remainingAmount: 0,
      hourRemainingAmount: 0,

      boxPrice: 0,
      hourlyBuyAmount: 0,
      paymentAddress: "",
      isOpenWhitelist: false,
      isWhite: true,
      inputAmount: null,
      totalPrice: 0,
      balanceAmount: 0,
      stepsArr: [
        { label: "status.text1", time: "" },
        { label: "status.text2", time: "" },
        { label: "status.text3", time: "" },
      ],
      countdownObj: { d: 0, h: 0, m: 0, s: 0 },
      countdownTimer: null,
      nowStatusText: "",
      nowStatusIndex: 0,
      progressWidth: 0,
      isApproved: false,
      popupActive: 1,
      approvedloading: false,
      buyloading: false,
    };
  },
  methods: {
    buyBoxesBefore() {}
  }
}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  min-height: calc(100vh - 4rem);
  padding: 0.8rem 0;
  overflow: hidden;
  background: url(~@/assets/cdn/images/landform_1101.png) no-repeat;
  background-size: 100% 100%;
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
  width: 11rem;
  margin: 0 auto;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .herobox {
    width: 5rem;
    margin: 0 auto;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}

.leftbox {
  width: 4.2rem;
  height: auto;

  .blindbox {
    width: 100%;
    height: 5rem;
    background: rgba(129, 129, 151, 0);
    border-radius: 8px;
    border: 0px solid #436e77;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.2rem;

    img {
      width: 100%;
      align-items: center;
      justify-content: center;
    }

  }
}

.rightbox {
  width: 4.2rem;
  height: auto;

  .blindbox {
    width: 100%;
    height: 5rem;
    background: rgba(129, 129, 151, 0);
    border-radius: 8px;
    border: 0px solid #436e77;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.2rem;

    img {
      width: 100%;
      align-items: center;
      justify-content: center;
    }
  }
}

.endbox {
  width: 6.5rem;
  height: auto;

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
      width: 35%;
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

        &:nth-child(1) {
          font-weight: 400;
          color: #ffffff;
        }

        &:nth-child(2) {
          padding: 0;
          height: auto;
        }
      }

      .buy_box {
        width: 100%;
        height: 0.6rem;
        padding: 0.3rem 0 0 0rem;
        display: flex;
        align-items: center;
        justify-content: center;

        .right {
          padding: 0 0 0 1.8rem;

          .el-button {
            width: 1.2rem;
            height: 0.49rem;
            line-height: 0.2rem;
            font-size: 0.15rem;
            background-image: url(~@/assets/cdn/images/055.png);
            background-repeat: no-repeat;
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

.box3 {
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
      width: 8%;
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

    .herobox {
      width: 5rem;
      margin: 0 auto;
      height: auto;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  .leftbox {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin-bottom: 0.2rem;
    margin-top: 0.5rem;

    .blindbox {
      width: 1.9rem;
      height: 1.8rem;
      margin-bottom: 0.8rem;
    }

    .blindbox img {
      width: 1.9rem;
      height: 2.7rem;
      margin-bottom: 0;
    }
  }

  .rightbox {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin-bottom: 0.2rem;
    margin-top: 0.1rem;

    .blindbox {
      width: 1.9rem;
      height: 1.8rem;
      margin-bottom: 0.8rem;
    }

    .blindbox img {
      width: 1.9rem;
      height: 2.7rem;
      margin-bottom: 0;
    }
  }

  .endbox {
    width: 100%;
    height: auto;
    padding-left: 0;
    padding-bottom: 0.2rem;

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

      .box2 {
        width: 100%;
        padding: 0.1rem 0;

        .row {
          font-size: 0.15rem;
          padding: 0 0.2rem;

          &:nth-child(1) {
            font-weight: 400;
            color: #ffffff;
          }

          &:nth-child(2) {
            padding: 0;
            height: auto;
          }
        }

        .buy_box {
          width: 100%;
          height: 0.5rem;
          padding: 0.2rem 0 0.1rem;

          .left {
            div {
              font-size: 0.12rem;
            }
          }

          .right {

            padding: 0 0 0 0.6rem;

            .el-button {
              width: 1.2rem;
              height: 0.49rem;
              line-height: 0.35rem;
              font-size: 0.12rem;

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

      .content {
        width: 100%;
        padding: 0.1rem 0.2rem;
        font-size: 0.12rem;
      }
    }
  }
}
</style>
