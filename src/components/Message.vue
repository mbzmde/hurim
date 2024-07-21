<template>
  <section id="test" class="message_area">
    <img src="@/assets/line.svg" alt="line" style="marginTop: 56px; marginBottom: 56px;" />
      <p class="title">지원, 승찬의 첫 출발을<br/>
        <span class="message-section__title--highlight">축하해주시면 감사하겠습니다.</span>
      </p>
      <p class="message-section__title--highlight">아래 버튼을 통해 새출발을 응원해주세요.</p>
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
    .message_area{width:100%;padding:0 48px;  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;}
    .message-section__title--highlight{font-weight:700}
    .message_area .title{font-size:22px;line-height:36px;color:#BC7F40;text-align:center;}
    .message_area .message_box{margin-top:32px;padding:20px;border:2px solid #F2EEE8;border-radius:8px;background-color:#fff;}
    .message_area .message_box + .message_box{margin-top:16px;}
    .message_area .message_box .user_info{display:flex;justify-content:space-between;font-size:16px;line-height:16px;color:#BC7F40;}
    .message_area .message_box .comment{margin-top:13px;font-size:16px;line-height:28px;color:#393631;}
    .message_area .inp_box{margin-top:32px;padding:20px;border:2px solid #F2EEE8;border-radius:8px;background-color:#fff;}
    .message_area .inp_box input{width:100%;font-size:14px;line-height:16px;border:0;}
    .message_area .inp_box .inp_comment{margin-top:13px;}
    .message_area .inp_box .inp_name::placeholder{color:#393631;}
    .message_area .inp_box .inp_comment::placeholder{font-size:12px;color:#929292;}
    .message_area .btn_message{display:inline-block;width:100%;margin-top:8px;padding:14px 0;font-size:16px;color:#393631;border:0;border-radius:8px;background-color:#F2EEE8;text-align:center;}
    
</style>