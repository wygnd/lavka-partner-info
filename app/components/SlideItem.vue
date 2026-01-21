<script setup lang="ts">

import AppTitle from '@/components/AppTitle.vue'

export interface ISlideItemProps {
  title: string;
  image: string;
}

const props = defineProps<ISlideItemProps>();

</script>

<template>
  <div class="slide-item">
    <AppTitle :title="props.title" size="h3" class="slide-item__title"/>
    <div class="slide-item__image">
      <NuxtImg :src="props.image"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.slide-item {
  &__title {
    color: var(--head);
    margin-bottom: 40px;
  }

  &__image {
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: contain;
    }
  }
}
</style>