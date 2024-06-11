<script setup>
import MainComponent from './components/Main.vue';
import ImgArea from './components/ImgArea.vue';
import StoryArea from './components/StoryArea.vue';
</script>

<template>
  <div class="inner">
    <MainComponent />
    <ImgArea />
    <StoryArea />
  </div>
</template>

<style scoped>
  .inner{display:flex;max-width:440px;margin:0 auto;align-items:center;flex-direction:column;}
</style>
