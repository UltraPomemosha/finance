<script lang="ts" setup>
import { computed } from "vue";
import type { URadioProps } from "./support";

const props = defineProps<URadioProps>()

const emits = defineEmits<{
  "update:value": [string, string]
}>()

function onChange(e: Event) {
  const input = e.target as HTMLInputElement
  emits("update:value", input.value, input.id)
}

const listener = computed(() => (props.needListener ? "change" : ""))

const isChecked = computed(() => props['checked'] ? props.checked: false)
const isDisabled = computed(() => props['disabled'] ? props.disabled: false)
</script>

<template>
  <input
    v-on:[listener]="onChange"
    :class="['u-radio__input', props.inputClass || '']"
    type="radio"
    :name="props.name"
    :id="props.id"
    :checked="isChecked"
    :disabled="isDisabled"
    :value="props.value"
  />
  <label :class="['u-radio', props.labelClass ?? '']" :for="props.id">
    <slot></slot>
  </label>
</template>

<style lang="scss" scoped>
.u-radio {
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: $normal-gap;

  &__input {
    display: none;
  }
}
</style>
