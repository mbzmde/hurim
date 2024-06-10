<template>
    <div>
        <div class="img_box">
            <img :src="imgSrc" alt="메인이미지">
        </div>
        <div class="txt_box">
            <p class="date">{{ date }}</p> 
            <p class="tit"> {{ title }}</p>
            <p class="location">{{ location }}</p>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup () {
        const imgSrc = ref('@/assets/images/main.jpg');
        const date = ref('08 / 24');
        const title = ref('승찬 · 지원 결혼합니다');
        const location = ref('주안 그랜드하우스');

        return {imgSrc,date,title,location}
    }
}
</script>

<style scoped>
    .img_box img{
        display:block;
        max-width:100%;
        height:auto;
    }
</style>