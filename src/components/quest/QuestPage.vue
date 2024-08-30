<script lang="ts" setup>
import { useQuestResultsStore } from "@/stores/quest-results/questResults"
import { useQuestTimeStore } from "@/stores/quest-time/questTime"
import UButton from "@c/ui/u-button/UButton.vue"
import ULink from "@c/ui/u-link/ULink.vue"
import UTitle from "@c/ui/u-title/UTitle.vue"
import { onMounted, reactive, ref } from "vue"
import { TABLE_DATA } from "../results/support"
import Question from "./Question.vue"
import { getSuccessAnswersAmount, QUESTIONS, type IQuestion, type IQuestState } from "./support"

const questTimeStore = useQuestTimeStore()
const questResultsStore = useQuestResultsStore()

const isTestFinished = ref(false)

const initQuestState = (questions: IQuestion[]): IQuestState => {
  const state: IQuestState = {} // [question.title]: selectedVariant(question.variants[number] | '')
  for (const question of questions) state[question.title] = ""
  return state
}

const questState: IQuestState = reactive(initQuestState(QUESTIONS))

function submit() {
  questTimeStore.setTime("end")
  questResultsStore.setNewResult({
    title: "🌟 Квест по Финансовой грамотности! 🌟",
    answers: {
      success: getSuccessAnswersAmount(QUESTIONS, questState),
      all: QUESTIONS.length,
    },
    finishTime: questTimeStore.finishTime,
  })
  isTestFinished.value = true
  scrollTo({
    top: 0,
    behavior: "smooth",
  })
  TABLE_DATA.push({
    name: 'Анонимный',
    answers: {
      success: getSuccessAnswersAmount(QUESTIONS, questState),
      all: QUESTIONS.length,
    },
    finishTime: questTimeStore.finishTime
  })
}

onMounted(() => {
  questTimeStore.setTime("start")
})
</script>

<template>
  <section class="quest-page">
    <UTitle tag="h1" class="quest-page__title">🌟 Квест по Финансовой грамотности! 🌟</UTitle>
    <Question
      v-for="question in QUESTIONS"
      v-model="questState[question.title]"
      :description="question.description"
      :is-test-finished="isTestFinished"
      :title="question.title"
      :variants="question.variants"
      :right-variant="question.rightVariant"
      :key="question.title"
      class="quest-page__question"
    />
    <UButton @click="submit" class="quest-page__button" :disabled="isTestFinished"> Отправить </UButton>
    <ULink type="link" to="/results" class="quest-page__go-to-results"> Перейти к результатам </ULink>
  </section>
</template>

<style lang="scss" scoped>
.quest-page {
  &__question {
    margin-top: 50px;
  }

  &__button {
    margin-top: 20px;
  }

  &__go-to-results {
    margin-top: 10px;

    @extend .text-20;
    color: $secondary-color;
    text-decoration: underline;
  }
}
</style>
