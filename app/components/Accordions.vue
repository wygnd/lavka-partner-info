<script setup lang="ts">
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';


export interface IAccordion {
  id: string;
  title: string;
  description: string;
}

interface IAccordionProps {
  id: string;
  title?: string;
  items: IAccordion[];
}

const props = defineProps<IAccordionProps>();

</script>

<template>
  <div :id="props.id" class="accordion-block content-block">
    <AppContainer>
      <AppTitle v-if="props.title" :title="props.title" size="h2" class="accordion-block__title"/>
      <Accordion class="accordion-block__items" expandIcon='pi pi-chevron-down' collapseIcon="pi pi-chevron-up">
        <AccordionPanel v-if="props.items.length > 0" v-for="tab in props.items" :key="tab.title" :value="tab.id"
                        class="accordion-block__item">
          <AccordionHeader class="accordion-block__item-title">{{ tab.title }}</AccordionHeader>
          <AccordionContent class="accordion-block__item-description">
            {{ tab.description }}
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </AppContainer>
  </div>
</template>

<style scoped lang="scss">
.accordion-block {
  &__title {
    margin-bottom: 20px;
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px 15px;
  }

  &__item {
    border: none;
    background: var(--background-light);
    border-radius: 30px;
    overflow: hidden;
    padding: 30px;

    &:last-child {
      margin-bottom: 0;
    }

    &-title {
      text-wrap: balance;
      background: var(--background-light);
      border: none;
      color: var(--head) !important;
      @include h6;
    }

    &-description {
      margin-top: 20px;

      * {
        color: var(--head);
        border: none !important;
        @include p3;
        font-weight: 400;
      }
    }
  }
}

@media (max-width: 992px) {
  .accordion-block {
    &__items {
      grid-template-columns: 100%;
      gap: 10px;
    }

    &__item {
      padding: 20px;
      border-radius: 20px;
    }
  }
}
</style>