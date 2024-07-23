<template>
    <div ref="observerElement" :class="{ 'fade-in': isVisible }">
      <slot></slot>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  export default {
    name: 'FadeInSection',
    setup() {
      const observerElement = ref(null);
      const isVisible = ref(false);
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            isVisible.value = true;
            observer.unobserve(entry.target);
          }
        });
      });
  
      onMounted(() => {
        if (observerElement.value) {
          observer.observe(observerElement.value);
        }
      });
  
      onUnmounted(() => {
        if (observerElement.value) {
          observer.unobserve(observerElement.value);
        }
      });
  
      return {
        observerElement,
        isVisible
      };
    }
  }
  </script>
  
  <style scoped>
  div {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1.2s ease-out, transform 1.2s ease-out;
    width:100%;
  }
  
  .fade-in {
    opacity: 1;
    transform: translateY(0);
  }
  </style>
  