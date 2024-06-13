<template>
    <section class="address_area">
        <div class="txt_address">
            <p>인천 미추홀구 주안로 103-18 <br> <span>주안 그랜드 하우스</span></p>
            <div class="btn_wrap">
                <button type="button" class="btn_address_copy" @click="copyAddress">주소 복사하기</button>
            </div>
        </div>
        <div class="load_list_wrap">
            <div class="directions_box" v-for="(item, loadList) in item" :key="loadList">
                <a href="#">
                    <div class="img_box">
                        <img :src="item.imgSrc" alt="길찾기아이콘">
                    </div>
                    <p class="get_directions">{{ item.directionText }}</p>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue';

export default {
    setup () {
        const address = ref('인천 미추홀구 주안로 103-18\n주안 그랜드 하우스');

        const copyAddress = () => {
            navigator.clipboard.writeText(address.value).then(()=> {
                alert('주소가 복사되었습니다.')
            }).catch(err => {
                console.error('주소 복사에 실패했습니다.', err)
            })
        }
        
        const item = ref([
            {imgSrc: '../assets/images/ico_tmap.jpg', directionText: 'T맵으로 길 찾기'},
            {imgSrc: '', directionText: '네이버 지도'},
            {imgSrc: '', directionText: '카카오 지도'},
        ])

        return {address, copyAddress, item}
    }
}
</script>

<style scoped>
    .address_area{width:100%;padding:24px 48px 0;}
    .txt_address p{font-size:20px;line-height:32px;color:#393631;text-align:center;}
    .txt_address p span{font-weight:700;}
    .txt_address .btn_wrap{display:flex;align-items:center;justify-content:center;padding-top:24px;}
    .txt_address .btn_address_copy{padding:8px 20px;font-size:16px;line-height:32px;border:0;border-radius:16px;background:tan;}
    .load_list_wrap{display:flex;flex-direction:column;gap:16px;margin-top:32px;}
    .load_list_wrap .directions_box{position:relative;flex:1;height:160px;border-radius:24px;background-color:#fff;}
    .load_list_wrap .directions_box a{display:block;padding:116px 20px 20px;text-decoration:none;}
    .load_list_wrap .directions_box .img_box{position:absolute;top:20px;left:20px;width:56px;height:56px;}
    .load_list_wrap .directions_box .img_box img{background:gray;border-radius:16px;}
    .load_list_wrap .directions_box .get_directions{position:relative;font-size:20px;line-height:20px;color:#393631;}
    .load_list_wrap .directions_box .get_directions::after{content:'';position:absolute;bottom:0;right:0;width:24px;height:24px;background:url(../assets/images/ico_arrow.jpg) no-repeat 50% 50%;background-size:contain;}
</style>