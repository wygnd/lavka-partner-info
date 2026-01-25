<script setup lang="ts">

import type {IAppTitleProps} from "~/components/AppTitle.vue";

interface IImageProps {
  title: IAppTitleProps;
  image: string;
}

const props = defineProps<IImageProps>();

</script>

<template>
  <div class="image-block content-block">
    <AppContainer>
      <div class="image-block__wrapper">
        <AppTitle v-bind="props.title" class="image-block__title"/>
        <NuxtImg :src="props.image" class="image-block__image"/>
      </div>
    </AppContainer>
  </div>
</template>

<style scoped lang="scss">
.image-block {
  &__title {
    margin-bottom: 20px;
    text-align: center;
  }

  &__image {
    width: 100%;
    max-height: 400px;
    height: 100%;
    display: block;
    object-fit: contain;
  }
}
</style>