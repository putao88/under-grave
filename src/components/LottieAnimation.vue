<template>
  <div ref="blindbox"></div>
</template>

<script>
import lottie from "lottie-web";
import dataJson from "@/assets/local/lottiejson/data.json";
export default {
  name: "LottieAnimation",
  data() {
    return {
      // animation: null,
    };
  },
  mounted() {
    const animationData = JSON.parse(JSON.stringify(dataJson));
    animationData.assets.forEach((element) => {
      delete element.u;
      element.p = this.$urlBlindBoxs + element.p;
    });
    // if (this.animation) this.animation.destroy();
    lottie.loadAnimation({
      container: this.$refs.blindbox,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  },
};
</script>
