<script setup lang="ts">

import type {TButtonProps} from "~/components/AppButton.vue";

export interface IStep {
  desc: string;
  button?: Component;
  buttonProps?: TButtonProps
}

export interface IStepsProps {
  title?: string;
  items: IStep[];
  lastImage?: string;
  lastTitle?: string;
}

const props = defineProps<IStepsProps>();

</script>

<template>
  <div class="steps-block content-block">
    <AppContainer>
      <AppTitle v-if="props.title" :title="props.title" size="h2" class="steps-block__title"/>
      <ul v-if="props.items.length > 0" class="steps-block__items">
        <li v-for="(item, index) in items" class="steps-block__item">
          <div class="steps-block__item-counter">{{ index + 1 }}</div>
          <div class="steps-block__item-content">
            <div class="steps-block__item-desc">{{ item.desc }}</div>
            <component
                v-if="item.button"
                :is="item.button"
                v-bind="item.buttonProps"
                class="steps-block__item-button"
            />
          </div>
        </li>
        <li v-if="props.lastImage || props.lastTitle" class="steps-block__item">
          <AppTitle v-if="props.lastTitle" :title="props.lastTitle" size="h2" class="steps-block__item-title"/>
          <div class="steps-block__item-image">
            <NuxtImg v-if="props.lastImage" :src="props.lastImage"/>
          </div>
        </li>
      </ul>
    </AppContainer>
  </div>
</template>

<style scoped lang="scss">
.steps {
  &-block {
    &__title {
      margin-bottom: 20px;
    }

    &__items {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 30px;
    }

    &__item {
      min-height: 300px;
      background: var(--primary);
      display: flex;
      gap: 10px;
      border-radius: 20px;
      padding: 20px;
      overflow: hidden;

      &:last-child {
        margin-bottom: 0;
        align-items: flex-end;
        position: relative;
        z-index: 1;
        min-height: 200px;
      }

      &-counter {
        font-size: 100px;
        font-weight: 700;
        line-height: 80%;
        color: var(--card);
        height: fit-content;
      }

      &-content {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      &-desc {
        @include h6;
        font-weight: 600;
        color: var(--card);
      }

      &-button {
        text-transform: uppercase;
        margin-top: auto;
      }

      &-title {
        color: var(--card);
      }

      &-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        pointer-events: none;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        &:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          box-shadow: rgba(0, 0, 0, 0.5) 0px -90px 36px -8px inset;
          z-index: 1;
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .steps {
    &-block {
      &__items {
        gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      }

      &__item {
        min-height: unset;

        &-counter {
          font-size: 60px;
        }
      }
    }
  }
}
</style>