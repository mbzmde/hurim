import 

<template>
    <div class="main_area">
        <div class="img_box">
            <img src="../assets/images/main.jpg" alt="메인이미지">
            <div class="txt_box">
                <!-- <p class="date">08 / 24</p>  -->
                <img src="@/assets/wedding-date.svg" alt="결혼일" />
                <p class="title">승찬 · 지원 결혼합니다</p>
                <p class="location">주안 그랜드하우스 7층 단독홀</p>
            </div>
        </div>
    </div>
    <div class="address_wrap">
        <p class="address_date">2024. 08. 24. 토요일 · 오후 4시</p>
        <p class="address">주안 그랜드 하우스 7층 단독홀</p>
    </div>
</template>

<script>
export default {
    name: 'MainComponent',
    setup () {
    }
}
</script>

<style scoped>
    .main_area{position:relative;width:100%;box-sizing:border-box;}
    .main_area .img_box{overflow:hidden;position:relative;display:flex;-webkit-box-align:center;align-items:center;padding-top:158%;width:100%;}
    .main_area .img_box img{position:absolute;top:0;left:0;right:0;bottom:0;max-height:100%;max-width:100%;min-height:100%;min-width:100%;width:0;height:0;margin:auto;object-fit:cover;}
    .main_area .txt_box{position:absolute;bottom:40px;left:40px;color:#fff;}
    .main_area .txt_box .date{font-size:32px;font-weight:700;}
    .main_area .txt_box .title{margin-top:24px;font-size:20px;font-weight:500;}
    .main_area .txt_box .location{margin-top:16px;font-size:20px;}
    .address_wrap{margin:48px 55px auto;text-align:center;}
    .address_wrap .address_date{font-size:20px;color:#000;}
    .address_wrap .address{margin-top:15px;font-size:24px;font-weight:500;line-height:24px;}
</style>