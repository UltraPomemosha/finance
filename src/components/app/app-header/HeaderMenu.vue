<script lang='ts' setup>
import ULink from '@c/ui/u-link/ULink.vue';
import { MENU } from './support';
</script>

<template>
  <nav>
    <ul class="menu">
      <li v-for="{title, to} in MENU" :key="title">
        <ULink type="link" :to="to" :title-config="{size: 20}" class="menu__link">{{ title }}</ULink>
      </li>
    </ul>
  </nav>
</template>

<style lang='scss' scoped>
.menu {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 20px;

  &__link {
    &:deep(span) {
      color: $primary-color;
    }
  }
}
</style>
