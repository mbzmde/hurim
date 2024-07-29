<template>
    <section class="communication_area">
        <img src="@/assets/line.svg" alt="line" style="marginTop: 56px; marginBottom: 24px;" />
        <p class="title">Бэлэг бэлгийн дээд бэлэн мөнгө<br/>
            <span class="communication-section__title--highlight">Та бүхэнд дансны мэдээллээ үлдээлээ.</span>
        </p>
        <div class="user_list">
            <h3>Нөхрийн тал</h3>
            <ul>
                <li >
                    <p class="user_name">Раднаабазар Мөнхбат</p>
                    <div class="communication_wrap">
                        <a href="#" @click.prevent="copyAccountInfo(user)" v-for="(user, index) in groomAccounts" :key="index">
                   <img :src="user.icon" alt="Icon" />
                        </a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="user_list">
            <h3>Эхнэрийн тал</h3>
            <ul>
                <li >
                    <p class="user_name">Соронзонболд Азжаргал</p>
                    <div class="communication_wrap">
                        <a href="#" @click.prevent="copyAccountInfo(user)" v-for="(user, index) in brideAccounts" :key="index">
                            <img :src="user.icon" alt="Icon" />
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
            {title: 'Р' , name: 'Мөнхбат', bank: 'Хаан банк', account: '9999999999', icon: 'src/assets/images/place-icon/khaan.png' },
            {title: 'Р' , name: 'Мөнхбат', bank: 'Голомт банк', account: '9999999999', icon: 'src/assets/images/place-icon/golomt.png'},
            {title: 'Р' , name: 'Мөнхбат', bank: 'Худалдаа хөгжлийн банк', account: '9999999999', icon: 'src/assets/images/place-icon/tdb.png'},
        ]);

        const brideAccounts = ref([
        {title: 'C' , name: 'Азжаргал', bank: 'Хаан банк', account: '9999999999', icon: 'src/assets/images/place-icon/khaan.png'},
        {title: 'C' , name: 'Азжаргал', bank: 'Голомт банк', account: '9999999999', icon: 'src/assets/images/place-icon/golomt.png'},
        {title: 'C' , name: 'Азжаргал', bank: 'Худалдаа хөгжлийн банк', account: '9999999999', icon: 'src/assets/images/place-icon/tdb.png'},
        ])

        const copyAccountInfo = (user) => {
        const accountInfo = `${user.account}`
      
        navigator.clipboard.writeText(accountInfo).then(() => {
            toast(`Амжилттай хуулагдлаа! ${user.bank} ${user.account}`, {
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