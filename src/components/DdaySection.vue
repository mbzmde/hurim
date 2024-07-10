<template>
  <section class="dday-section">
    <img src="@/assets/line.svg" alt="line" class="dday-section__line">
    <div class="dday-section__content">
      <p class="dday-section__text">아름다운 서약까지 남은 시간</p>
      <div class="dday-section__timer">
        <div class="dday-section__time-box">
          <p class="dday-section__time">{{ daysLeft }}</p>
          <p class="dday-section__label">일</p>
        </div>
        <div class="dday-section__time-box">
          <p class="dday-section__time">{{ hoursLeft }}</p>
          <p class="dday-section__label">시간</p>
        </div>
        <div class="dday-section__time-box">
          <p class="dday-section__time">{{ minutesLeft }}</p>
          <p class="dday-section__label">분</p>
        </div>
        <div class="dday-section__time-box">
          <p class="dday-section__time">{{ secondsLeft }}</p>
          <p class="dday-section__label">초</p>
        </div>
      </div>
      <p class="dday-section__message">승찬, 지원의 결혼식이 
      <strong class="dday-section__message--highlight">{{ daysLeft }}</strong>일 남았습니다.</p>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'DdaySection',
  setup() {
    const targetDate = new Date('2024-08-24T16:00:00');
    const daysLeft = ref(0);
    const hoursLeft = ref(0);
    const minutesLeft = ref(0);
    const secondsLeft = ref(0);

    const updateTimer = () => {
      const now = new Date();
      const timeDifference = targetDate - now;

      if (timeDifference > 0) {
        daysLeft.value = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        hoursLeft.value = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutesLeft.value = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        secondsLeft.value = Math.floor((timeDifference % (1000 * 60)) / 1000);
      } else {
        daysLeft.value = 0;
        hoursLeft.value = 0;
        minutesLeft.value = 0;
        secondsLeft.value = 0;
      }
    };

    let timerInterval;

    onMounted(() => {
      updateTimer();
      timerInterval = setInterval(updateTimer, 1000);
    });

    onUnmounted(() => {
      clearInterval(timerInterval);
    });

    return { daysLeft, hoursLeft, minutesLeft, secondsLeft };
  }
}
</script>

<style scoped>
@import "@/components/scss/DdaySection.scss";
</style>
