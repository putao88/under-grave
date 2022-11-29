<template>
  <div class="page">
    <div class="box">
      <!--<div class="row_title">
        <span>{{ $t("expedition.text1") }}</span>
      </div>-->
      <ul class="card_list">
        <li>
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

          <el-button @click="expedition">{{ $t("expedition.text1") }}
          </el-button>

        </li>
        <li>
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
          <el-button @click="expedition">{{ $t("expedition.text1") }}
          </el-button>
        </li>
        <li>
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
          <el-button @click="expedition">{{ $t("expedition.text1") }}
          </el-button>
        </li>
        <li>
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
          <el-button @click="expedition">{{ $t("expedition.text1") }}
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
            <pre>{{ $t("expedition.text5") }}</pre>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>

export default {
  name: "EXPEDITION",
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  padding: 0.8rem 0;
  background: url(~@/assets/cdn/images/landform_1201.png) no-repeat;
  background-size: 100% 100%;
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
  margin: 0 auto;

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

    .angle2 {
      width: 0.1rem;
      height: auto;
      position: absolute;
      right: 0.1rem;
      bottom: 0.1rem;
      opacity: 0;
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
      width: 13%;
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
    padding: 0.5rem 0;
  }

  .box {
    width: 100%;
    height: auto;
  }

  .box_title {
    margin: 0.3rem 0;
  }

  .row_title {
    text-align: center;
    font-size: 0.25rem;
    font-weight: bold;
    color: #ce6519;
    margin-bottom: 0.3rem;
    background-size: 60%;
  }

  .card_list {
    width: 90%;
    height: 6rem;

    li {
      width: 1.6rem;
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

      .content {
        width: 100%;
        padding: 0.1rem 0.2rem;
        font-size: 0.12rem;
      }
    }
  }
}
</style>
