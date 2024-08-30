<script setup lang="ts">
import ULink from "@c/ui/u-link/ULink.vue"
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ULink type="link" to="/about" class="text-20"> Главная </ULink>
    <ULink type="link" to="/" class="text-20"> Дом </ULink>
  </div>
</template>

<style lang="scss" scoped></style>
