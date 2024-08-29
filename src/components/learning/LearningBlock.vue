<script lang="ts" setup>
import LearningBlockCard from "./LearningBlockCard.vue";
import type { ILearningBlock } from "./support";

const props = defineProps<Omit<ILearningBlock, "img">>()
</script>

<template>
  <section class="learning-block">
    <h2 class="learning-block__title">
      {{ props.title }}
    </h2>
    <LearningBlockCard :title="props.card.title" :description="props.card.description">
      <slot></slot>
    </LearningBlockCard>
  </section>
</template>

<style lang="scss" scoped>
.learning-block {
  border: 5px solid rgb(0, 123, 255);
  border-radius: 20px;
  background-color: rgb(225, 232, 244);
  overflow-y: hidden;
  &__title {
    padding: 10px;
    background-color: $secondary-color;
    border-radius: 0 0 20px 20px;

    @extend .text-36;
    font-family: $secondary-font;
    color: $white-color;
    text-align: center;
    text-transform: uppercase;
  }
}
</style>
