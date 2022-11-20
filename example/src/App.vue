<script setup>
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from "./components/TheWelcome.vue";
// import { IwanSwiper, IwanSwiperSlide } from 'springlib';
// import { IwanSwiper, IwanSwiperSlide } from '../../index.js';
import { IwanSwiper, IwanSwiperSlide } from '../../spring-lib/es';

</script>

<template>
  <div id="app">
    <div class="swiper-user">
      <IwanSwiper :slidesNum="4">
        <template #swiper-content>
          <IwanSwiperSlide slideId="0" style="color:white;background:orangered">
            111111
          </IwanSwiperSlide>
          <IwanSwiperSlide  slideId="1" style="color:white;background:black">
            222222
          </IwanSwiperSlide>
          <IwanSwiperSlide  slideId="2" style="color:white;background:gray">
            33333
          </IwanSwiperSlide>
          <IwanSwiperSlide  slideId="3" style="color:white;background:purple">
            44444
          </IwanSwiperSlide>
        </template>
      </IwanSwiper>
    </div>
    <!-- <header>
      <img
        alt="Vue logo"
        class="logo"
        src="./assets/logo.svg"
        width="125"
        height="125"
      />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />
      </div>
    </header>

    <main>
      <TheWelcome />
    </main> -->
     
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}
.swiper-user{
  width: 600px;
  height: 200px;
  border: 1px solid gray;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
