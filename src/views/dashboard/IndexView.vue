<template>
  <div class="page">
    <div class="box">
      <div class="leftbox">
        <div>
          <div class="avatar">
            <img src="~@/assets/cdn/images/09.png" alt="" />
          </div>
          <div class="lis">
            <div><i><img src="~@/assets/cdn/images/card.svg" alt="" /></i>{{ $t("tavern.text2") }}</div>
            <div>{{ }}</div>
          </div>
          <div class="lis">
            <div><i class="iconfont pcCustomermanagement-fill"></i>{{ $t("tavern.text41") }}</div>
            <div>{{ }}</div>
          </div>
          <div class="lis">
            <div><i class="iconfont pczijin"></i>{{ $t("tavern.text40") }}</div>
            <div>{{ }} BNB</div>
          </div>
          <div class="btn">
            <el-button :disabled="false"> {{ $t("tavern.text3") }} </el-button>
          </div>
        </div>
      </div>
      <div class="rightbox">
        <div class="title">
          <div>{{ $t("tavern.text1") }}</div>
        </div>
        <ul class="list">
          <li>
            <ul>
              <li>
                <div>
                  {{ $t("class.text8") }} <span>{{}}</span>
                  {{ $t("class.text6") }}:<span>{{}}</span>
                  {{ $t("class.text7") }}:<span>{{}}</span>
                  {{ $t("class.text9") }}:<span>{{}}</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "TAVERN",
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
            width: 0.26rem;
          }
        }
      }
    }

    .btn {
      width: fit-content;
      margin: 0.2rem auto;

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

  >.list {
    width: 100%;
    height: 6rem;
    padding: 0 0.2rem;
    overflow-y: auto;

    >li {
      width: 100%;
      background: rgba(24, 24, 28, 0.8);
      border-radius: 0.06rem;
      border: 1px solid #4e4e52;
      margin: 0.2rem 0;
      padding: 0 0.2rem 0 0.4rem;

      ul {
        li {
          cursor: pointer;
          margin: 0.2rem 0;

          &:nth-child(1) {
            font-size: 0.15rem;
            font-weight: 300;
            display: flex;
            align-items: center;
            justify-content: space-between;

            span {
              display: inline-block;
              background: #000000;
              border-radius: 0.1rem;
              margin: 0 0.2rem;
              padding: 0 0.2rem;
            }

            .status {
              font-size: 0.12rem;
              font-weight: 600;
              color: #00b2fe;
            }
          }

          &:nth-child(2) {
            font-size: 0.2rem;
            font-weight: 600;
            position: relative;

            img {
              width: 0.12rem;
              height: auto;
              position: absolute;
              left: -0.25rem;
              top: 0.08rem;
            }
          }

          &:nth-child(3) {
            font-size: 0.15rem;
            font-weight: 300;
          }

          &:nth-child(4) {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 0.12rem;
            font-weight: 600;
            color: #00b2fe;

            span {
              margin-right: 0.1rem;
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

      .linklist {
        width: fit-content;
        margin: 0.1rem auto;

        a {
          width: 0.25rem;
          height: 0.15rem;
          margin-right: 0.02rem;
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

    >.list {
      width: 100%;
      height: 4rem;
      padding: 0 0.1rem;

      >li {
        margin: 0.1rem 0;
        padding: 0 0.1rem 0 0.2rem;

        ul {
          li {
            margin: 0.1rem 0;

            &:nth-child(1) {
              font-size: 0.12rem;
              font-weight: 600;

              span {
                margin: 0 0.05rem;
                padding: 0 0.1rem;
              }

              .status {
                font-size: 0.12rem;
                font-weight: 600;
                color: #00b2fe;
              }
            }

            &:nth-child(2) {
              font-size: 0.15rem;
              font-weight: 600;

              img {
                width: 0.08rem;
                left: -0.15rem;
                top: 0.05rem;
              }
            }

            &:nth-child(3) {
              font-size: 0.12rem;
              font-weight: 300;
            }

            &:nth-child(4) {
              font-size: 0.12rem;
              font-weight: 600;

              span {
                margin-right: 0.05rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
