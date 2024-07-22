<template>
    <section class="communication_area">
        <img src="@/assets/line.svg" alt="line" style="marginTop: 56px; marginBottom: 24px;" />
        <p class="title">첫 출발을 축복해주시는 <br/>
            <span class="communication-section__title--highlight">연락을 기다리겠습니다.</span>
        </p>
        <div class="user_list">
            <h3>신랑 측</h3>
            <ul>
                <li v-for="(user, index) in groomSide" :key="index">
                    <p class="user_name">{{ user.title }} · {{ user.name }}</p>
                    <div class="communication_wrap">
                        <a :href="`tel:${user.phone}`">
                            <span class="call">전화</span>
                        </a>
                        <a :href="`sms:${user.phone}`">
                            <span class="message">문자</span>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="user_list">
            <h3>신부 측</h3>
            <ul>
                <li v-for="(user, index) in brideSide" :key="index">
                    <p class="user_name">{{ user.title }} · {{ user.name }}</p>
                    <div class="communication_wrap">
                        <a :href="`tel:${user.phone}`">
                            <span class="call">전화</span>
                        </a>
                        <a :href="`sms:${user.phone}`">
                            <span class="message">문자</span>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue';

export default {
    setup () {
        const groomSide = ref([
            {title: '신랑', name: '노승찬', phone: '010-6218-0438'},
            {title: '아버님', name: '노수련', phone: '010-5247-9572'},
            {title: '어머님', name: '김유미', phone: '010-3317-0434'},
        ]);

        const brideSide = ref([
            {title: '신부', name: '신지원', phone: '010-9975-0173'},
            {title: '아버님', name: '신준철', phone: '010-4829-2116'},
            {title: '어머님', name: '이성경', phone: '010-4029-2116'},
        ])

        return {groomSide,brideSide}
    }
}
</script>

<style scoped>
    .communication_area{display: flex;flex-direction:column;width:100%;padding:0 48px;justify-content:center;align-items:center;}
    .communication-section__title--highlight{font-weight:700;}
    .communication_area .dot{padding-top:24px;text-align:center;}
    .communication_area .title{padding-top:24px;font-size:22px;line-height:36px;color:#BC7F40;text-align:center;}
    .communication_area .user_list{padding-top:16px;width:100%}
    .communication_area .user_list h3{font-size:20px;line-height:36px;color:#393631;text-align:center;}
    .communication_area .user_list ul{padding-top:16px;}
    .communication_area .user_list ul li{display:flex;align-items:center;justify-content:space-between;padding:16px 20px 16px 24px;border:2px solid #F2EEE8;border-radius:16px;background-color:#fff;}
    .communication_area .user_list ul li + li{margin-top:16px;}
    .communication_area .user_list ul li .user_name{font-size:16px;font-weight:500;color:#000000;}
    .communication_area .user_list ul li .communication_wrap{display:flex;gap:9px;align-items:center;}
    .communication_area .user_list ul li .communication_wrap a{display:flex;width:36px;height:36px;}
    .communication_area .user_list ul li .communication_wrap a span{display:inline-block;width:36px;height:36px;font-size:12px;line-height:36px;color:#fff;text-align:center;border-radius:50%;background-color:#BC7F40;}
</style>