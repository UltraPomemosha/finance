<script lang="ts" setup>
import type { IULinkProps } from "./support"

const props = defineProps<IULinkProps>()
</script>

<template>
  <RouterLink v-if="props.type === 'link'" :to="props.to" class="u-link">
    <slot></slot>
  </RouterLink>

  <a v-else :href="props.to" class="u-link">
    <slot></slot>
  </a>
</template>

<style lang="scss" scoped>
.u-link {
  padding: $safe-padding;
  display: block;
  color: $primary-color;
  transition: color 0.3s linear;

  &:hover {
    color: $secondary-color;
  }

  &.router-link-active {
    color: $secondary-color;
  }
}
</style>
