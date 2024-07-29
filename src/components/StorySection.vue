<template>
  <section class="story-section">
    <img src="@/assets/line.svg" alt="line" class="story-section__line">
    <p class="story-section__title">
      Урьсан бидний ураг төрөл батжиж<br/>
      <span class="story-section__title--highlight">Уригдсан таны ерөөл бат орших болтугай.</span>
    </p>
    <div class="story-section__content-container">
      <img src="@/assets/images/story_background.svg" alt="Background" class="story-section__background">
      <div class="story-section__content">
        <p class="story-section__text">
          Хорвоо дэлхийн уудамд<br/>
          Хос хун шиг амьдрах гэж<br/>
          Хоёр биенийхээ аав ээжийг<br/>
          Хамгаас илүү халамжлах гэж<br/>
        </p>
        <p class="story-section__text">
          Хонгор үрсийнхээ зулайг<br/>
          Хоёул зэрэгцэн үнэрлэх гэж<br/>
          Хорвоог туулах хамтын амьдралаа<br/>
          Хотол түмэндээ гэрчлэн андгайлах гэж
        </p>
        <p class="story-section__text">
          Хурим найрын ёслолын хойморт<br/>
          Хүндэт таныг урин залъя<br/>
          Гэгээн тэнгэрлэг их хайрын минь<br/>
          Гэрч нь болж Та минь залраарай
        </p>
        <div class="story-section__names">
          <p class="story-section__name">Раднаабазар овогтой Мөнхбат</p>
          <p class="story-section__name">Соронзонболд овогтой Азжаргал</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StorySection',
}
</script>

<style scoped>
@import "@/components/scss/StorySection.scss";
</style>
