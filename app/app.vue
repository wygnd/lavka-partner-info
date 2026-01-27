<script setup lang="ts">


import {SITE_DESCRIPTION, SITE_TITLE} from "~/constants/meta";


useSeoMeta({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  ogTitle: SITE_TITLE,
  ogDescription: SITE_DESCRIPTION,
  twitterTitle: SITE_TITLE,
  twitterDescription: SITE_DESCRIPTION,
  titleTemplate: SITE_TITLE,
  appleMobileWebAppTitle: SITE_TITLE,
  ogSiteName: SITE_TITLE,
  ogType: "website",
  ogUrl: useRequestURL().origin,
  charset: 'utf-8',
  mobileWebAppCapable: 'yes',
})

</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
