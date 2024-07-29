<template>
  <section class="hero">
    <div class="hero__content">
      <!-- <div class="">
            <p class="hero__text" style="font-size: 39px;">09</p>
            <p class="hero__text" style="font-size: 20px;">/</p>
            <p class="hero__text" style="font-size: 39px;">09</p>
        </div> -->
        <img class="hero__date-icon" src="@/assets/wedding-date.svg" alt="결혼일" />
        <div class="hero__text-container">
            <p class="hero__text hero__text--bold">Р.Мөнхбат & С.Азжаргал</p>
            <p class="hero__text">Байршил болон цаг</p>
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
