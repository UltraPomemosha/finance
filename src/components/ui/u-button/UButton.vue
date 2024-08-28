<script lang="ts" setup>
import UText from "@c/ui/u-text/UText.vue";
import type { ITextConfig } from "@c/ui/u-text/support";

interface Props {
  titleConfig?: ITextConfig
}
const props = withDefaults(defineProps<Props>(), {
  titleConfig:() => ({size: 16})
})

const tag = "span" as unknown as HTMLElementTagNameMap
</script>

<template>
  <button class="u-button">
    <UText :tag="tag" :config="props.titleConfig" class="u-button__title">
      <slot>Button</slot>
    </UText>
  </button>
</template>

<style lang="scss" scoped>
.u-button {
  padding: 8px 25px;
  display: block;
  
  border-radius: 20px;
  background-color: $secondary-color;

  &__title {
    display: inline-block;
    color: $white-smoke-color;
  }
}
</style>
