<script setup lang="ts">


import {SITE_DESCRIPTION, SITE_TITLE} from "~/constants/meta";

useSeoMeta({
  title: SITE_TITLE,
  ogTitle: SITE_TITLE,
  description: SITE_DESCRIPTION,
  ogDescription: SITE_DESCRIPTION,
  charset: 'utf-8',
})

</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
