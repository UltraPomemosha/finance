import { defineStore } from "pinia"
import { ref } from "vue"
import type { IQuestResults } from "./support"

export const useQuestResultsStore = defineStore("quest-results", () => {
  const results = ref<IQuestResults[]>([])

  const setNewResult = (newResult: IQuestResults) => {
    results.value.unshift(newResult)
  }

  return {
    results,
    setNewResult,
  }
})
