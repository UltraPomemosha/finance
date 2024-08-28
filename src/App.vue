<script setup lang="ts">
import AppFooter from "@/components/app/app-footer/AppFooter.vue";
import AppHeader from "@/components/app/app-header/AppHeader.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>

<style lang="scss" scoped></style>
