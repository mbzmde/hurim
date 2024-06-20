<template>
    <carousel 
        :items-to-show="1" 
        :items-to-scroll="1" 
        wrap-around 
        @slideChanged="handleSlideChange"
        ref="carousel"
    >
        <slide v-for="(slide, index) in slides" :key="index">
            <img :src="slide" alt="slide image" class="slide_img">
        </slide>
        <template #addons>
            <navigation />
            <pagination />
        </template>
    </carousel>

    <div class="thumbnails">
        <div 
        v-for="(slide, index) in slides" 
        :key="index"
        :class="['thumbnail', { active: index === currentSlide }]"
        @click="goToSlide(index)"
        >
          <img :src="slide" alt="slide" class="thumbnail_img">
        </div>
    </div>
  </template>
  
  <script>
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
  import home1 from "@/assets/images/main.jpg";
  import home2 from "@/assets/images/img2.jpg";
  import home3 from "@/assets/images/img3.jpg";
  import home4 from "@/assets/images/img4.jpg";
  import home5 from "@/assets/images/img5.jpg";
  
  export default {
    name: 'App',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
    data(){
        return{
            slides: [home1, home2, home3, home4, home5],
            currentSlide: 0,
        };
    },
    methods: {
        handleSlideChange(slide) {
            this.currentSlide = slide;
        },
        navigateTo(index) {
            this.$refs.carousel.navigateTo(index);
        },
    },
  }
  </script>

  <style>
    .carousel__viewport{margin-top:32px;}
    .carousel__slide {display: flex;justify-content: center;align-items: center;}
    .slide_img {width: 100%;height: auto;max-height: 100%;object-fit: cover;}
    .thumbnails {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.thumbnail {
  cursor: pointer;
  margin: 0 5px;
  border: 2px solid transparent;
}

.thumbnail.active {
  border-color: #000;
}

.thumbnail_img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
  </style>
  