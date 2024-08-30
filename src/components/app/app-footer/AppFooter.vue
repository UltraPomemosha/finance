<script lang="ts" setup>
import AppContainer from "@c/app/app-container/AppContainer.vue"
import AppSmallContainer from "@c/app/app-container/AppSmallContainer.vue"
import ULogo from "@c/ui/u-logo/ULogo.vue"
import FooterList from "./FooterList.vue"
import { CALL_LIST, CONTACTS_LIST, SECTIONS_LIST } from "./support"
</script>

<template>
  <footer class="app-footer">
    <AppContainer class="app-footer__container">
      <div class="app-footer__col">
        <ULogo star-color="var(--white-smoke-color)" title-color="var(--white-smoke-color)" class="app-footer__logo" />
        <p class="app-footer__copyright">
          © 2024 ПУТЕШЕСТВИЕ-В-БУДУЩЕЕ.РФ
        </p>
      </div>
      <AppSmallContainer class="app-footer__small-container">
        <FooterList :title="SECTIONS_LIST.title" :data="SECTIONS_LIST.data" />
        <div class="app-footer__col"> 
          <FooterList :title="CONTACTS_LIST.title" :data="CONTACTS_LIST.data" class="app-footer__contacts" />
          <FooterList :title="CALL_LIST.title" :data="CALL_LIST.data" class="app-footer__call" />
        </div>
        <img loading="lazy" src="/src/assets/images/footer-robot.png" alt="Cute Robot)" class="cute-robot" />
      </AppSmallContainer>
    </AppContainer>
  </footer>
</template>

<style lang="scss" scoped>
.app-footer {
  margin-top: auto;
  padding: 10px 0;
  background-color: $bg-gray-color;

  &__logo {
    width: 244px;
    height: 94px;
  }

  &__container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  &__col {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }

  &__small-container {
    flex: 1 1 100%;
    display: grid;
    grid-template-columns: repeat(3, max-content);
    justify-content: space-between;

    & > * {
      justify-self: start;
    }
  }

  &__copyright {
    @extend .text-14;
    font-weight: 300;
    color: $white-color;
  }

  &__contacts {
    :deep(.footer-list__link span) {
      @extend .text-20;
      font-weight: 300;
    }
  }

  &__call {
    margin-bottom: auto;
    margin-top: 10px;
    :deep(.footer-list__link span) {
      @extend .text-20;
      font-weight: 300;
    }
  }

  .cute-robot {
    align-self: end;
  }
}
</style>
