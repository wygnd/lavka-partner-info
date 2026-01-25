<script setup lang="ts">

</script>

<template>
  <AppHeader/>
  <main class="error-page">
    <AppContainer>
      <div class="error-wrapper">
        <div class="error-code">404</div>
        <div class="error-content">
          <h1 class="error-title">Произошла ошибка</h1>
          <div class="error-description">
            <p class="error-description__paragraph">Данная страница находится в разработке или её не существует.
              Пожалуйста, вернитесь на главную</p>
            <AppButton
                title="Вернуться на главную"
                type="link"
                href="/"
                class="error-description__button"
            />
          </div>
        </div>
      </div>
    </AppContainer>
  </main>
  <AppFooter/>
</template>

<style scoped lang="scss">
.error {
  &-page {
    display: flex;
    align-items: center;
  }

  &-wrapper {
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  &-code {
    font-size: clamp(7.5rem, 5.875rem + 8.125vw, 15.625rem);
    color: var(--head);
    font-weight: 900;
    line-height: 110%;
  }

  &-title {
    @include h1;
    text-align: center;
    color: var(--head);
    margin-bottom: 20px;
  }

  &-description {
    &__paragraph {
      @include p3;
      text-align: center;
      color: var(--head);
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__button {
      margin-inline: auto;
      margin-top: 40px;
    }
  }

}
</style>