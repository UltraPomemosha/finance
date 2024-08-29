<script lang="ts" setup>
import { useQuestResultsStore } from "@/stores/quest-results/questResults"
import { useQuestTimeStore } from "@/stores/quest-time/questTime"
import UButton from "@c/ui/u-button/UButton.vue"
import ULink from "@c/ui/u-link/ULink.vue"
import { onMounted, reactive, ref } from "vue"
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
}

onMounted(() => {
  questTimeStore.setTime("start")
})
</script>

<template>
  <section class="quest-page">
    <h1 class="quest-page__title _title">🌟 Квест по Финансовой грамотности! 🌟</h1>
    <Question
      v-for="question in QUESTIONS"
      v-model="questState[question.title]"
      :description="question.description"
      :is-test-finished="isTestFinished"
      :title="question.title"
      :variants="question.variants"
      :key="question.title"
      class="quest-page__question"
    />
    <UButton @click="submit" class="quest-page__button"> Отправить </UButton>
    <ULink type="link" :title-config="{ size: 20 }" to="/results" class="quest-page__go-to-results">
      Перейти к результатам
    </ULink>
  </section>
</template>

<style lang="scss" scoped>
.quest-page {
  &__title {
    @extend .text-48;
    color: $secondary-color;
    text-align: center;
  }

  &__question {
    margin-top: 50px;
  }

  &__button {
    margin-top: 20px;
  }

  &__go-to-results {
    margin-top: 10px;
    :deep(span) {
      color: $secondary-color;
      text-decoration: underline;
    }
  }
}
</style>

<style lang="scss">
._title {
  font-family: $secondary-font;
}
</style>
