<script setup lang="ts">

interface IButtonProps {
  title: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'card';
  icon?: string;
}

interface IButtonDefaultProps extends IButtonProps {
  type: 'button';
}

interface IButtonLinkProps extends IButtonProps {
  type: 'link';
  href?: string;
}

interface IButtonTextProps extends IButtonProps {
  type: 'text',
}

export type TButtonProps = IButtonDefaultProps | IButtonLinkProps | IButtonTextProps;

const props = defineProps<TButtonProps>()

const classes = computed(() => [
  'button',
  props.variant && `button--${props.variant}`,
  props.className,
])

</script>

<template>
  <button
      v-if="props.type === 'button'"
      :class="classes"
  >{{ props.title }}
    <span v-if="props.icon" :class="['pi', props.icon]"></span>
  </button>
  <a
      v-else-if="props.type === 'link'"
      :class="classes"
      :href="props.href"
  >
    {{ props.title }}
    <span v-if="props.icon" :class="['pi', props.icon]"></span>
  </a>
  <div :class="classes" v-else-if="props.type === 'text'">
    {{ title }}
    <span v-if="props.icon" :class="['pi', props.icon]"></span>
  </div>
</template>

<style scoped lang="scss">
.button {
  font-style: normal;
  @include menu;
  color: var(--card);
  padding: 15px 30px;
  border-radius: 15px;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
  width: fit-content;
  text-align: center;
  border: none;
  transition: background-color 0.2s;

  &:hover {
    background: var(--hover);
  }

  &--card {
    background: var(--card);
    color: var(--primary);

    &:hover {
      background: var(--card);
      color: var(--primary);
    }
  }

  &--secondary {
    background: var(--secondary);
    color: var(--card);

    &:hover {
      background: var(--hover);
      color: var(--card);
    }
  }
}

@media (max-width: 520px) {
  .button {
    padding: 15px 30px;
  }
}
</style>