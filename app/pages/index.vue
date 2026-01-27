<script setup lang="ts">

import HeroBanner from '~/components/HeroBanner.vue';
import type {ISlideItemProps} from "~/components/SlideItem.vue";
import StepsBlock, {type IStep} from "~/components/StepsBlock.vue";
import AppButton from "~/components/AppButton.vue";
import type {IAccordion} from "~/components/Accordions.vue";
import {REGISTRATION_FORM_LINK} from "~/constants/links";

const slideItems: ISlideItemProps[] = [
  {image: '/images/slide-image-1.jpg'},
  {image: '/images/slide-image-2.webp'},
  {image: '/images/slide-image-3.webp'},
  {image: '/images/slide-image-4.webp'},
  {image: '/images/slide-image-5.webp'},
  {image: '/images/slide-image-6.webp'},
  {image: '/images/slide-image-7.webp'},
  {image: '/images/slide-image-8.webp'},
  {image: '/images/slide-image-9.webp'},
  {image: '/images/slide-image-10.webp'},
  {image: '/images/slide-image-11.webp'},
];

const stepsItems: IStep[] = [
  {
    desc: 'Пройдите все этапы на странице регистрации и  запишитесь на оформление ',
    button: AppButton,
    buttonProps: {
      type: 'link',
      title: 'Регистрация',
      variant: 'secondary',
      href: REGISTRATION_FORM_LINK
    }
  },
  {
    desc: 'После оформления сможете выбрать удобную Лавку для работы',
  }
];

const accordionItems: IAccordion[] = [
  {
    id: '0',
    title: 'Что такое Яндекс Лавка?',
    description: 'Яндекс Лавка — это сервис быстрой доставки продуктов, готовой еды и товаров для дома. В разных районах города есть дарксторы — специальные магазины без покупателей, где хранятся товары. Курьеры выполняют заказы, забирают их из даркстора и везут клиентам.'
  },
  {
    id: '1',
    title: 'Можно ли работать без опыта?',
    description: 'Опыт необязателен — все курьеры проходят короткое обучение. А чтобы первый слот прошёл комфортно, мы можем подобрать вам наставника. Опытный курьер поможет вам освоиться, объяснит всё непонятное, и вы вместе доставите несколько заказов.'
  },
  {
    id: '2',
    title: 'Есть ли в Лавках места для отдыха?',
    description: 'Да, во всех Лавках есть зона, в которой можно отдохнуть, пообедать, зарядить телефон или батарею электровелосипеда.'
  },
  {
    id: '3',
    title: 'Будет ли официальное оформление?',
    description: 'Курьеры заключают договор с партнёрской компанией или сотрудничают с сервисом как самозанятые.'
  },
  {
    id: '4',
    title: 'На каком транспорте можно доставлять заказы ?',
    description: 'Курьеры могут взять велосипед или Электровелосипед в Лавке или использовать собственный.'
  },
  {
    id: '5',
    title: 'Как составляется расписание доставок ?',
    description: 'У курьеров нет строгого расписания — они сами выбирают удобные слоты и локации из доступных.'
  },
];

</script>

<template>
  <main>
    <HeroBanner/>
    <ImageBlocks/>
    <MapsBlock/>
    <SlideElements :items="slideItems"/>
    <StepsBlock
        :items="stepsItems"
        title="Как стать Курьером"
        lastImage="/images/steps-image.webp"
        lastTitle="Вы готовы к доставкам!"
    />
    <Accordions title="Вопросы и ответы" :items="accordionItems"/>
  </main>
</template>

<style scoped>

</style>