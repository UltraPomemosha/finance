<script lang="ts" setup>
import { src } from "@/utils/src";
import UBlock from "@c/ui/u-block/UBlock.vue";
import UTitle from "@c/ui/u-title/UTitle.vue";
import { LEARNING_BLOCKS } from "./support";
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
      <img loading="lazy" :src="src(block.img)" :alt="block.card.title" />
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
