<script setup lang="ts">

import HeroBanner from '~/components/HeroBanner.vue';
import type {ISlideItemProps} from "~/components/SlideItem.vue";
import StepsBlock, {type IStep} from "~/components/StepsBlock.vue";
import AppButton from "~/components/AppButton.vue";

const slideItems: ISlideItemProps[] = [
  {title: 'Транспорт для Доставок', image: '/images/slide-bicycle.webp'},
  {title: 'Экипировка для Доставок', image: '/images/slide-equipment.webp'},
  {title: 'Транспорт для Доставок 2', image: '/images/slide-bicycle.webp'},
  {title: 'Экипировка для Доставок 2', image: '/images/slide-moped.webp'},
];

const stepsItems: IStep[] = [
  {
    desc: 'Пройдите все этапы на странице регистрации и  запишитесь на оформление ',
    button: AppButton,
    buttonProps: {
      type: 'link',
      title: 'Регистрация',
      variant: 'secondary',
      href: 'https://google.com'
    }
  },
  {
    desc: 'После оформления сможете выбрать удобную Лавку для работы',
  }
];

</script>

<template>
  <HeroBanner/>
  <SlideElements :items="slideItems"/>
  <MapsBlock/>
  <StepsBlock
      :items="stepsItems"
      title="Как стать Курьером"
      lastImage="/images/steps-block.webp"
      lastTitle="Вы готовы к доставкам!"
  />
</template>

<style scoped>

</style>