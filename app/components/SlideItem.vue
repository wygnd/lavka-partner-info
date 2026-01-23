<script setup lang="ts">

import AppTitle from '@/components/AppTitle.vue'

export interface ISlideItemProps {
  title?: string;
  image: string;
}

const props = defineProps<ISlideItemProps>();

</script>

<template>
  <div class="slide-item">
    <AppTitle v-if="props.title" :title="props.title" size="h3" class="slide-item__title"/>
    <div class="slide-item__image">
      <NuxtImg :src="props.image"/>
    </div>
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
    border-radius: 20px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: contain;
    }
  }
}
</style>