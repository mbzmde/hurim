<template>
    <section class="communication_area">
        <img src="@/assets/line.svg" alt="line" style="marginTop: 56px; marginBottom: 24px;" />
        <p class="title">저희의 첫 출발을 축하해주시는 <br/>
            <span class="communication-section__title--highlight">마음 감사드립니다.</span>
        </p>
        <div class="user_list">
            <h3>신랑 측</h3>
            <ul>
                <li v-for="(user, index) in groomAccounts" :key="index">
                    <p class="user_name">{{ user.title }} · {{ user.name }}</p>
                    <div class="communication_wrap">
                        <a href="#" @click.prevent="copyAccountInfo(user)">
                            <span class="call">계좌</span>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="user_list">
            <h3>신부 측</h3>
            <ul>
                <li v-for="(user, index) in brideAccounts" :key="index">
                    <p class="user_name">{{ user.title }} · {{ user.name }}</p>
                    <div class="communication_wrap">
                        <a href="#" @click.prevent="copyAccountInfo(user)">
                            <span class="call">계좌</span>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue';
import { useToast } from 'vue-toastification'

export default {
    setup () {
        const toast = useToast();
        const groomAccounts = ref([
            {title: '신랑' , name: '노승찬', bank: '국민은행', account: '224602-04-219606'},
            {title: '아버님' , name: '노수련', bank: '국민은행', account: '224-01-0411-459'},
            {title: '어머님' , name: '김유미', bank: '국민은행', account: '224-21-0824-372'},
        ]);

        const brideAccounts = ref([
        {title: '신부' , name: '신지원', bank: '국민은행', account: '660401-01-871167'},
        {title: '아버님' , name: '신준철', bank: '기업은행', account: '434-101470-01-018'},
        {title: '어머님' , name: '이성경', bank: '신한은행', account: '623-02-211944'},
        ])

        const copyAccountInfo = (user) => {
        const accountInfo = `은행: ${user.bank}\n계좌번호: ${user.account}`
      
        navigator.clipboard.writeText(accountInfo).then(() => {
            toast(`복사완료! ${user.bank} ${user.account}`, {
                position: 'bottom-center',
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: true,
                closeButton: 'button',
                icon: true,
                rtl: false
            })
        }).catch(err => {
        console.error('계좌 정보 복사 실패:', err)
        toast('계좌 정보 복사에 실패했습니다.', {
            position: 'bottom-center',
            timeout: 5000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: true,
            closeButton: 'button',
            icon: true,
            rtl: false
        })
      })
    }
   
        return {groomAccounts,brideAccounts,copyAccountInfo}
    }
}
</script>

<style scoped>
    .communication_area{display: flex;flex-direction:column;width:100%;padding:0 48px;justify-content:center;align-items:center;}
    .communication_area .dot{padding-top:24px;text-align:center;}
    .communication_area .title{padding-top:24px;font-size:22px;line-height:36px;color:#BC7F40;text-align:center;}
    .communication-section__title--highlight{font-weight:700}
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