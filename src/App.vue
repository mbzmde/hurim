<script setup>
// import MainComponent from './components/Main.vue';
// import ImgArea from './components/ImgArea.vue';
import Message from './components/Message.vue';
import Communication from './components/Communication.vue';
import Account from './components/Account.vue';
// import Test from './components/test.vue';
import HeroSection from '@/components/HeroSection.vue';
import PhotoSection from '@/components/PhotoSection.vue';
import StorySection from '@/components/StorySection.vue';
import CalendarSection from '@/components/CalendarSection.vue';
import PlaceSection from '@/components/PlaceSection.vue';
import DdaySection from '@/components/DdaySection.vue';
</script>

<template>
    <!-- <full-page ref="fullpage" :options="options" id="fullpage"> -->
  <div class="inner">
      <HeroSection/>
      <PhotoSection />
      <StorySection />
      <CalendarSection />
      <DdaySection />
      <PlaceSection />
      <Message class="section" />
      <Communication class="section" />
      <Account class="section" />
  </div>
    <!-- </full-page> -->
</template>

<style scoped>
  .inner{display:flex;max-width:480px;margin:0 auto;align-items:center;flex-direction:column; justify-content:center; overflow:hidden;}
</style>
