<template>
  <div class="page">
   <h2>
      你更希望别人<br>
      称自己是
      <div class="mask">
        <span data-show>充满活力的女孩。</span>
        <span>和蔼可亲的教师。</span>
        <span>技术高超的面点师。</span>
        <span>可爱的小吃货。</span>
      </div>
    </h2>
    <input v-if="!isRight" class="answer-input" type="text" v-model="answer" placeholder="你的选择" v-on:input="handleChange">
    <div v-if="isRight" class="tip">好的，你的确是一位{{nickName}}哦！</div>
    <div v-if="isRight" class="tip-2" v-on:click="jumpNext">进入下一关!</div>
    <audio ref="voiceRef" :src="voiceSrc" hidden></audio>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import voiceSrc from "../assets/next2.mp3";
const voiceRef = ref(null)

defineProps({
})

const answer = ''
const nickName = ref('')
const isRight = ref(false)
const handleChange = function(e) {
  nickName.value = getName(e.target.value)
  if (nickName.value !== -1) {
    console.log('right')
    isRight.value = true
    voiceRef.value.play()
  }
}

function getName(value) {
  switch(value) {
    case "充满活力的女孩":
      return "活力女孩";
    case "和蔼可亲的教师":
      return "教师新星";
    case "技术高超的面点师":
      return "面点大师";
    case "可爱的小吃货":
      return "可爱小吃货";
    default:
      return -1;
  }
}

const router = useRouter()
const route = useRoute()
const jumpNext = () => {
  router.push({
    name: 'puzzle3',
    query: {
      ...route.query,
    },
  })
}

setInterval(function () {
  const show = document.querySelector('span[data-show]')
  const next = show.nextElementSibling || document.querySelector('span:first-child')
  const up = document.querySelector('span[data-up]')
  
  if (up) {
    up.removeAttribute('data-up')
  }
  
  show.removeAttribute('data-show')
  show.setAttribute('data-up', '')
  
  next.setAttribute('data-show', '')
}, 2000)
</script>

<style scoped lang="less">
:root {
  font-size: 32px;
}

.answer-input {
  margin-top: 5px;
  padding: 20px;
  width: 200px;
  font-size: 20px;
}

.tip {
  margin-top: 10px;
  font-size: 24px;
  color: #333;
  text-align: center;
}

.tip-2 {
  margin-top: 40px;
  font-size: 24px;
  color: #333;
  text-align: center;
  cursor: pointer;
}

.page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  background-color: #fff;
  perspective: 2500px;
}

h2 {
  width: 980px;
  font-size: 100px;
  font-family: Helvetica;
  line-height: 1.06;
  letter-spacing: -0.02em;
  color: #1d1d1f;
}

.mask {
  height: 100px;
  position: relative;
  overflow: hidden;
  margin-top: var(--offset);
}

.mask span {
  display: block;
  box-sizing: border-box;
  position: absolute;
  top: 100px;
  padding-bottom: var(--offset);
  
  background-size: 100% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: no-repeat;
}

.mask span[data-show] {
  transform: translateY(-100%);
  transition: .5s transform ease-in-out;
}

.mask span[data-up] {
  transform: translateY(-200%);
  transition: .5s transform ease-in-out;
}

.mask span:nth-child(1) {
  background-image: linear-gradient(45deg, #0ecffe 50%, #07a6f1);
}

.mask span:nth-child(2) {
  background-image: linear-gradient(45deg, #18e198 50%, #0ec15d);
}

.mask span:nth-child(3) {
  background-image: linear-gradient(45deg, #8a7cfb 50%, #633e9c);
}

.mask span:nth-child(4) {
  background-image: linear-gradient(45deg, #fa7671 50%, #f45f7f);
}
</style>
