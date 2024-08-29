import { defineStore } from "pinia"
import { computed, reactive } from "vue"
import type { IQuestTime } from "./support"

export const useQuestTimeStore = defineStore("quest-time", () => {
  const time: IQuestTime = reactive({
    start: null,
    end: null,
  })

  const finishTime = computed<number>(() => {
    if (time.start !== null && time.end !== null) {
      const difference: string = `${time.end - time.start}`
      return +difference.slice(0, -3).concat(".", difference.at(-3)!)
    } else return 0
  })

  const setTime = (key: keyof IQuestTime): void => {
    time[key] = Date.now()
  }

  return {
    time,
    finishTime,
    setTime,
  }
})
