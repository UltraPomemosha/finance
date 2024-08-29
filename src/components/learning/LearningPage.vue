<script lang="ts" setup>
import LearningBlock from "./LearningBlock.vue";
import { LEARNING_BLOCKS } from "./support";

const imageSrc = (src: string): string => (new Image().src = src)
</script>

<template>
  <section class="learning-page">
    <h1 class="learning-page__title">Обучение</h1>
    <LearningBlock
      v-for="block in LEARNING_BLOCKS"
      :title="block.title"
      :card="block.card"
      :key="block.title"
      class="learning-page__block"
    >
      <img :src="imageSrc(block.img)" :alt="block.card.title" />
    </LearningBlock>
  </section>
</template>

<style lang="scss" scoped>
.learning-page {
  &__title {
    @extend .text-48;
    color: $secondary-color;
    text-align: center;
    font-family: $secondary-font;
  }

  &__block {
    margin-top: 40px;
  }
}
</style>
