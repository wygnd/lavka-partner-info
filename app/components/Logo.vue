<script setup lang="ts">

interface ILogoProps {
  title: string;
  class?: string;
}

const props = defineProps<ILogoProps>();

const classes = computed(() => [
  props.class && props.class,
  'logo-title',
]);

</script>

<template>
  <h2 :class="classes">{{ props.title }}</h2>
</template>

<style lang="scss" scoped>
.logo {
  &-title {
    @include h4;
    color: var(--primary);
    line-height: 110%;
  }
}
</style>