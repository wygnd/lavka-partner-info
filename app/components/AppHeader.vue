<script setup lang="ts">
import Logo from "~/components/Logo.vue";
import AppButton from "~/components/AppButton.vue";
import {REGISTRATION_FORM_LINK, TELEGRAM_LINK} from "~/constants/links";
import type {IMenuItem} from "~/components/AppMenu.vue";

const route = useRoute()

const headerClasses = computed(() => [
  'header',
])

const navItems: IMenuItem[] = [
  {label: 'Города', link: '#maps-block'},
  {label: 'Преимущества', link: '#advantages-block'},
  {label: 'Вопросы', link: '#questions-block'},
  {label: 'Задать вопрос', link: TELEGRAM_LINK},
  {label: 'Стать курьером', link: '#steps-block'},
];

const visible = ref<boolean>(false);
const isMobile = ref<boolean>(false);

let mediaQuery: MediaQueryList;

const updateIsMobile = () => {
  isMobile.value = mediaQuery.matches
}

onMounted(() => {
  mediaQuery = window.matchMedia('(max-width: 1700px)')
  updateIsMobile()
  mediaQuery.addEventListener('change', updateIsMobile)
})

onUnmounted(() => {
  mediaQuery.removeEventListener('change', updateIsMobile)
})

const closeModal = () => {
  visible.value = false;
}

</script>

<template>
  <header :class="headerClasses">
    <div class="header-wrapper">
      <div class="header-logo__wrapper">
        <Logo title="Партнер Я.Лавка" class="header-logo"/>
        <p class="header-logo__description">Партнер сервиса</p>
      </div>
      <AppMenu :items="navItems" class="header-menu"/>
      <AppButton class="header-button" type="link" title="Стать курьером" :href="REGISTRATION_FORM_LINK"/>
      <Button v-if="isMobile" icon="pi pi-bars" @click="visible = true" class="header-bars"/>
    </div>
  </header>
  <Drawer v-if="isMobile" v-model:visible="visible" class="header-mobile">
    <div class="header-mobile__wrapper">
      <AppMenu :items="navItems" class="header-mobile__menu" direction="vertical" @link-click="closeModal"/>
    </div>
  </Drawer>
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
    gap: 60px;
  }

  &-logo {
    &__wrapper {
      &:is(a) {
        cursor: pointer;
        text-decoration: none;
      }
    }

    &__description {

      text-align: right;
      font-size: clamp(0.625rem, 0.5625rem + 0.3125vw, 0.9375rem);
      font-weight: 400;
      color: var(--primary);
    }
  }

  &-button {
    &__wrapper {
      &:is(a) {
        text-decoration: none;
      }
    }
  }

  &-bars {
    font-size: 40px;
  }

  &-mobile {
    &__wrapper {
      padding-top: 20px;
    }
  }
}

@media (max-width: 1700px) {
  .header {
    &-wrapper {
      gap: 10px;
    }

    &-menu {
      display: none;
    }
  }
}

@media (max-width: 992px) {
  .header {
    padding: 10px 30px;
    width: calc(100% - 20px);
    top: 10px;

    &-wrapper {
      flex-wrap: wrap;
    }

    &-button {
      order: 3;
      width: 100%;
    }
  }
}

@media (max-width: 540px) {
  .header {
    padding: 10px 15px;

    &-wrapper {
      gap: 5px;
    }

    &-logo {
      font-size: 18px;
    }

    &-button {
      padding: 10px;
      font-size: 14px;
      border-radius: 10px;
    }

    &-bars {
      font-size: 30px;
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