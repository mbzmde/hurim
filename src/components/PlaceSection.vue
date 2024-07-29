<template>
  <section class="place-section">
    <img src="@/assets/line.svg" alt="line" class="place-section__line">
    <div class="place-info">
      <p class="place-info__address">
        Улаанбаатар-16020, Баянгол дүүрэг, 26-р хороо, Үйлдвэрийн төвийн бүс-2<br>
        <span class="place-info__name">Уранган групп UG PALACE</span>
      </p>
      <div class="place-info__btn-wrap">
        <button type="button" class="btn btn--copy-address" @click="copyAddress">Хаяг хуулах</button>
      </div>
    </div>
    <div class="directions-list">
      <div class="directions-item">
        <a href="http://ugpalace.mn/" target="_blank" class="directions-item__link">
          <div class="directions-item__img-box">
            <img src="@/assets/images/place-icon/logo.jpg" alt="길찾기아이콘" class="directions-item__img">
          </div>
          <p class="directions-item__text">UG Palace</p>
        </a>
      </div>
      <div class="directions-item">
        <a href="https://maps.app.goo.gl/KMNXKEkBHT1wKxP29" target="_blank" class="directions-item__link">
          <div class="directions-item__img-box">
            <img src="@/assets/images/place-icon/google.webp" alt="길찾기아이콘" class="directions-item__img">
          </div>
          <p class="directions-item__text">Google Maps</p>
        </a>
      </div>
      <div class="directions-item">
        <a href="https://www.facebook.com/ugpalace77112111" target="_blank" class="directions-item__link">
          <div class="directions-item__img-box">
            <img src="@/assets/images/place-icon/facebook.png" alt="길찾기아이콘" class="directions-item__img">
          </div>
          <p class="directions-item__text">Facebook</p>
        </a>
      </div>
    </div>
    <div class="directions-method">
      <div class="directions-method__item">
        <h3 class="directions-method__title">Автомашин</h3>
        <p class="directions-method__description">
          - Хэрэв та хувийн автомашинтай ирвэл таныг 700 автомашины зогсоол хүлээж байна.
          <br/>
          - Харин согтууруулах ундаа хэрэглэсэн үедээ жолооч дуудахаа мартуузай!
        </p>
      </div>
      <!-- <div class="directions-method__item">
        <h3 class="directions-method__title">버스</h3>
        <p class="directions-method__description">
          주안역 정류장 하차<br>
          - 간선버스(파랑): 5-1, 10, 13, 28, 28-1, 38, 58, 62, 63, 65, 65-1, 81, 82<br>
          - 지선버스(초록): 510, 511, 514-1, 515, 515-1, 516, 518, 522, 523-1, 566, 인천E음 31
        </p>
      </div> -->
      <div class="directions-method__item">
        <h3 class="directions-method__title">Такси</h3>
        <!-- <p class="directions-method__description">
          - UBCab Application
        </p> -->
        <div class="directions-item" style="height:130px !important" v-if="isAndroid">
        <a href="https://play.google.com/store/apps/details?id=com.mezorn.ubcab.ubcab_passanger_v2&hl=en" target="_blank" class="directions-item__link">
          <div class="directions-item__img-box">
            <img src="@/assets/images/place-icon/ubcab.jpg" alt="길찾기아이콘" class="directions-item__img">
          </div>
          <p class="directions-item__text">UBCab Taxi on Android</p>
        </a>
      </div>
      <div class="directions-item" style="height:130px !important" v-if="isIOS">
        <a href="https://apps.apple.com/us/app/ubcab/id863109199" target="_blank" class="directions-item__link">
          <div class="directions-item__img-box">
            <img src="@/assets/images/place-icon/ubcab.jpg" alt="길찾기아이콘" class="directions-item__img">
          </div>
          <p class="directions-item__text">UBCab Taxi on iPhone</p>
        </a>
      </div>
      <div class="directions-item" style="height:130px !important" v-if="!isIOS && !isAndroid">
        <a href="https://www.ubcab.mn" target="_blank" class="directions-item__link">
          <div class="directions-item__img-box">
            <img src="@/assets/images/place-icon/ubcab.jpg" alt="길찾기아이콘" class="directions-item__img">
          </div>
          <p class="directions-item__text">UBCab Taxi</p>
        </a>
      </div>
      <div class="directions-item" style="height:130px !important; margin-top: 16px;" v-if="isAndroid">
        <a href="https://play.google.com/store/apps/details?id=com.abataxi" target="_blank" class="directions-item__link">
          <div class="directions-item__img-box">
            <img src="@/assets/images/place-icon/aba.jpg" alt="길찾기아이콘" class="directions-item__img">
          </div>
          <p class="directions-item__text">ABA Taxi on Android</p>
        </a>
      </div>
      <div class="directions-item" style="height:130px !important; margin-top: 16px;" v-if="isIOS">
        <a href="https://apps.apple.com/us/app/aba-mongolia/id6447431571" target="_blank" class="directions-item__link">
          <div class="directions-item__img-box">
            <img src="@/assets/images/place-icon/aba.jpg" alt="길찾기아이콘" class="directions-item__img">
          </div>
          <p class="directions-item__text">ABA Taxi on iPhone</p>
        </a>
      </div>
      <div class="directions-item" style="height:130px !important; margin-top: 16px;" v-if="!isIOS && !isAndroid">
        <a href="https://www.aba.mn/" target="_blank" class="directions-item__link">
          <div class="directions-item__img-box">
            <img src="@/assets/images/place-icon/aba.jpg" alt="길찾기아이콘" class="directions-item__img">
          </div>
          <p class="directions-item__text">ABA Taxi</p>
        </a>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'PlaceSection',
  setup() {
    const address = ref({
      line1: 'Улаанбаатар-16020, Баянгол дүүрэг, 26-р хороо, Үйлдвэрийн төвийн бүс-2',
      line2: 'Уранган групп UG PALACE'
    });
    const appStoreLink = ref('https://www.apple.com/app-store/'); // Replace with your actual App Store link
    const playStoreLink = ref('https://play.google.com/store'); // Replace with your actual Play Store link
    const userAgent = ref(navigator.userAgent);
    const isIOS = ref(false);
    const isAndroid = ref(false);
    const detectDevice = () => {
      isIOS.value = /iPad|iPhone|iPod/.test(userAgent.value) && !window.MSStream;
      isAndroid.value = /android/i.test(userAgent.value);
    };
    const copyAddress = () => {
      const fullAddress = `${address.value.line1}\n${address.value.line2}`;
      navigator.clipboard.writeText(fullAddress).then(() => {
        alert('Амжилттай хуулагдлаа.');
      }).catch(err => {
        console.error('Хаягийг хуулж чадсангүй.', err);
      });
    };
    onMounted(() => {
      detectDevice();
    });
    return { address, copyAddress, appStoreLink, playStoreLink, isIOS, isAndroid };
  },
};
</script>

<style scoped>
@import '@/components/scss/PlaceSection.scss';
</style>
