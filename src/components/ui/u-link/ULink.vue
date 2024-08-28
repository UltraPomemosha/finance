<script lang="ts" setup>
import UText from '@c/ui/u-text/UText.vue';
import type { IULinkProps } from './support';

const tag: HTMLElementTagNameMap = "span" as unknown as HTMLElementTagNameMap
const props = defineProps<IULinkProps>()
</script>

<template>
  <RouterLink v-if="props.type === 'link'" :to="props.to" class="u-link">
    <UText :tag="tag" :config="props.titleConfig">
      <slot></slot>
    </UText>
  </RouterLink>

  <a v-else :href="props.to" class="u-link">
    <UText :tag="tag" :config="props.titleConfig">
      <slot></slot>
    </UText>
  </a>
</template>

<style lang="scss" scoped>
.u-link {
  padding: $safe-padding;
  display: block;

  &:deep(span) {
    transition: color 0.3s linear;
  }

  &:hover {
    &:deep(span) {
      color: $secondary-color;
    }
  }

  &.router-link-active {
    &:deep(span) {
      color: $secondary-color;
    }
  }
}
</style>
