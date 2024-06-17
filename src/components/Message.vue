<template>
    <section id="test" class="message_area">
        <p class="dot">/</p>
        <h2 class="title">축하의 메시지로 첫 출발을 <br> 축하해주시면 감사하겠습니다.</h2>
        <div v-for="(message, index) in messages" :key="index" class="message_box">
            <div class="user_info">
                <p class="name">{{ message.name }}</p>
                <span class="date">{{ message.date }}</span>
            </div>
            <p class="comment">{{ message.comment }}</p>
        </div>
        <p class="dot">/</p>
        <div class="inp_box">
            <input v-model="newMessage.name" type="text" placeholder="이름을 입력해주세요." class="inp_name">
            <input v-model="newMessage.comment" type="text" placeholder="신랑, 신부에게 축하의 메시지를 남겨주세요." class="inp_comment">
        </div>
        <a href="#" class="btn_message" @click.prevent="addMessage">축하 메시지 남기기</a>
    </section>
</template>

<script>
import { ref } from 'vue';

export default {
    setup () {
        const newMessage = ref({name: '', comment: ''});
        const messages = ref( [
            {
                name: 'user1',
                date: '2024.08.24',
                comment: '축하해요~',
            }
        ]);

        const addMessage = () => {
            if(newMessage.value.name && newMessage.value.comment) {
                const currentDate = new Date().toISOString().split('T')[0];
                messages.value.push({
                    name: newMessage.value.name,
                    date: currentDate,
                    comment: newMessage.value.comment
                });

                newMessage.value = {name: '', comment: ''};
            }
        }

        return{newMessage, messages,addMessage}
    }
}
</script>

<style scoped>
    .message_area{width:100%;padding:0 48px;}
    .message_area .dot{padding-top:24px;text-align:center;}
    .message_area .title{padding-top:24px;font-size:24px;line-height:36px;color:#BC7F40;text-align:center;}
    .message_area .message_box{margin-top:32px;padding:20px;border:1px solid red;border-radius:8px;background-color:#fff;}
    .message_area .message_box + .message_box{margin-top:16px;}
    .message_area .message_box .user_info{display:flex;justify-content:space-between;font-size:16px;line-height:16px;color:#BC7F40;}
    .message_area .message_box .comment{margin-top:13px;font-size:16px;line-height:28px;color:#393631;}
    .message_area .inp_box{margin-top:32px;padding:20px;border:1px solid red;border-radius:8px;background-color:#fff;}
    .message_area .inp_box input{width:100%;font-size:16px;line-height:16px;border:0;}
    .message_area .inp_box .inp_comment{margin-top:13px;}
    .message_area .inp_box .inp_name::placeholder{color:#393631;}
    .message_area .inp_box .inp_comment::placeholder{color:#929292;}
    .message_area .btn_message{display:inline-block;width:100%;margin-top:8px;padding:14px 0;font-size:16px;color:#393631;border:0;border-radius:8px;background-color:#fff;text-align:center;}
    
</style>