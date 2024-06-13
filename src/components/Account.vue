<template>
    <section class="communication_area">
        <p class="dot">/</p>
        <h2 class="title">저희의 첫 출발을 축하해주시는 <br>마음 감사드립니다.</h2>
        <div class="user_list">
            <h3>신랑 측</h3>
            <ul>
                <li>
                    <p class="user_name">신랑 · 노승찬</p>
                    <div class="communication_wrap">
                        <a href="#">
                            <span class="call">계좌</span>
                        </a>
                    </div>
                </li>
                <li>
                    <p class="user_name">아버님 · 노수련</p>
                    <div class="communication_wrap">
                        <a href="#">
                            <span class="call">계좌</span>
                        </a>
                    </div>
                </li>
                <li>
                    <p class="user_name">어머님 · 김유미</p>
                    <div class="communication_wrap">
                        <a href="#">
                            <span class="call">계좌</span>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="user_list">
            <h3>신부 측</h3>
            <ul>
                <li>
                    <p class="user_name">신부 · 신지원</p>
                    <div class="communication_wrap">
                        <a href="#">
                            <span class="call">계좌</span>
                        </a>
                    </div>
                </li>
                <li>
                    <p class="user_name">아버님 · 신준철</p>
                    <div class="communication_wrap">
                        <a href="#">
                            <span class="call">계좌</span>
                        </a>
                    </div>
                </li>
                <li>
                    <p class="user_name">어머님 · 이선경</p>
                    <div class="communication_wrap">
                        <a href="#">
                            <span class="call">계좌</span>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
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
    .communication_area{width:100%;padding:0 48px;}
    .communication_area .dot{padding-top:24px;text-align:center;}
    .communication_area .title{padding-top:24px;font-size:24px;line-height:36px;color:#BC7F40;text-align:center;}
    .communication_area .user_list{padding-top:16px;}
    .communication_area .user_list h3{font-size:20px;line-height:36px;color:#393631;text-align:center;}
    .communication_area .user_list ul{padding-top:16px;}
    .communication_area .user_list ul li{display:flex;align-items:center;justify-content:space-between;padding:16px 20px 16px 24px;border-radius:16px;background-color:#fff;}
    .communication_area .user_list ul li + li{margin-top:16px;}
    .communication_area .user_list ul li .user_name{font-size:16px;font-weight:500;color:#000000;}
    .communication_area .user_list ul li .communication_wrap{display:flex;gap:9px;align-items:center;}
    .communication_area .user_list ul li .communication_wrap a{display:flex;width:36px;height:36px;}
    .communication_area .user_list ul li .communication_wrap a span{display:inline-block;width:36px;height:36px;font-size:12px;line-height:36px;color:#fff;text-align:center;border-radius:50%;background-color:#BC7F40;}
</style>