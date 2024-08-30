<script lang="ts" setup>
import UTitle from "@c/ui/u-title/UTitle.vue";
import type { UBlock } from "./support";

const props = defineProps<UBlock>()
</script>

<template>
  <section class="u-block">
    <UTitle tag="h2" class="u-block__title">
      {{ props.title }}
    </UTitle>
    <article class="u-block-card">
      <UTitle tag="h3" class="u-block-card__title text-36">{{ props.card.title }}</UTitle>
      <slot></slot>
      <p class="u-block-card__description">{{ props.card.description }}</p>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.u-block {
  border: 5px solid rgb(0, 123, 255);
  border-radius: 20px;
  background-color: rgb(225, 232, 244);
  overflow-y: hidden;

  &__title {
    padding: 10px;
    background-color: $secondary-color;
    border-radius: 0 0 20px 20px;

    color: $white-color;
    text-align: center;
    text-transform: uppercase;
    font-family: $secondary-font;
  }
}

.u-block-card {
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
    @extend .text-30;
  }

  :slotted(*) {
    align-self: center;
    justify-self: center;
  }
}
</style>
