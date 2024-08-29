<script lang="ts" setup>
import type { IBlockCard } from "./support";

const props = defineProps<IBlockCard>()
</script>

<template>
  <article class="block-card">
    <h3 class="block-card__title">{{ props.title }}</h3>
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
    text-align: center;

    @extend .text-36;
    font-family: $secondary-font;
    color: $primary-color;
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
