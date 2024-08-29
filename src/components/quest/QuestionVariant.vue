<script lang="ts" setup>
import URadio from "@c/ui/u-radio/URadio.vue";

interface Props {
  variant: string
  question: string
  selectedVariant: string
  disabled: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <URadio
    :need-listener="false"
    :name="props.question"
    :id="props.variant + props.question"
    :value="props.variant"
    :checked="props.variant === props.selectedVariant"
    :disabled="props.disabled"
    input-class="variant-input"
    label-class="variant-label"
  >
    <div class="variant-box">
      <div class="variant-box__bg" />
    </div>
    <p class="variant-title">{{ props.variant }}</p>
  </URadio>
</template>

<style lang="scss" scoped>
.variant-box {
  margin-top: -6px;
  flex: 0 0 24px;
  width: 24px;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid $secondary-color;
  border-radius: 7px;

  &__bg {
    flex: 0 0 14px;
    width: 14px;
    height: 14px;

    border-radius: 4px;
    background-color: rgba(130, 159, 209, 0);
  }
}

.variant-input {
  &:checked + .variant-label .variant-box {
    background-color: $secondary-color;
    &__bg {
      background-color: rgba(130, 159, 209, 1);
    }
  }
  &:disabled + .variant-label {
    .variant-title,
    .variant-box {
      opacity: 0.7;
    }
  }
}

.variant-title {
  @extend .text-24;
  color: $primary-color;
}
</style>
