<script lang="ts" setup>
import UTitle from "../ui/u-title/UTitle.vue"
import CompetitionCards from "./CompetitionCards.vue"
</script>

<template>
  <section class="competition-page">
    <UTitle tag="h1" class="competition-page__title"> Запуск нового конкурса </UTitle>
    <UTitle tag="h2" class="competition-page__subtitle">
      Ребята и девчата, приглашаем Вас пройти увлекательный квест по финансовой грамотности!
    </UTitle>
    <p class="competition-page__text">
      Погружайтесь в мир финансов через захватывающие задания и проверяйте свои знания! 🚀
    </p>
    <CompetitionCards />
    <p class="competition-page__text">Не упустите шанс проверить свои знания и выиграть призы! 🎁💡</p>
  </section>
</template>

<style lang="scss" scoped>
.competition-page {
  &__title,
  &__subtitle,
  &__description {
    max-width: 70rem;
    width: 100%;
    min-width: 280px;
    font-family: $secondary-font;
    text-align: left;
  }

  &__subtitle {
    margin-top: 10px;
  }

  &__text {
    margin-top: 30px;
    @extend .text-24;
    color: $primary-color;
  }
}
</style>
