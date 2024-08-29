<script lang="ts" setup>
import UTitle from "@c/ui/u-title/UTitle.vue";
import QuestionVariant from "./QuestionVariant.vue";
import { type IQuestion } from "./support";

interface Props extends Omit<IQuestion, "rightVariant">{
  isTestFinished: boolean
}

const props = defineProps<Props>()

const selectedVariant = defineModel<string>({
  required: true,
})

function onChangeVariant(e: Event) {
  const tag = (e.target as HTMLElement).tagName
  if (tag === "INPUT") {
    selectedVariant.value = (e.target as HTMLInputElement).value
  }
}
</script>

<template>
  <article class="question">
    <UTitle tag="h3" class="question__title">
      {{ props.title }}
    </UTitle>
    <ul @click="onChangeVariant" class="question__variants">
      <li v-for="variant in props.variants" :key="variant" class="question__variant">
        <QuestionVariant :disabled="isTestFinished" :variant="variant" :question="props.title" :selected-variant="selectedVariant" />
      </li>
    </ul>
    <p v-if="isTestFinished" class="question__description"><span>Объяснение.</span> {{ props.description }}</p>
  </article>
</template>

<style lang="scss" scoped>
.question {
  &__title {
    font-family: $secondary-font;
  }
  &__variant {
    margin-top: 30px;
    width: max-content;

    &:hover,
    &:focus,
    &:focus-visible {
      outline: 2px solid $secondary-color;
      outline-offset: 1px;
    }
  }

  &__description {
    margin-top: 30px;
    @extend .text-20;
    color: $primary-color;

    & > span {
      color: $secondary-color;
    }
  }
}
</style>
