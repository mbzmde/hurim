<template>
  <section class="hero">
    <div class="hero__content">
        <img class="hero__date-icon" src="@/assets/wedding-date.svg" alt="결혼일" />
        <div class="hero__text-container">
            <p class="hero__text hero__text--bold">승찬 · 지원 결혼합니다</p>
            <p class="hero__text">주안 그랜드하우스 7층 단독홀</p>
        </div>
    </div>
    <img class="hero__image" src="@/assets/images/wedding_thumbnail.jpg" alt="메인 웨딩 사진" />
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>

<style lang="scss" scoped>
    @import "@/components/scss/HeroSection.scss";
</style>
