<template>
  <section class="photo-section">
    <div class="wedding-date">
      <h2 class="wedding-date__title">2024. 08. 24. 토요일 · 오후 12시 30분</h2>
      <p class="wedding-date__place">주안 그랜드하우스 7층 단독홀</p>
    </div>
    <img src="@/assets/line.svg" alt="line" class="photo-section__line">
    <p class="wedding-title">
      그 어떤 순간에도 하나님 안에서<br/>
      <span class="wedding-title__highlight">행복하게 잘 살겠습니다.</span>
    </p>
    <carousel
      :items-to-show="1"
      :items-to-scroll="1"
      wrap-around
      @slideChanged="handleSlideChange"
      ref="carousel"
    >
      <slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.url" :alt="slide.alt" class="photo-section__slide-img">
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
    <div class="photo-section__thumbnails">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="['photo-section__thumbnail', { 'photo-section__thumbnail--active': index === currentSlide }]"
        @click="goToSlide(index)"
      >
        <img :src="slide.url" :alt="slide.alt" class="photo-section__thumbnail-img">
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  name: 'PhotoSection',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slides: [],
      currentSlide: 0,
    };
  },
  async created() {
    this.slides = await this.loadSlides();
  },
  methods: {
    async loadSlides() {
      const imagesContext = import.meta.glob('@/assets/images/photo-slide/*.jpg');
      const keys = Object.keys(imagesContext);
      return Promise.all(keys.map(async (key, index) => {
        const module = await imagesContext[key]();
        return {
          url: module.default,
          alt: `slide ${index + 1}`,
        };
      }));
    },
    handleSlideChange(slide) {
      this.currentSlide = slide;
    },
    goToSlide(index) {
      this.$refs.carousel.updateCurrentPage(index);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/components/scss/PhotoSection.scss";
</style>
