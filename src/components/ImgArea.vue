<template>
    <section class="img_area">
        <p class="dot">/</p>
        <h2 class="tit">그 어떤 순간에도 하나님 안에서 <br> 행복하게 잘 살겠습니다.</h2>
        <div class="img_wrap">
            <div class="gallery large">
                <a href="#">
                    <div>
                        <img src="" alt="">
                    </div>
                </a>
                <div class="gallery small">
                    <a href="#">
                        <div>
                            <img src="" alt="">
                        </div>
                    </a>
                    <a href="#">
                        <div>
                            <img src="" alt="">
                        </div>
                    </a>
                </div>
            </div>
            <div class="gallery small2">
                <a href="#">
                    <div>
                        <img src="" alt="">
                    </div>
                </a>
                <a href="#">
                    <div>
                        <img src="" alt="">
                    </div>
                </a>
                <a href="#">
                    <div>
                        <img src="" alt="">
                    </div>
                </a>
            </div>
            <div class="gallery large">
                <div class="gallery small">
                    <a href="#">
                        <div>
                            <img src="" alt="">
                        </div>
                    </a>
                    <a href="#">
                        <div>
                            <img src="" alt="">
                        </div>
                    </a>
                </div>
                <a href="#">
                    <div>
                        <img src="" alt="">
                    </div>
                </a>
            </div>
        </div>
        <p class="dot">/</p>
    </section>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
    .img_area{width:100%;padding:0 48px;}
    .img_area .dot{padding-top:24px;text-align:center;}
    .img_area .tit{padding-top:24px;font-size:24px;line-height:36px;color:#BC7F40;text-align:center;}
    .img_area .img_wrap .gallery{display:flex;gap:8px;}
    .img_area .img_wrap .gallery.large{margin-top:8px;}
    .img_area .img_wrap .gallery.large > a{border-radius:16px 0 0 0;}
    .img_area .img_wrap .gallery.small{flex-direction:column;width:100%;}
    .img_area .img_wrap .gallery.small2{margin-top:8px;}
    .img_area .img_wrap .gallery.small2 a > div{padding-top:100%;}
    .img_area .img_wrap .gallery.small2 a{width:33.3%;}
    .img_area .img_wrap .gallery a{position:relative;width:100%;border:1px solid;}
    .img_area .img_wrap .gallery a > div{overflow:hidden;position:relative;display:flex;width:100%;max-width:640px;-webkit-box-align:center;align-items:center;padding-top:58%;}
    .img_area .img_wrap .gallery a > div img{position:absolute;top:0;left:0;right:0;bottom:0;max-height:100%;max-width:100%;min-height:100%;min-width:100%;width:0;height:0;margin:auto;object-fit:cover;}
</style>