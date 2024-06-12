<script setup>
import MainComponent from './components/Main.vue';
import ImgArea from './components/ImgArea.vue';
import StoryArea from './components/StoryArea.vue';
import Calendar from './components/Calendar.vue';
import Addess from './components/Addess.vue';
</script>

<template>
  <div class="inner">
    <MainComponent />
    <ImgArea />
    <StoryArea />
    <Calendar />
    <Addess />
  </div>
</template>

<style scoped>
  .inner{display:flex;max-width:440px;margin:0 auto;align-items:center;flex-direction:column;}
</style>
