<template>
  <div class="page">
    <h1>欢迎小鱼</h1>
    <h2>welcome!</h2>
    <button class="start-button" v-on:click="jumpNext">开始冒险</button>
    <audio ref="voiceRef" :src="voiceSrc" autoplay hidden controls></audio>
  </div>
</template>

<script setup>
  import {ref} from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import voiceSrc from "../assets/welcome.mp3";
  // const voiceRef = ref(null)

  const router = useRouter()
  const route = useRoute()

  defineProps({
  })

  const jumpNext = () => {
    // voiceRef.value.play()
    router.push({
      name: 'puzzle1',
      query: {
        ...route.query,
      },
    })
  }
</script>

<style scoped lang="less">
:root {
  font-size: 32px;
}

.start-button {
  margin-top: 50px;
  width: 200px;
  height: 80px;
  font-size: 30px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    color: #fff;
    background: #009CDE;
    border: 1px solid #009CDE;
  }
}

.page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  background-color: #FFCD00;
  perspective: 2500px;

  h1, h2 {
    padding: 0;
    margin: 0;
    position: relative;
    color: #fff;
  }

  h1 {
    font-size: 10rem;
    animation: 5s rotate ease-in-out infinite;
  }

  @keyframes rotate {
    0%, 100% {
      transform: rotate3d(0, 1, 0, -20deg);
    }
    50% {
      transform: rotate3d(0, 1, 0, 20deg);
    }
  }

  h2 {
    font-size: 5rem;
    letter-spacing: -4px;
    animation: 2.5s thank-you ease-in-out infinite;
  }

  @keyframes thank-you {
    0%, 100% {
      transform: rotate3d(1, 0, 0, -10deg);
    }
    50% {
      transform: rotate3d(1, 0, 0, 10deg);
    }
  }

  h1::before,
  h1::after {
    content: '欢迎小鱼';
  }

  h2::before,
  h2::after {
    content: 'welcome!';
  }

  h1::before,
  h1::after,
  h2::before,
  h2::after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  /* Fix Chrome Issue */
  h1::after,
  h2::after {
    z-index: -2;
  }
  /*  */

  h1::before {
    color: #009CDE;
    animation: 5s h1-before ease-in-out infinite;
  }

  @keyframes h1-before {
    0%, 100% {
      transform: translate3d(15px, 5px, -10px);
    }
    50% {
      transform: translate3d(-15px, 5px, -10px);
    }
  }

  h1::after {
    color: #003C71;
    animation: 5s h1-after ease-in-out infinite;
  }

  @keyframes h1-after {
    0%, 100% {
      transform: translate3d(30px, 10px, -20px);
    }
    50% {
      transform: translate3d(-30px, 10px, -20px);
    }
  }

  h2::before {
    color: #009CDE;
    animation: 2.5s h2-before ease-in-out infinite;
  }

  @keyframes h2-before {
    0%, 100% {
      transform: translate3d(0px, 6px, -10px);
    }
    50% {
      transform: translate3d(0px, -3px, -10px);
    }
  }

  h2::after {
    color: #003C71;
    animation: 2.5s h2-after ease-in-out infinite;
  }

  @keyframes h2-after {
    0%, 100% {
      transform: translate3d(0px, 12px, -20px);
    }
    50% {
      transform: translate3d(0px, -6px, -20px);
    }
  }
}

</style>
