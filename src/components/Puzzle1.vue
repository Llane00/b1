<template>
  <div class="page">
    <div v-if="!isRight" class="container">
      <div>
        <span>第一回合</span>
        <span class="hide">千里莺啼绿映红</span>
      </div>
      <div>
        <span>请在下方输入</span>
        <span class="hide">千里莺啼绿映红</span>
      </div>
      <div>
        <span>正确的</span>
        <span class="hide">千里莺啼绿映红</span>
      </div>
      <div>
        <span>“下一句”</span>
        <span class="hide">千里莺啼绿映红</span>
      </div>
    </div>
    <div v-if="isRight" class="container">
      <div>
        <span>回答正确</span>
        <span class="hide">回答正确</span>
      </div>
      <div>
        <span>回答正确</span>
        <span class="hide">回答正确</span>
      </div>
      <div>
        <span>回答正确</span>
        <span class="hide">回答正确</span>
      </div>
    </div>
    <input v-if="!isRight" class="answer-input" type="text" v-model="answer" placeholder="你的答案" v-on:input="handleChange">
    <div v-if="isRight" class="tip">看样子是个聪明孩子</div>
    <div v-if="isRight" class="tip-2" v-on:click="jumpNext">进入下一关!</div>
    <audio ref="voiceRef" :src="voiceSrc" hidden></audio>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import voiceSrc from "../assets/next.mp3";
const voiceRef = ref(null)

defineProps({
})

const answer = ''
const isRight = ref(false)
const handleChange = function(e) {
  if (e.target.value === '水村山郭酒旗风') {
    console.log('right')
    isRight.value = true
    voiceRef.value.play()
  }
}

const router = useRouter()
const route = useRoute()
const jumpNext = () => {
  router.push({
    name: 'puzzle2',
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
  width: 200px;
  font-size: 20px;
}

.tip {
  margin-top: 40px;
  font-size: 24px;
  color: #eee;
  text-align: center;
}

.tip-2 {
  margin-top: 10px;
  font-size: 24px;
  color: #fff;
  text-align: center;
  cursor: pointer;
}

.page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  background-color: #ff9100;
  perspective: 2500px;
}

h1, h2 {
  padding: 0;
  margin: 0;
  position: relative;
  color: #fff;
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

.container {
  color: #fff;
}

.container > div > span.hide {
  color: #ff9100 !important;
}

.container > div {
  display: block;
  height: 6rem;
  font-size: 6rem;
  overflow: hidden;
}

.container > div > span {
  display: block;
  height: 6rem;
  font-weight: bold;
  letter-spacing: -.2rem;
  text-align: center;
  transition: .3s transform ease-in-out;
  line-height: 6.3rem;
  padding: 0 2rem;
}

.container:hover > div > span {
  transform: translateY(-100%);
}

.container > div:nth-child(1) {
  background-color: rgba(0, 0, 0, .02);
  transform: rotatex(30deg);
}

.container > div:nth-child(2) {
  background-color: rgba(0, 0, 0, .08);
  transform: translatey(-.5rem) rotatex(-30deg);
}

.container > div:nth-child(3) {
  background-color: rgba(0, 0, 0, .02);
  transform: translatey(-1rem) rotatex(30deg);
}

.container > div:nth-child(4) {
  background-color: rgba(0, 0, 0, .08);
  transform: translatey(-1.5rem) rotatex(-30deg);
}
</style>
