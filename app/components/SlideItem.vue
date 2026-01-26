<script setup lang="ts">

import AppTitle from '@/components/AppTitle.vue'

export interface ISlideItemProps {
  title?: string;
  image: string;
  class?: string;
}

const props = defineProps<ISlideItemProps>();

const classes = computed(() => [
  'slide-item',
  props.class && props.class,
])

</script>

<template>
  <div :class="classes">
    <AppTitle v-if="props.title" :title="props.title" size="h3" class="slide-item__title"/>
    <NuxtImg
        :src="props.image"
        class="slide-item__image"
        width="400"
        height="500"
    />
  </div>
</template>

<style scoped lang="scss">
.slide-item {
  margin: 0 5px;

  &__title {
    color: var(--head);
    margin-bottom: 40px;
  }

  &__image {
    width: 100%;
    border-radius: 30px;
    overflow: hidden;
    height: 100%;
    max-height: 400px;
    display: block;
    object-fit: contain;
    background: var(--card);
  }
}

@media (max-width: 992px) {
  .slide-item {
    &__image {
      max-height: 300px;
    }
  }
}
</style>