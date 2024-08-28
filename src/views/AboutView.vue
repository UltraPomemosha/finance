<script setup lang="ts">
import ULink from "@c/ui/u-link/ULink.vue";
import type { ITextConfig } from "@c/ui/u-text/support";

const DEFAULT_LINK_TEXT_CONFIG: ITextConfig = {
  size: 20,
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ULink type="link" to="/about" :title-config="DEFAULT_LINK_TEXT_CONFIG"> Главная </ULink>
    <ULink type="link" to="/" :title-config="DEFAULT_LINK_TEXT_CONFIG"> Дом </ULink>
  </div>
</template>

<style lang="scss" scoped></style>
