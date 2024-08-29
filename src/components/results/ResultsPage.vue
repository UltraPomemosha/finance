<script lang="ts" setup>
import { useQuestResultsStore } from "@/stores/quest-results/questResults";
import { storeToRefs } from "pinia";
import QuestResults from "./QuestResults.vue";
const { results } = storeToRefs(useQuestResultsStore())
</script>

<template>
  <section class="results-page">
    <h2 class="results-page__title">Результаты квестов: </h2>
    <QuestResults
      v-for="result in results"
      :answers="result.answers"
      :finish-time="result.finishTime"
      :title="result.title"
      :key="result.title"
    />
  </section>
</template>

<style lang="scss" scoped>
.results-page {
  &__title {
    @extend .text-48;
    color: $secondary-color;
  }
}
</style>
