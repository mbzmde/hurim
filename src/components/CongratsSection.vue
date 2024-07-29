<template>
  <section class="message_section">
    <img src="@/assets/line.svg" alt="line" style="marginTop: 46px; marginBottom: 42px;" />
    <p class="message_section__title">Р.Мөнхбат & С.Азжаргал-д<br/>
      <span class="message_section_-title--highlight">аз жаргал бэлэглэх.</span>
    </p>
    <p class="message-section__title--highlight">Доорх товчийг дарж бидэнд аз жаргал бэлэглээрэй.</p>
    <button class="message_section__button" @click="congratulate">Аз жаргал бэлэглэх</button>
    <p class="message_section__title--highlight" style="marginTop: 24px;">Нийт {{ congratulationCount }} удаа бэлэглэсэн байна.</p>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useToast } from 'vue-toastification'
import confetti from "https://cdn.skypack.dev/canvas-confetti";
import { supabase } from '@/lib/supabase-client';

export default {
  name: 'CongratsSection',
  setup () {
    const toast = useToast();
    const congratulationCount = ref(0);

    const loadCongratulationCount = async () => {
      const { data, error } = await supabase
        .from('202407_roh_shin_wedding_message')
        .select('*');
      if (error) {
        console.error('축하 메시지 조회 실패:', error);
        return;
      }
      congratulationCount.value = data.length;
    };

    const congratulate = async () => {
      toast('АЗ ЖАРГАЛ БЭЛЭГЛЭЖ БАЙНА!', {
        position: 'bottom-center',
        timeout: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: true,
        hideProgressBar: true,
        closeButton: false,
        icon: true,
        transition: 'Vue-Toastification__fade',
        transitionDuration: 300,
        maxToasts: 3,
        newestOnTop: true,
      });

      try {
        await supabase.from('202407_roh_shin_wedding_message').insert([
          { created_at: new Date() }
        ]);
        await loadCongratulationCount();
      } catch (err) {
        console.error('축하 메시지 저장 실패:', err);
      }

      confetti();
    }

    onMounted(loadCongratulationCount);

    return {
      congratulate,
      congratulationCount
    }
  },
}
</script>

<style scoped>
  @import "@/components/scss/CongratsSection.scss";
</style>