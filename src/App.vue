<script setup>
import { ref, onMounted } from 'vue';
import SplashScreen from './components/SplashScreen.vue';
import Communication from './components/Communication.vue';
import Account from './components/Account.vue';
import HeroSection from '@/components/HeroSection.vue';
import PhotoSection from '@/components/PhotoSection.vue';
import StorySection from '@/components/StorySection.vue';
import CalendarSection from '@/components/CalendarSection.vue';
import PlaceSection from '@/components/PlaceSection.vue';
import DdaySection from '@/components/DdaySection.vue';
import TypingText from '@/components/TypingText.vue';
import CongratsSection from '@/components/CongratsSection.vue';
import audioFile from '@/assets/audio/audio.mp3'
import FadeInSection from './components/FadeInSection.vue';

const showSplash = ref(true);

const weddingText = "Бидний хуриманд хүрэлцэн ирэхийг урьж байна.";

onMounted(() => {
  setTimeout(() => {
    showSplash.value = false;
  }, 5000);
});

// 배경음악 재생
const audio = document.querySelector('audio');
if (audio) {
  audio.play();
}
</script>

<template>
  <!-- 배경음악 오디오 태그 추가 -->
  <audio ref="audio" loop>
      <source :src="audioFile" type="audio/mp3" />
  </audio>

  <!-- 스플래시 화면을 조건부로 렌더링 -->
  <SplashScreen v-if="showSplash" />

  <div :class="{ 'max-height': showSplash }">
    <div :class="{ 'content-hidden': !showSplash, 'content': showSplash }">
      <TypingText :text="weddingText" :typingSpeed="100" />
    </div>
    <div class="inner" :class="{ 'content-visible': !showSplash }">
      <HeroSection/>
      <FadeInSection><PhotoSection /></FadeInSection>
      <FadeInSection><StorySection /></FadeInSection>
      <FadeInSection><CalendarSection /></FadeInSection>
      <FadeInSection><DdaySection /></FadeInSection>
      <FadeInSection><PlaceSection /></FadeInSection>
      <FadeInSection><Communication /></FadeInSection>
      <FadeInSection><Account /></FadeInSection>
      <FadeInSection><CongratsSection /></FadeInSection>
    </div>
  </div>
</template>

<style scoped>
.inner {
  display: flex;
  max-width: 480px;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.max-height {
  max-height: 100vh;
  overflow: hidden;
}

.content-visible {
  opacity: 0.99;
}

.content-hidden {
  transition: opacity 0.5s ease;
  opacity: 0;
}
.content {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}
</style>