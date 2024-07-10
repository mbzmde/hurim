<template>
  <section class="place-section">
    <img src="@/assets/line.svg" alt="line" class="place-section__line">
    <div class="place-info">
      <p class="place-info__address">
        인천광역시 미추홀구 주안로 128-9 <br>
        <span class="place-info__name">주안 그랜드 하우스 7층</span>
      </p>
      <div class="place-info__btn-wrap">
        <button type="button" class="btn btn--copy-address" @click="copyAddress">주소 복사하기</button>
      </div>
    </div>
    <div class="directions-list">
      <div class="directions-item">
        <a href="https://example.com" target="_blank" class="directions-item__link">
          <div class="directions-item__img-box">
            <img src="@/assets/images/place-icon/tmap.svg" alt="길찾기아이콘" class="directions-item__img">
          </div>
          <p class="directions-item__text">T 맵으로 길 찾기</p>
        </a>
      </div>
      <div class="directions-item">
        <a href="https://example.com" target="_blank" class="directions-item__link">
          <div class="directions-item__img-box">
            <img src="@/assets/images/place-icon/naver.svg" alt="길찾기아이콘" class="directions-item__img">
          </div>
          <p class="directions-item__text">네이버 지도로 길 찾기</p>
        </a>
      </div>
      <div class="directions-item">
        <a href="https://example.com" target="_blank" class="directions-item__link">
          <div class="directions-item__img-box">
            <img src="@/assets/images/place-icon/kakao.svg" alt="길찾기아이콘" class="directions-item__img">
          </div>
          <p class="directions-item__text">카카오 지도로 길 찾기</p>
        </a>
      </div>
    </div>
    <div class="directions-method">
      <div class="directions-method__item">
        <h3 class="directions-method__title">지하철</h3>
        <p class="directions-method__description">
          - 주안역(1호선) 하차 후 지상 1번 출구, 지하상가 2번 출구
          <br/>
          - 주안역(인천2호선) 하차 후 지하 5번 출구
        </p>
      </div>
      <div class="directions-method__item">
        <h3 class="directions-method__title">버스</h3>
        <p class="directions-method__description">
          주안역 정류장 하차<br>
          - 간선버스(파랑): 5-1, 10, 13, 28, 28-1, 38, 58, 62, 63, 65, 65-1, 81, 82<br>
          - 지선버스(초록): 510, 511, 514-1, 515, 515-1, 516, 518, 522, 523-1, 566, 인천E음 31
        </p>
      </div>
      <div class="directions-method__item">
        <h3 class="directions-method__title">자가용</h3>
        <p class="directions-method__description">
          - '주안 그랜드하우스' 또는 '주안동 128-9' 입력
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'PlaceSection',
  setup() {
    const address = ref({
      line1: '인천광역시 미추홀구 주안로 128-9',
      line2: '주안 그랜드 하우스 7층'
    });

    const copyAddress = () => {
      const fullAddress = `${address.value.line1}\n${address.value.line2}`;
      navigator.clipboard.writeText(fullAddress).then(() => {
        alert('주소가 복사되었습니다.');
      }).catch(err => {
        console.error('주소 복사에 실패했습니다.', err);
      });
    };

    return { address, copyAddress };
  },
};
</script>

<style scoped>
@import '@/components/scss/PlaceSection.scss';
</style>
