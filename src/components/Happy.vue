<template>
  <div class="page" v-on:click="playVoice">
    <audio ref="voiceRef" :src="voiceSrc" autoplay hidden controls></audio>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import voiceSrc from "../assets/birthday.mp3";

defineProps({
})

const playVoice = () => {
  voiceRef.value.play()
}

!(function() {
  document.title = '生日快乐，小鱼'
  var cdom = document.createElement("canvas");
  cdom.id = "myCanvas";cdom.style.position="fixed";
  cdom.style.left = "0";cdom.style.top = "0";
  cdom.style.zIndex=-1;
  document.body.appendChild(cdom);
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  function resizeCanvas() {canvas.width = window.innerWidth;canvas.height = window.innerHeight;}
  window.addEventListener('resize', resizeCanvas, false);
  resizeCanvas();
  clearCanvas();
  function clearCanvas(){
    context.fillStyle = '#000000';
    context.fillRect(0,0,canvas.width, canvas.height);
  }
  function mouseDownHandler(e) {var x = e.clientX;var y = e.clientY;fire(x,y);}var rid;
  function fire(x,y){createFireworks(x,y);
  function tick() {context.globalCompositeOperation = 'destination-out';
  context.fillStyle = 'rgba(0,0,0,'+10/100+')';
  context.fillRect(0,0,canvas.width,canvas.height);    
  context.globalCompositeOperation = 'lighter';drawFireworks();rid=requestAnimationFrame(tick);}
  cancelAnimationFrame(rid);tick();}var particles=[];
  function createFireworks(sx,sy){particles=[];var hue = Math.floor(Math.random()*51)+150;
  var hueVariance = 30;var count = 200;for(var i = 0 ;i<count;i++){
    var p = {};
  var angle = Math.floor(Math.random()*360);
  p.radians = angle * Math.PI / 180;p.x = sx;p.y = sy;p.speed = (Math.random()*5)+.4;p.radius = p.speed;
  p.size = Math.floor(Math.random()*3)+1;
  p.hue = Math.floor(Math.random()*((hue+hueVariance)-(hue-hueVariance)))+(hue-hueVariance);
  p.brightness = Math.floor(Math.random()*31)+40;
  p.alpha = (Math.floor(Math.random()*61)+40)/100;particles.push(p);}}
  function drawFireworks() {clearCanvas();for(var i = 0 ;i<particles.length;i++){var p = particles[i];var vx = Math.cos(p.radians) * p.radius;var vy = Math.sin(p.radians) * p.radius + 0.4;p.x += vx;p.y += vy;p.radius *= 1 - p.speed/100;p.alpha -= 0.005;
  context.beginPath();context.arc(p.x, p.y, p.size, 0, Math.PI*2, false);context.closePath();
  context.fillStyle = 'hsla('+p.hue+80+', 100%, '+p.brightness+'%, '+p.alpha+')';context.fill();}}
  document.addEventListener('mousedown', mouseDownHandler, false);
  fire(700,200)
  // fire(500,200)
  // fire(180,700)
  // fire(140,200)
  function play() {
    var xmin = 400;
    var xmax = 1000;
    var ymin = 100;
    var ymax = 500;
    var x = Math.floor(Math.random() * (xmax - xmin + 1)) + xmin;
    var y = Math.floor(Math.random() * (ymax - ymin + 1)) + ymin;
    console.log('firework', x, y);
    fire(x, y)
  }
  setInterval(() => {
    play()
  }, 1800)

  }
  )();

</script>

<style scoped lang="less">
:root {
  font-size: 32px;
}

.page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  // background-color: #FFCD00;
  perspective: 2500px;
}

h1, h2 {
  padding: 0;
  margin: 0;
  position: relative;
  color: #fff;
}

</style>
