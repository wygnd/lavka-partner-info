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
  <div class="steps-block block-content">

    <AppContainer>
      <AppTitle v-if="props.title" :title="props.title" size="h2"/>
      <ul v-if="props.items.length > 0" class="steps-block__items">
        <li v-for="(item, index) in items" class="steps-block__item">
          <div class="steps-block__item-counter">{{ index}}</div>
          <div class="steps-block__item-content">
            <div class="steps-block__item-desc">{{ item.desc }}</div>
            <component
                v-if="item.button"
                :is="item.button"
                v-bind="item.buttonProps"
            />
          </div>
        </li>
      </ul>
    </AppContainer>
  </div>
</template>

<style scoped lang="scss">

</style>