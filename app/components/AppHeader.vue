<script setup lang="ts">

import Logo from "~/components/Logo.vue";
import AppButton from "~/components/AppButton.vue";
</script>

<template>
  <header>
    <Logo title="Партнер Яндекс Лавки"/>
    <AppButton class="header-button" type="link" title="Стать курьером" href="https://google.com"/>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  width: calc(100% - 20px);
  max-width: 942px;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 30px;
  background: var(--card);
  border-radius: 15px;
  z-index: 100;
  box-shadow: inset 0 -1px 0 #eaeaea, 0rem 2rem 5rem rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) 0px 10px 50px;
}

@media (max-width: 520px) {
  header {
    padding: 10px 15px;
    gap: 15px;
    flex-direction: column;

    .header-button {
      width: 100%;
    }
  }
}
</style>