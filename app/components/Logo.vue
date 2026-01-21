<script setup lang="ts">

const props = defineProps<{
  title: string
}>()

</script>

<template>
  <h2 class="logo-title">{{ title }}</h2>
</template>

<style lang="scss" scoped>
.logo {
  &-title {
    @include h4;
    color: var(--primary);
  }
}
</style>