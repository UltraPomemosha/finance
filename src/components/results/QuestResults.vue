<script lang="ts" setup>
import type { IQuestResults } from "@/stores/quest-results/support";

const props = defineProps<IQuestResults>()
</script>

<template>
  <article class="quest-results">
    <h3 class="quest-results__title">{{ props.title }}</h3>
    <p class="quest-results__answers">
      Дан ответ на <span>{{ props.answers.success }}</span> из <span>{{ props.answers.all }}</span> вопросов
    </p>
    <p class="quest-results__time">
      Тест пройден за <span>{{ props.finishTime }}</span> секунд
    </p>
  </article>
</template>

<style lang="scss" scoped>
.quest-results {
  padding: $safe-padding;
  border: 2px solid $secondary-color;
  border-radius: 7px;

  &:not(:first-child) {
    margin-top: 20px;
  }

  &__title {
    @extend .text-24;
    color: $primary-color;
  }

  & > p {
    @extend .text-18;
    color: $primary-color;
  }
}
span {
  @extend .text-20-sb;
  color: $secondary-color;
}
</style>
