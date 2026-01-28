<script setup lang="ts">

export interface IMenuItem {
  label: string;
  link: string;
  icon?: string;
}

const props = defineProps<{
  items: IMenuItem[];
  class?: string;
  direction?: 'horizontal' | 'vertical';
}>()

const classes = computed(() => [
  'nav-wrapper',
  props.direction && props.direction === 'vertical' && 'nav-vertical',
  props.class && props.class,
])

const emit = defineEmits(['link-click'])

</script>

<template>
  <nav v-if="props.items.length > 0" :class="classes">
    <ul class="nav-list">
      <li v-for="(item, index) in items" :key="index" class="nav-item">
        <NuxtLink :to="item.link" @click="emit('link-click')">
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  &-wrapper {
    flex: 1;
  }

  &-vertical {
    .nav-list {
      flex-direction: column;
      align-items: unset;
    }
  }

  &-list {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  &-item {
    a {
      font-size: clamp(0.9375rem, 0.8125rem + 0.625vw, 1.5625rem);
      color: var(--head);
      margin-bottom: 0;
      text-decoration: unset;
      font-weight: 900;
      transition: color .4s ease-out;
    }

    &:hover {
      a {
        color: var(--primary);
      }
    }
  }
}
</style>