<script setup lang="ts">

import type {ISlideItemProps} from "@/components/SlideItem.vue";

const props = defineProps<{
  items: ISlideItemProps[]
}>()

const responsiveOptions = [
  {
    breakpoint: '1920px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '828px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '480px',
    numVisible: 1,
    numScroll: 1,
  },
]

</script>

<template>
  <div class="slider-block">
    <AppTitle class="slider-title" title="Забота в лавке" size="h2"/>
    <div class="slider-block__wrapper">
      <AppContainer>
        <div class="slider-block__holder">
          <Carousel
              :value="items"
              :numVisible="2"
              :numScroll="1"
              circular
              :autoplayInterval="3000"
              :responsiveOptions="responsiveOptions"
              :showNavigators="false"
              :showIndicators="false"
          >
            <template #item="slotProps">
              <SlideItem :title="slotProps.data.title" :image="slotProps.data.image"/>
            </template>
          </Carousel>
        </div>
      </AppContainer>
    </div>
  </div>
</template>

<style scoped lang="scss">
.slider {
  &-block {
    padding: 40px 0;

    &__wrapper {
      padding: 40px 0;
      background: var(--background);
    }
  }

  &-title {
    color: var(--primary);
    padding: 0 20px;
    margin-bottom: 20px;
  }
}

@media (max-width: 520px) {
  .slider {
    &-block {
      padding: 30px 0;
    }

    &-title {
      padding: 0 15px;
    }
  }
}
</style>