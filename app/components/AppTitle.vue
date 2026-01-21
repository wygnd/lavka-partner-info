<script setup lang="ts">
interface IAppTitleProps {
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  title: string;
  class?: string;
}

const props = defineProps<IAppTitleProps>()

const classes = computed(() => [
  'block-title',
  props.class
])

</script>

<template>
  <component :is="props.size" :class="classes">{{ title }}</component>
</template>

<style scoped lang="scss">
.block-title {
  color: var(--head);

  &.block-title--white {
    color: var(--card);
  }


}

h1 {
  @include h1;
}

h2 {
  @include h2;
}

h3 {
  @include h3;
}

h4 {
  @include h4;
}

h5 {
  @include h5;
}

h6 {
  @include h6;
}
</style>