<script setup lang="ts">

</script>

<template>
  <footer class="footer">
    <AppContainer>
      <AppTitle title="Партнер Я.Лавка" size="h2" class="footer-title"/>
      <div class="footer-content">
        <p class="footer-content__paragraph">
          * Доход указан по данным статистики сервиса Яндекс Еда. Условия и результаты индивидуальны и могут отличаться
          от указанных.
        </p>
        <p class="footer-content__paragraph">
          ** Для курьеров, сотрудничающих с сервисом Яндекс Лавка в статусе самозанятых. Выплаты за
          пятницу, субботу, воскресенье производятся в понедельник. Яндекс Лавка — раздел информационного сервиса Яндекс
          Еда, подробнее: clck.ru/QgJpy. Сотрудничество с организациями, оказывающими услуги по сборке и доставке
          заказов, оформленных с помощью сервиса Яндекс Еда. Чтобы узнать подробности, отправьте заявку. Для
          сотрудничества с организацией, оказывающей услуги по доставке заказов, совершенных через сервис Яндекс Еда
          требуется достижение возраста 18 лет.
        </p>
        <p class="footer-content__paragraph footer-content__copiright">
          © {{ new Date().getFullYear() }} Партнер сервиса ИП Ратников Станислав Александрович
        </p>
      </div>
    </AppContainer>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  border-radius: 30px 30px 0 0;
  margin-top: 40px;
  padding: 30px 0;
  background: var(--background-light);

  &-title {
    color: var(--color-light);
    text-align: center;
    margin-bottom: 20px;
    padding-bottom: 30px;
    border-bottom: 1px solid var(--color-light);
  }

  &-content {
    &__paragraph {
      @include p2;
      line-height: 160%;
      text-align: center;
      color: var(--color-light);
    }
  }
}
</style>