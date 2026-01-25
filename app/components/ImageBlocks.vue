<script setup lang="ts">

</script>

<template>
  <div class="images-block">
    <AppContainer>
      <div class="images-block__wrapper">
        <ImageBlock
            :title="{
              title: 'Транспорт для Доставок',
              size: 'h3',
            }"
            image="./images/slide-bicycle.webp"
        />
        <ImageBlock
            :title="{
              title: 'Экипировка для Доставок',
              size: 'h3',
            }"
            image="./images/slide-equipment.webp"
        />
      </div>
    </AppContainer>
  </div>
</template>

<style scoped lang="scss">
.images-block {
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  }
}

@media (max-width: 992px) {
  .images-block {
    &__wrapper {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;

      .image-block {
        padding: 0;
      }
    }
  }
}
</style>