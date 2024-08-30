<script lang="ts" setup>
import { src } from "@/utils/src";
import UBlock from "@c/ui/u-block/UBlock.vue";
import UTitle from "@c/ui/u-title/UTitle.vue";
import { FINANCE_BLOCKS } from "./support";
</script>

<template>
  <section class="finance-page">
    <UTitle tag="h1" class="finance-page__title"> Финансовые лайфхаки </UTitle>
    <UBlock
      v-for="block in FINANCE_BLOCKS"
      :title="block.title"
      :card="block.card"
      class="finance-page__block"
      :key="block.title"
    >
      <img :src="src(block.img)" :alt="block.title">
    </UBlock>
  </section>
</template>

<style lang="scss" scoped>
.finance-page {
  &__block {
    margin-top: 40px;
    &:deep(.u-block-card__title) {
      text-transform: uppercase;
    }
  }
}
</style>
