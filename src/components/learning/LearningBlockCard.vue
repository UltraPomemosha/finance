<script lang="ts" setup>
import UTitle from "@c/ui/u-title/UTitle.vue";
import type { IBlockCard } from "./support";

const props = defineProps<IBlockCard>()
</script>

<template>
  <article class="block-card">
    <UTitle tag="h3" class="block-card__title">{{ props.title }}</UTitle>
    <slot></slot>
    <p class="block-card__description">{{ props.description }}</p>
  </article>
</template>

<style lang="scss" scoped>
.block-card {
  padding: 20px 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content 1fr;
  gap: $normal-gap;

  &__title {
    grid-row: 1/1;
    grid-column: 1/3;
    padding: 10px;
    border-radius: 20px;
    background: $white-smoke-color;

    color: $primary-color;
    text-align: center;
    font-family: $secondary-font;
  }

  &__description {
    align-self: center;
    justify-self: center;
    padding: 30px;

    border-radius: 20px;
    background-color: $white-smoke-color;
    color: $primary-color;
    @extend .text-32;
  }

  :slotted(*) {
    align-self: center;
    justify-self: center;
  }
}
</style>
