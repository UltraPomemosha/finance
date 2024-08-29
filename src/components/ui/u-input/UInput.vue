<script lang="ts" setup>
import type { UInputProps } from './support';

const props = withDefaults(defineProps<UInputProps>(), {
  name: '',
  type: 'text',
  error: false
})

const value = defineModel<string>({
  required: true
})
</script>

<template>
  <label class="u-input">
    <slot name="title"></slot>
    <input v-model="value" :name="props.name" type="text" class="u-input__input" />
    <slot name="button"></slot>
  </label>
</template>

<style lang="scss" scoped>
.u-input {
  display: block;
  position: relative;

  &__input {
    margin-top: 10px;
    padding: 16px 12px;
  }

  :slotted(button) {
    position: absolute;
    bottom: 16px;
    right: 12px;
  }
}
</style>
