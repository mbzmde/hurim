<template>
  <div class="wrap">
    <span class="typing-text">{{ displayedText }}</span>
    <span class="cursor" :class="{ 'blink': isTypingComplete }">|</span>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';

export default {
  props: {
    text: {
      type: String,
      required: true
    },
    typingSpeed: {
      type: Number,
      default: 100
    }
  },
  setup(props) {
    const displayedText = ref('');
    const isTypingComplete = ref(false);

    const typeText = () => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < props.text.length) {
          displayedText.value += props.text[currentIndex];
          currentIndex++;
        } else {
          clearInterval(interval);
          isTypingComplete.value = true;
        }
      }, props.typingSpeed);
    };

    onMounted(typeText);

    watch(() => props.text, typeText);

    return {
      displayedText,
      isTypingComplete
    };
  }
};
</script>

<style scoped>
.wrap {
  position: absolute;
  width: 100%;
  height: 100%;
}

.typing-text {
  position: absolute;
  width: 60%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'SeoulHangang', Courier, monospace;
  font-size: 1.2em;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  word-break: keep-all;
}

.cursor {
  font-weight: bold;
  animation: blink 0.7s infinite;
  animation-play-state: paused;
}

.cursor.blink {
  animation-play-state: running;
}

@keyframes blink {
  0% { opacity: 0; }
  50% { opacity: 0.99; }
  100% { opacity: 0; }
}
</style>