<script lang="ts" setup>
import AppContainer from "@c/app/app-container/AppContainer.vue"
import AppSmallContainer from "@c/app/app-container/AppSmallContainer.vue"
import UButton from "@c/ui/u-button/UButton.vue"
import ULogo from "@c/ui/u-logo/ULogo.vue"
import HeaderMenu from "./HeaderMenu.vue"
</script>

<template>
  <header class="app-header">
    <AppContainer class="app-header__container">
      <ULogo star-color="var(--default-star-logo-color)" title-color="var(--default-text-logo-color)"/>
      <AppSmallContainer class="app-header__small-container">
        <HeaderMenu />
        <UButton>Авторизация</UButton>
      </AppSmallContainer>
    </AppContainer>
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  width: 100%;
  height: $header-height;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  &__container {
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    gap: $normal-gap;
  }
  
  &__small-container {
    flex: 1 1 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    gap: $normal-gap;
  }
}
</style>
