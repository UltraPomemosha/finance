<script lang="ts" setup>
interface Props {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const props = defineProps<Props>()
</script>

<template>
  <component :is="`${props.tag}`" :class="[`_${props.tag}`, 'u-title']">
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
.u-title {
  &._h1 {
    @extend .text-48;
    color: $secondary-color;
    font-family: $secondary-font;
    text-align: center;
  }
  &._h2 {
    @extend .text-36;
  }
  &._h3 {
    @extend .text-32;
  }
  &._h4 {
    @extend .text-24;
  }
  &._h5 {
    @extend .text-20;
  }
  &._h6 {
    @extend .text-18;
  }
}
</style>
