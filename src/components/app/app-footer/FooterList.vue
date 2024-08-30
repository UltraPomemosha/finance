<script lang="ts" setup>
import ULink from "@c/ui/u-link/ULink.vue"
import type { IMenu } from "./support"

const props = defineProps<IMenu>()
</script>

<template>
  <ul class="footer-list">
    <li class="footer-list__item _list-title text-16-sb">
      {{ props.title }}
    </li>
    <li v-for="item in props.data" :key="item.title" class="footer-list__item">
      <ULink :type="item.type" :to="item.to" class="footer-list__link">
        {{ item.title }}
      </ULink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.footer-list {
  width: max-content;
  &__item {
    color: $tertiary-color;
    &:not(:first-child) {
      margin-top: 8px;
    }
  }

  &__link {
    padding-left: 0;
    color: $tertiary-color;
    @extend .text-16;
    font-weight: 300;
  }
}
</style>
