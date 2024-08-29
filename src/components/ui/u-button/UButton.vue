<script lang="ts" setup></script>

<template>
  <button class="u-button">
    <slot>Button</slot>
  </button>
</template>

<style lang="scss" scoped>
.u-button {
  padding: 8px 25px;
  display: block;

  border-radius: 20px;
  background-color: $secondary-color;
  color: $white-smoke-color;

  @extend .text-16;
}
</style>
