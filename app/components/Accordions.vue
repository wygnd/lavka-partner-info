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
  title?: string;
  items: IAccordion[];
}

const props = defineProps<IAccordionProps>();

</script>

<template>
  <div class="accordion-block content-block">
    <AppContainer>
      <AppTitle v-if="props.title" :title="props.title" size="h2" class="accordion-block__title"/>
      <Accordion value="0">
        <AccordionPanel v-if="props.items.length > 0" v-for="tab in props.items" :key="tab.title" :value="tab.id"
                        class="accordion-block__item">
          <AccordionHeader class="accordion-block__item-title">{{ tab.title }}</AccordionHeader>
          <AccordionContent class="accordion-block__item-description">
            <p class="m-0">{{ tab.description }}</p>
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

  .p {
    &-accordionpanel {
      background: var(--background-light) !important;
      border-radius: 20px;
      margin-bottom: 10px;
      overflow: hidden;

    }

    &-accordionheader {
      background: var(--background-light) !important;
      border: none !important;
      color: var(--head) !important;

      svg {
        color: red !important;
      }
    }

    &-accordioncontent-content {
      background-color: var(--background-light) !important;
      color: var(--head) !important;
      border: none !important;
    }

  }
}
</style>