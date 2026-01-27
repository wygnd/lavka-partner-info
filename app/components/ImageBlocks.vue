<script setup lang="ts">

import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import type {IImageProps} from "~/components/ImageBlock.vue";
import {Autoplay} from "swiper/modules";

const items: IImageProps[] = [
  {
    image: './images/slide-bicycle.webp',
  },
  {
    image: './images/slide-moped.webp',
  }
];

</script>

<template>
  <div class="images-block">
    <AppContainer>
      <AppTitle title="Транспорт для Доставок" size="h2"/>
      <div class="images-block__wrapper">
        <swiper
            :modules="[Autoplay]"
            :slidesPerView="3"
            :spaceBetween="0"
            :loop="true"
            :speed="2000"
            :autoplay="{
                delay: 0,
                disableOnInteraction: false
              }"
            :freeMode="true"
            :freeModeMomentum="false"
            :breakpoints="{
              1: {
                slidesPerView: 1,
              },
              470: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 3
              }
            }"
        >
          <swiper-slide v-for="(item, index) in items" :key="index">
            <ImageBlock
                :title="item.title"
                :image="item.image"
            />
          </swiper-slide>
        </swiper>
      </div>
    </AppContainer>
  </div>
</template>

<style scoped lang="scss">
</style>