<script setup lang="ts">

import AppButton from "@/components/AppButton.vue";
import AppTitle from "@/components/AppTitle.vue";
import {REGISTRATION_FORM_LINK} from "~/constants/links";
</script>

<template>
  <div class="hero-banner">
    <NuxtImg
        src="/images/banner.webp"
        alt="Banner"
        class="hero-banner__image"
        loading="lazy"
        width="1000"
        height="1000"
    />
    <div class="hero-banner__content">
      <AppTitle
          size="h1"
          title='Станьте курьером у партнера Яндекс Лавки'
          class="hero-banner__title block-title--white"
      />
      <p class="hero-banner__description">Получайте до 230.000₽ в месяц*</p>
      <AppButton
          class="hero-banner__link"
          type="link"
          :href="REGISTRATION_FORM_LINK"
          title="Стать курьером"
          variant="secondary"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  &-banner {
    margin-bottom: 40px;
    background: var(--primary);
    border-radius: 0 0 0 100px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    height: 1000px;

    &__image {
      width: 50%;
      border-radius: 60px 0 0 60px;
      height: 100%;
      display: block;
      object-fit: cover;
    }

    &__content {
      width: 50%;
      padding: 0 60px;
    }

    &__description {
      @include h3;
      color: var(--head);
      margin-top: 40px;
    }

    &__link {
      margin-top: 60px;
    }
  }
}

@media (max-width: 992px) {
  .hero-banner {
    padding-top: 80px;
    border-radius: 0 0 40px 40px;
    margin-bottom: 30px;
    flex-direction: column;
    align-items: unset;
    height: unset;

    &__content {
      width: 100%;
      padding: 40px 20px;
    }

    &__image {
      width: 100%;
      aspect-ratio: 1 / 1;
      border-radius: 0 0 40px 40px;
    }

    &__link {
      margin-top: 30px;
    }
  }
}

@media (max-width: 480px) {
  .hero-banner {
    &__content {
      padding: 15px 15px 30px;
    }

    &__description {
      margin-top: 15px;
    }

    &__link {
      width: 100%;
    }
  }
}
</style>