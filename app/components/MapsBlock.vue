<script setup lang="ts">
import Popover from 'primevue/popover';
import {ref} from 'vue'

interface IMapsProps {
  id: string;
}

const props = defineProps<IMapsProps>();

interface ICity {
  id: string;
  name: string;
  map: string;
}

const cities = [
  {
    id: 'moscow',
    name: 'Москва',
    map: 'https://yandex.ru/map-widget/v1/?display-text=%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%20%D0%9B%D0%B0%D0%B2%D0%BA%D0%B0&ll=37.727253%2C55.754535&mode=search&sctx=ZAAAAAgBEAAaKAoSCUIIyJdQsUJAEVg4SfPHyktAEhIJCqAYWTLnBUARJ2a9GMoJ7D8iBgABAgMEBSgKOABA1QFIAWoCcnWdAc3MzD2gAQCoAQC9AbYjE0vCAZIB9%2FyW9N4F4uT%2B%2F%2BwEs4iWi6gGhfu7hBeb4LCMsAH%2Fme%2Fdtwbnsojo0wWUifn%2BqQTTkZjytgPBg%2FjcJZKvpLOdBfDJ39OVBPGwzJr7Bqe4opvkAqP6%2B9vHAbS77qGPBve%2FuczcA6iM3OKUAvKNpd8JkLiD6tEF%2F4Pjma4BwYTf5dUCi%2B2zjXOX6a%2FEpwPjpaOitQWCAhooKGNoYWluX2lkOig5MTgzNzUxMjQ2OSkpKYoCAJICAJoCDGRlc2t0b3AtbWFwc6oC7QE5MTgzNzUxMjQ2OSwxNTkyNTEwMzE5LDEyODQ3NTU1MzcsMTEzMjA0NjgwOTc5LDY4NjQ1MjY1ODkxLDM3OTg3OTQ0MDE2LDM2MDkwMTIwODYwLDczODg2NDY5MDUzLDE3Mjg4MzE5NDIyMCw1Mjc0ODM0ODkyNCwxNzg4OTAyMDAxNjgsNjAwMzAyMiw3MDM4OTI5Nzc2MywyMzgzOTI4NTc3MzIsNjg5MTkzMzI4MDYsOTgzMjI3Mjc4NjYsMTgxMTk1ODU2ODM2LDM4ODkwMzc1Nzc3LDc4NDM0MzMyMjgxLDIzMDk1Njc2MzewAgHaAigKEglyMQbWceRCQBHIrwibc%2BBLQBISCSB0l8RZEfM%2FEQB%2Fj%2FJ6Tdg%2F4AIB&sll=37.727253%2C55.754535&sspn=0.786252%2C0.250521&text=%7B%22text%22%3A%22%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%20%D0%9B%D0%B0%D0%B2%D0%BA%D0%B0%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%2291837512469%22%5D%7D%5D%7D&z=11.29',
  },
  {
    id: 'spb',
    name: 'Санкт-Петербург',
    map: 'https://yandex.ru/map-widget/v1/?display-text=%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%20%D0%9B%D0%B0%D0%B2%D0%BA%D0%B0&ll=30.452827%2C59.951316&mode=search&sctx=ZAAAAAgBEAAaKAoSCegSDr3FFz5AERiV1Alo%2BE1AEhIJ7fKtD%2BtNAUARhCugUE%2Bf4z8iBgABAgMEBSgKOABAvYIGSAFqAnJ1nQHNzMw9oAEAqAEAvQG2IxNLwgGTAc2r3e34BfOGxOG1A%2FWS38jWBfOK4vi4A%2FSvvdzNBPurhba0BpL965m0AqrOi8%2BpBPm75c3eAsr36ar%2FAcPUh4hohtfr6PoChOOPusUBlIiStdcG4u662IMCopzymO0Fo5mSlpMGjOPLjMQE1LSYqiiC3veZMNa866uEBJTIuYL1BqHa%2F9u4A%2Fqn79TxBN2XgKaTA4ICGigoY2hhaW5faWQ6KDkxODM3NTEyNDY5KSkpigIAkgIAmgIMZGVza3RvcC1tYXBzqgILOTE4Mzc1MTI0NjmwAgHaAigKEgnvj%2FeqlX0%2BQBFrNlEEOPlNQBISCQD1EI3uIO4%2FEQA67DorFNE%2F4AIB&sll=30.452827%2C59.951316&sspn=0.713539%2C0.202213&text=%7B%22text%22%3A%22%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%20%D0%9B%D0%B0%D0%B2%D0%BA%D0%B0%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%2291837512469%22%5D%7D%5D%7D&z=11.43',
  },
];

const activeCity = ref(cities[0]);
const popoverRef = ref();

const selectCity = (city: ICity) => {
  activeCity.value = city
  popoverRef.value.hide()
}

const togglePopover = (event: Event) => {
  popoverRef.value?.toggle(event)
}
</script>

<template>
  <div v-if="activeCity" :id="props.id" class="maps-block content-block">
    <AppContainer>
      <div class="maps-block__head">
        <AppTitle title="Где можно работать?" size="h2" class="maps-block__title"/>
        <AppButton
            type="button"
            :title="activeCity.name"
            @click="popoverRef?.toggle($event)"
            class="maps-block__select"
            icon="pi-angle-down"
        />
      </div>

      <Popover ref="popoverRef">
        <div class="maps-list">
          <div
              v-for="city in cities"
              :key="city.id"
              :class="{
                active: city.id === activeCity.id
               }"
              class="maps-list__item"
              @click="selectCity(city)"
          >
            {{ city.name }}
          </div>
        </div>
      </Popover>
      <div class="maps-block__wrapper">
        <iframe
            :key="activeCity.id"
            :src="activeCity.map"
            width="100%"
            height="400"
        />
      </div>
    </AppContainer>
  </div>
</template>

<style scoped lang="scss">
.maps {
  &-block {
    &__head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 10px 30px;
      margin-bottom: 60px;
    }

    &__title {
      font-size: clamp(1.875rem, 1.375rem + 2.5vw, 4.375rem);
    }

    &__select {
      width: fit-content;
    }

    &__wrapper {
      margin-top: 40px;
      width: 100%;
      height: 800px;
      overflow: hidden;
      border-radius: 20px;
      border: 2px solid var(--primary);
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

      iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
    }
  }

  &-list {
    &__item {
      margin-top: 15px;

      &:first-child {
        margin-top: 0;
      }
    }
  }
}

@media (max-width: 992px) {
  .maps-block {
    &__head {
      margin-bottom: 30px;
    }

    &__wrapper {
      height: 500px;
    }
  }
}

@media (max-width: 520px) {
  .maps-block {
    padding: 30px 0;

    &__select {
      width: 100%;
    }

    &__wrapper {
      margin-top: 30px;
      height: 500px;
    }
  }
}
</style>