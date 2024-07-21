<template>
  <div class="splash-screen" v-if="show">
    <!-- 스플래시 스크린 콘텐츠 -->
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  z-index: 9999;
}
</style>