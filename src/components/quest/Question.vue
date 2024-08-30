<script lang="ts" setup>
import UTitle from "@c/ui/u-title/UTitle.vue";
import QuestionVariant from "./QuestionVariant.vue";
import { type IQuestion } from "./support";

interface Props extends IQuestion {
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
    <template v-if="props.isTestFinished">
      <ul @click="onChangeVariant" class="question__variants">
        <li
          v-for="variant in props.variants"
          :key="variant"
          class="question__variant"
          :class="[
            { _error: variant === selectedVariant && variant !== props.rightVariant },
            { _right: variant === props.rightVariant },
            { _disabled: props.isTestFinished },
          ]"
        >
          <QuestionVariant
            :disabled="props.isTestFinished"
            :variant="variant"
            :question="props.title"
            :selected-variant="selectedVariant"
          />
        </li>
      </ul>
      <p class="question__description"><span>Объяснение.</span> {{ props.description }}</p>
    </template>
    <ul v-else @click="onChangeVariant" class="question__variants">
      <li v-for="variant in props.variants" :key="variant" class="question__variant">
        <QuestionVariant
          :disabled="props.isTestFinished"
          :variant="variant"
          :question="props.title"
          :selected-variant="selectedVariant"
        />
      </li>
    </ul>
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

    &._error {
      :deep(p) {
        color: red;
      }
      :deep(.variant-box){
        background-color: red !important;
      }
    }

    &._right {
      :deep(p) {
        color: green;
      }
      :deep(.variant-box){
        background-color: green !important;
      }
    }

    &:hover,
    &:focus,
    &:focus-visible {
      outline: 2px solid $secondary-color;
      outline-offset: 1px;
    }

    &._disabled {
      &:hover,
      &:focus,
      &:focus-visible {
        outline: 0;
        outline-offset: 0;
      }
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
