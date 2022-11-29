<template>
  <div class="progress_bar">
    <div class="process-background">
      <div class="process-color" :style="{width: processWdith}">
        <span>{{ done + '/' + total }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Process",
  props: {
    total: {
      type: [Number],
      default: 0
    },
    done: {
      type: [Number],
      default: 0
    }
  },
  data() {
    return {
     item: {
       progress: '0/800'
     }
    };
  },
  computed: {
    processWdith() {
      if (!this.done && !this.total) {
        return '0%'
      }
      return (this.done / this.total) * 100 + '%'
    }
  }
};
</script>

<style lang="scss" scoped>
.progress_bar {
  margin: 100px auto;
  // width: 2.5rem;
  height: 0.05rem;
  .process-background {
    position: relative;
    height: 100%;
    background: white;
    border-radius: 0.05rem;
    .process-color {
      // width: 80%;\
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
</style>
