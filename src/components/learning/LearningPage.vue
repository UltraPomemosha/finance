<script lang="ts" setup>
import UBlock from "@c/ui/u-block/UBlock.vue";
import UTitle from "@c/ui/u-title/UTitle.vue";
import { LEARNING_BLOCKS } from "./support";

const imageSrc = (src: string): string => (new Image().src = src)
</script>

<template>
  <section class="learning-page">
    <UTitle tag="h1" class="learning-page__title">Обучение</UTitle>
    <UBlock
      v-for="block in LEARNING_BLOCKS"
      :title="block.title"
      :card="block.card"
      :key="block.title"
      class="learning-page__block"
    >
      <img loading="lazy" :src="imageSrc(block.img)" :alt="block.card.title" />
    </UBlock>
  </section>
</template>

<style lang="scss" scoped>
.learning-page {
  &__block {
    margin-top: 40px;
  }
}
</style>
