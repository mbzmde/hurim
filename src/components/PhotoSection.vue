<template>
  <section class="photo-section">
    <div class="wedding-date">
      <h2 class="wedding-date__title">2024. 08. 24. 토요일 · 오후 4시</h2>
      <p class="wedding-date__place">주안 그랜드하우스 7층 단독홀</p>
    </div>
    <img src="@/assets/line.svg" alt="line" class="photo-section__line">
    <p class="wedding-title">
      그 어떤 순간에도 하나님 안에서<br/>
      <span class="wedding-title__highlight">행복하게 잘 살겠습니다.</span>
    </p>
    
    <div class="image-slider">
      <div class="main-image" v-if="slides.length">
        <img :src="slides[currentIndex].url" :alt="slides[currentIndex].alt" class="photo-section__slide-img">
        <button class="nav-button prev" @click="prevImage">&lt;</button>
        <button class="nav-button next" @click="nextImage">&gt;</button>
      </div>
      <div class="photo-section__thumbnails">
        <div
          v-for="(slide, index) in slides" 
          :key="index"
          :class="['photo-section__thumbnail', { 'photo-section__thumbnail--active': index === currentIndex }]"
          @click="setCurrentImage(index)"
        >
          <img :src="slide.url" :alt="slide.alt" class="photo-section__thumbnail-img">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const slides = ref([])
    const currentIndex = ref(0)

    const loadSlides = async () => {
      const imagesContext = import.meta.glob('@/assets/images/photo-slide/*.{jpg,png,JPG}')
      const keys = Object.keys(imagesContext)
      return Promise.all(keys.map(async (key, index) => {
        const module = await imagesContext[key]()
        return {
          url: module.default,
          alt: `slide ${index + 1}`,
        }
      }))
    }

    onMounted(async () => {
      slides.value = await loadSlides()
    })

    const setCurrentImage = (index) => {
      currentIndex.value = index
    }

    const nextImage = () => {
      currentIndex.value = (currentIndex.value + 1) % slides.value.length
    }

    const prevImage = () => {
      currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length
    }

    return {
      slides,
      currentIndex,
      setCurrentImage,
      nextImage,
      prevImage
    }
  }
}
</script>

<style scoped>
.photo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
}

.wedding-date {
  text-align: center;
}

.wedding-date__title {
  font-size: 18px;
  font-weight: 500;
  color: #212121;
}

.wedding-date__place {
  font-size: 22px;
  font-weight: 700;
  color: #212121;
}

.wedding-title {
  font-size: 22px;
  font-weight: 500;
  color: #BC7F40;
  text-align: center;
  margin-bottom: 48px;
}

.wedding-title__highlight {
  font-weight: 700;
}

.photo-section__line {
  margin: 24px 0;
}

.image-slider {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
}

.main-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  /* min-height: 647px;
  max-height: 647px; */
  background: #fff;
}

.photo-section__slide-img {
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: cover;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.prev { left: 10px; }
.next { right: 10px; }

.photo-section__thumbnails {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10px;
}

.photo-section__thumbnail {
  cursor: pointer;
  margin: 0 5px;
  border: 2px solid transparent;
}

.photo-section__thumbnail--active {
  border-color: #000;
  height: 54px;
}

.photo-section__thumbnail-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
</style>