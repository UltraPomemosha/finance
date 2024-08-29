<script lang="ts" setup>
import UTitle from "@c/ui/u-title/UTitle.vue";
import LearningBlockCard from "./LearningBlockCard.vue";
import type { ILearningBlock } from "./support";

const props = defineProps<Omit<ILearningBlock, "img">>()
</script>

<template>
  <section class="learning-block">
    <UTitle tag="h2" class="learning-block__title">
      {{ props.title }}
    </UTitle>
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

    color: $white-color;
    text-align: center;
    text-transform: uppercase;
    font-family: $secondary-font;
  }
}
</style>
