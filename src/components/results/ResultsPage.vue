<script lang="ts" setup>
import { useQuestResultsStore } from "@/stores/quest-results/questResults"
import UTitle from "@c/ui/u-title/UTitle.vue"
import { storeToRefs } from "pinia"
import QuestResults from "./QuestResults.vue"
const { results } = storeToRefs(useQuestResultsStore())
</script>

<template>
  <section class="results-page">
    <UTitle tag="h1" class="results-page__title">Результаты квестов: </UTitle>
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
