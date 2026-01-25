<script setup lang="ts">
import Logo from "~/components/Logo.vue";
import AppButton from "~/components/AppButton.vue";
import {REGISTRATION_FORM_LINK} from "~/constants/links";

const route = useRoute()

const headerClasses = computed(() => [
  'header',
  route.fullPath !== '/' && 'header--sticky'
])

</script>

<template>
  <header :class="headerClasses">
    <div class="header-wrapper">
      <NuxtLink v-if="route.fullPath != '/'" to="/" class=header-logo__wrapper>
        <Logo title="Партнер Я.Лавка" class="header-logo"/>
      </NuxtLink>
      <Logo v-else title="Партнер Я.Лавка" class="header-logo"/>
      <AppButton class="header-button" type="link" title="Стать курьером" :href="REGISTRATION_FORM_LINK"/>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  padding: 15px 30px;
  width: calc(100% - 60px);
  top: 30px;
  left: 50%;
  transform: translateX(-50%);

  background: var(--card);
  border-radius: 15px;
  z-index: 100;
  box-shadow: inset 0 -1px 0 #eaeaea, 0rem 2rem 5rem rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) 0px 10px 50px;

  &--sticky {
    position: sticky;
    transform: unset;
    left: 0;
    margin-inline: auto;
  }

  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  &-logo {
    &__wrapper {
      &:is(a) {
        cursor: pointer;
        text-decoration: none;
      }
    }
  }

  &-button {
    &__wrapper {
      &:is(a) {
        text-decoration: none;
      }
    }
  }
}

@media (max-width: 992px) {
  .header {
    padding: 10px 30px;
    width: calc(100% - 20px);
    top: 10px;
  }
}

@media (max-width: 540px) {
  .header {
    padding: 7px 10px;
    gap: 5px;

    &-logo {
      font-size: 18px;
    }

    &-button {
      width: fit-content;
      padding: 10px;
      font-size: 14px;
      border-radius: 10px;
    }
  }
}

@media (max-width: 370px) {
  .header {
    &-logo {
      font-size: 15px;
    }

    &-button {
      font-size: 12px;
    }
  }
}
</style>