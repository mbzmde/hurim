<template>
    <section class="address_area">
        <div class="txt_address">
            <p>인천 미추홀구 주안로 103-18 <br> <span>주안 그랜드 하우스</span></p>
            <div class="btn_wrap">
                <button type="button" class="btn_address_copy" @click="copyAddress">주소 복사하기</button>
            </div>
        </div>
        <ul class="load_list">
            <li v-for="(item, loadList) in item" :key="loadList">
                <a href="#">
                    <div class="img_box">
                        <img :src="item.imgSrc" alt="길찾기아이콘">
                    </div>
                    <p class="get_directions">{{ item.directionText }}</p>
                    <span class="ico_arrow"><i class="blind">바로가기 화살표</i></span>
                </a>
            </li>
        </ul>
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
            {imgSrc: '@/assets/images/ico_tmap.jpg', directionText: 'T맵으로 길 찾기'},
            {imgSrc: '', directionText: '네이버 지도'},
            {imgSrc: '', directionText: '카카오 지도'},
        ])

        return {address, copyAddress,item}
    }
}
</script>

<style scoped>
    .address_area{padding-top:24px;}
    .txt_address p{font-size:20px;line-height:32px;color:#393631;text-align:center;}
    .txt_address p span{font-weight:700;}
    .txt_address .btn_wrap{display:flex;align-items:center;justify-content:center;padding-top:24px;}
    .txt_address .btn_address_copy{padding:8px 20px;font-size:16px;line-height:32px;border:0;border-radius:16px;background:tan;}
</style>