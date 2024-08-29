<script lang="ts" setup>
import type { ITextProps } from "@/components/ui/u-text/support";
import { tag } from "@/utils/tag";
import UText from "@c/ui/u-text/UText.vue";
import QuestionVariant from "./QuestionVariant.vue";
import { type IQuestion } from "./support";

const props = defineProps<Omit<IQuestion, 'rightVariant'>>()

const selectedVariant = defineModel<string>({
  required: true
})

const questionTitle: ITextProps = {
  tag: tag("h2"),
  config: {
    size: 32,
  },
}

function onChangeVariant(e: Event) {
  const tag = (e.target as HTMLElement).tagName
  if (tag === 'INPUT') {
    selectedVariant.value = (e.target as HTMLInputElement).value
  }
}
</script>

<template>
  <article class="question">
    <UText :tag="questionTitle.tag" :config="questionTitle.config" class="question__title _title">
      {{ props.title }}
    </UText>
    <ul @click="onChangeVariant" class="question__variants">
      <li v-for="variant in props.variants" :key="variant" class="question__variant">
        <QuestionVariant :variant="variant" :question="props.title" :selected-variant="selectedVariant" />
      </li>
    </ul>
    <p class="question__description">
      <span>Объяснение.</span> {{ props.description }}
    </p>
  </article>
</template>

<style lang="scss" scoped>
.question {

  &__variant {
    margin-top: 30px;
    width: max-content;

    &:hover, &:focus, &:focus-visible {
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
