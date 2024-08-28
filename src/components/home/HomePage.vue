<script lang='ts' setup>
import { tag } from '@/utils/tag';
import UText from '@c/ui/u-text/UText.vue';
import type { ITextConfig } from '@c/ui/u-text/support';

const homePageTitleTag = tag('h1')
const homePageTitleConfig: ITextConfig = {
  size: 48,
}
</script>

<template>
  <section class="home-page">
    <UText :tag="homePageTitleTag" :config="homePageTitleConfig" class="home-page__title">
      Твое финансовое Будущее в твоих руках!
    </UText>
    <img src="/src/assets/images/home-welcome.png" alt="" class="home-page__img">
  </section>
</template>

<style lang='scss' scoped>
.home-page {
  &__title {
    color: $secondary-color;
    font-family: $secondary-font;
  }
}
</style>
