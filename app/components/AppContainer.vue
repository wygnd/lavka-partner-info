<script setup lang="ts">
interface IContainerProps {
  width?: string
}

const props = withDefaults(defineProps<IContainerProps>(), {
  width: '992px'
})
</script>

<template>
  <div class="container" :style="[`max-width: ${props.width}px;`]">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  padding: 0 20px;
  margin-inline: auto;
}

@media (max-width: 520px) {
  .container {
    padding: 0 15px;
  }
}
</style>