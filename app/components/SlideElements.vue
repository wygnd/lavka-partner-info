<script setup lang="ts">

import {Swiper, SwiperSlide} from 'swiper/vue';
import type {ISlideItemProps} from "@/components/SlideItem.vue";
import 'swiper/css';
import {Autoplay} from "swiper/modules";

const props = defineProps<{
  items: ISlideItemProps[]
}>()

</script>

<template>
  <div class="slider-block">
    <AppContainer>
      <AppTitle class="slider-title" title="Забота в лавке" size="h2"/>
    </AppContainer>
    <div class="slider-block__wrapper">
      <AppContainer>
        <div class="slider-block__holder">
          <swiper
              :modules="[Autoplay]"
              :spaceBetween="15"
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
                430: {
                  slidesPerView: 2,
                },
                650: {
                  slidesPerView: 3,
                },
                800: {
                  slidesPerView: 4,
                },
              }"
          >
            <swiper-slide v-for="(item, index) in props.items" :key="index">
              <SlideItem :title="item.title" :image="item.image" class="slider-block__wrapper-item"/>
            </swiper-slide>
          </swiper>
        </div>
      </AppContainer>
    </div>
  </div>
</template>

<style scoped lang="scss">
.slider {
  &-block {
    &__wrapper {
      border-radius: 60px;
      padding: 80px 0;
      background: var(--background);
    }
  }

  &-title {
    margin-bottom: 20px;
  }
}


@media (max-width: 520px) {
  .slider {
    &-block {

      &__wrapper {
        padding: 40px 0;
        border-radius: 20px;
      }
    }
  }
}
</style>