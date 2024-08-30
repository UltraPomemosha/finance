<script lang="ts" setup>
import UTitle from "@c/ui/u-title/UTitle.vue";
import HomeSectionCard from "./HomeSectionCard.vue";
import { HOME_SECTION_CARDS } from "./support";

</script>

<template>
  <section class="home-page">
    <UTitle tag="h1" class="home-page__title">
      Твое финансовое Будущее в твоих руках!
    </UTitle>
    <img loading="lazy" src="/src/assets/images/home-welcome.png" alt="Добро пожаловать" class="home-page__img" />
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
    gap: 20px;

    grid-row: 1/-1;
    grid-column: 2/2;
  }
}
</style>
