<template>
  <div class="page">
    <div v-if="!isRight" class="container">
      <h1>悄悄写下今年的生日愿望吧！</h1>
      <textarea class="answer-input" type="text" v-model="answer" placeholder="愿望是。。。" />
      <button class="btn" data-animation="jump" v-on:click="handleChange">写完咯</button>
    </div>
    <div v-if="isRight" class="wrapper">
      <label>
        <input type="checkbox">
        <svg viewBox="0 0 532 532">
          <path id="heart" transform="translate(10, 10)" d="M256,96.5l-19.7-20.3C186.1,24.3,104.5,15.9,49.7,62.6c-62.8,53.6-66.1,149.8-9.9,207.9l193.5,199.8 c12.5,12.9,32.8,12.9,45.3,0l193.5-199.8c56.3-58.1,53-154.3-9.8-207.9l0,0C407.5,15.9,326,24.3,275.7,76.2L256,96.5z"/>
        </svg>
        <span></span>
      </label>
    </div>

    <div v-if="isRight" class="tip-wrapper-1">
      <h1>今年我们一起实现愿望吧</h1>
      <h1 style="margin-top: 10px">点击红心给予你力量！</h1>
    </div>
    <div v-if="isRight" class="tip-wrapper-2">
      <div v-if="isRight" class="tip" v-on:click="jumpNext">看看还有什么!</div>
    </div>
    <audio ref="voiceRef" :src="voiceSrc" autoplay hidden controls></audio>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import voiceSrc from "../assets/next3.mp3";
const voiceRef = ref(null)

defineProps({})

const answer = ''
const isRight = ref(false)
const handleChange = function(e) {
    isRight.value = true
}

const router = useRouter()
const route = useRoute()
const jumpNext = () => {
  router.push({
    name: 'happy',
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

.answer-input {
  margin-top: 20px;
  padding: 20px;
  width: 250px;
  height: 300px;
  font-size: 20px;
}

.tip {
  margin-top: 40px;
  font-size: 24px;
  color: #333;
  text-align: center;
  cursor: pointer;
}

.tip-2 {
  margin-top: 10px;
  font-size: 24px;
  color: #333;
  text-align: center;
  cursor: pointer;
}


.btn {
  display: block;
  margin-top: 30px;
  width: 150px;
  height: 60px;
  font-size: 24px;
  background: #eee;
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
  background: #fff;
  perspective: 2500px;
}

h1, h2 {
  padding: 0;
  margin: 0;
  position: relative;
  color: #333;
}

:root {
  font-size: 20px;
  font-family: Helvetica;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  perspective: 30rem;
}

.wrapper {
  display: flex;
  justify-content: center;
}

.tip-wrapper-1 {
  position: fixed;
  top: 80px;
  text-align: center;
}

.tip-wrapper-2 {
  position: fixed;
  bottom: 100px;
  text-align: center;
}

svg {
  width: 200px;
  position: relative;
  z-index: 10;
}

#heart {
  fill: #eee;
  stroke-width: 20px;
  stroke: red;
  stroke-dasharray: 1600;
  stroke-dashoffset: 1600;
  stroke-linecap: round;
}

span, span::after {
  display: block;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  
  box-shadow: 0 -160px 0 red, 0 160px 0 red, -160px 0 0 red, 160px 0 0 red;
}

span::after {
  content: '';
  transform: translate(-50%, -50%) rotate(45deg) scale(0);
}

input[type="checkbox"] {
  display: none;
}

label {
  cursor: pointer;
}

input[type="checkbox"]:checked + svg #heart {
  animation: 1s draw-heart linear forwards;
}

@keyframes draw-heart {
  0% {
    stroke-dashoffset: 1600;
  }
  80% {
    stroke-dashoffset: 0;
    fill: #eee;
  }
  100% {
    fill: red;
    stroke-dashoffset: 0;
  }
}

input[type="checkbox"]:checked ~ span {
  animation: .5s blink ease-in-out forwards .85s;
}

input[type="checkbox"]:checked ~ span::after {
  animation: .5s blink-after ease-in-out forwards .85s;
}

@keyframes blink {
  0% {
    transform: translate(-50%, -50%) scale(0.5);
    opacity: .8;
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
    opacity: .8;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0;
  }
}

@keyframes blink-after {
  0% {
    transform: translate(-50%, -50%) rotate(45deg) scale(0.5);
    opacity: .8;
  }
  50% {
    transform: translate(-50%, -50%) rotate(45deg) scale(1);
    opacity: .8;
  }
  100% {
    transform: translate(-50%, -50%) rotate(45deg) scale(1.1);
    opacity: 0;
  }
}

input[type="checkbox"]:checked + svg {
  animation: 1s pop linear forwards;
}

@keyframes pop {
  0% {
    transform: scale(1);
  }
  70% {
    transform: scale(1);
  }
  80% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>

