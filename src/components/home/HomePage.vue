<script lang="ts" setup>
import { tag } from "@/utils/tag"
import UText from "@c/ui/u-text/UText.vue"
import type { ITextConfig } from "@c/ui/u-text/support"
import HomeSectionCard from "./HomeSectionCard.vue"
import { HOME_SECTION_CARDS } from "./support"

const homePageTitleTag = tag("h1")
const homePageTitleConfig: ITextConfig = {
  size: 48,
}
</script>

<template>
  <section class="home-page">
    <UText :tag="homePageTitleTag" :config="homePageTitleConfig" class="home-page__title">
      Твое финансовое Будущее в твоих руках!
    </UText>
    <img src="/src/assets/images/home-welcome.png" alt="" class="home-page__img" />
    <div class="home-page__cards">
      <HomeSectionCard
        v-for="card in HOME_SECTION_CARDS"
        :title="card.title"
        :description="card.description"
        :icon-name="card.iconName"
        :key="card.title"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home-page {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content auto;
  column-gap: 30px;
  row-gap: 100px;

  &__title {
    grid-row: 1/1;
    grid-column: 1/1;
    color: $secondary-color;
    font-family: $secondary-font;
  }
  
  &__img {
    grid-row: 2/2;
    grid-column: 1/1;
  }

  &__cards {
    padding: 40px 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;

    grid-row: 1/-1;
    grid-column: 2/2;
  }
}
</style>
