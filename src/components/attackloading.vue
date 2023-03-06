<template>
    <div class="loading">
        <div class="attack"></div>
    </div>
</template>

<script>

export default {
    name: 'attack-loading'
}

</script>

<style lang="scss" scoped>
.loading {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.66);

    .attack {
        position: fixed;
        left: 85vh;
        top: 50vh;
        animation: ghost1 3s steps(7) infinite;
        background: url("~@/assets/cdn/spring/spritesheet4.png") no-repeat;
        transform: translate(0%, 0px);
        width: 2rem;
        height: 3rem;
        z-index: 1000;
    }
}

@keyframes ghost1 {
        0% {
          background-position: 0 0;
        }

        100% {
          background-position: -1846px 0;
        }
      }

@media screen and (max-width: 750px) {
    .loading {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.43);

    .attack {
        position: fixed;
        left: 10vh;
        top: 50vh;
        animation: ghost1 3s steps(7) infinite;
        background: url("~@/assets/cdn/spring/spritesheet4.png") center center no-repeat;
        width: 2.6rem;
        height: 3.3rem;
        z-index: 1000;
    }
}

}



</style>