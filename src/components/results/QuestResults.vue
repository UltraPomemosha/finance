<script lang="ts" setup>
import type { IQuestResults } from "@/stores/quest-results/support";
import UTitle from "@c/ui/u-title/UTitle.vue";
import QuestTable from "./QuestTable.vue";
import { TABLE_DATA } from "./support";

const props = defineProps<IQuestResults>()
</script>

<template>
  <article class="quest-results">
    <UTitle tag="h4" class="quest-results__title">{{ props.title }}</UTitle>
    <p class="quest-results__answers">
      Правильный ответ дан на <span>{{ props.answers.success }}</span> из <span>{{ props.answers.all }}</span> вопросов
    </p>
    <p class="quest-results__time">
      Тест пройден за <span>{{ props.finishTime }}</span> секунд
    </p>
    <QuestTable :data="TABLE_DATA" :competition-title="props.title" />
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
