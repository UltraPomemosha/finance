<script lang="ts" setup>
import { tag } from "@/utils/tag"
import UText from "@c/ui/u-text/UText.vue"
import type { ITextProps } from "@c/ui/u-text/support"
import UTitle from "../ui/u-title/UTitle.vue"
import CompetitionCards from "./CompetitionCards.vue"

const pageDescription: ITextProps = {
  tag: tag("p"),
  config: {
    size: 24,
  },
}
</script>

<template>
  <section class="competition-page">
    <UTitle tag="h1" class="competition-page__title"> Запуск нового конкурса </UTitle>
    <UTitle tag="h2" class="competition-page__subtitle">
      Ребята и девчата, приглашаем Вас пройти увлекательный квест по финансовой грамотности!
    </UTitle>
    <UText :tag="pageDescription.tag" :config="pageDescription.config" class="competition-page__description">
      Погружайтесь в мир финансов через захватывающие задания и проверяйте свои знания! 🚀
    </UText>
    <CompetitionCards />
    <UText :tag="pageDescription.tag" :config="pageDescription.config">
      Не упустите шанс проверить свои знания и выиграть призы! 🎁💡
    </UText>
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
  }

  &__subtitle {
    margin-top: 10px;
  }

  &__description {
    margin-top: 30px;
  }
}
</style>
