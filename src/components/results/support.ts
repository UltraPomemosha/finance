import type { IQuestResults } from "@/stores/quest-results/support"

export interface IQuestTableData extends Omit<IQuestResults, "title"> {
  name: string
}

// constants
export const TABLE_DATA: IQuestTableData[] = [
  {
    name: "Константин",
    answers: {
      success: 9,
      all: 9,
    },
    finishTime: 15.3,
  },
  {
    name: "Артём Вапилов",
    answers: {
      success: 9,
      all: 9,
    },
    finishTime: 15.9,
  },
  {
    name: "Артём",
    answers: {
      success: 9,
      all: 9,
    },
    finishTime: 15.9,
  },
]
