<script setup lang="ts">

import type {IAppTitleProps} from "~/components/AppTitle.vue";

export interface IImageProps {
  title?: IAppTitleProps;
  image: string;
}

const props = defineProps<IImageProps>();

</script>

<template>
  <div class="image-block content-block">
    <AppContainer>
      <div class="image-block__wrapper">
        <AppTitle v-if="props.title" v-bind="props.title" class="image-block__title"/>
        <div class="image-block__image">
          <NuxtImg
              :src="props.image"
              loading="lazy"
              width="700"
              height="500"
          />
        </div>
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
    border-radius: 30px;
    border: 5px solid var(--primary);
    width: 100%;
    height: 300px;
    padding: 20px;

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: contain;
    }
  }
}

@media (max-width: 992px) {
  .image-block {
    .container {
      padding: 0 10px;
    }

    &__image {
      height: 250px;
    }
  }
}
</style>