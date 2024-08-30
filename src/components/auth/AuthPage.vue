<script lang="ts" setup>
import UButton from "@c/ui/u-button/UButton.vue"
import UInput from "@c/ui/u-input/UInput.vue"
import UTitle from "@c/ui/u-title/UTitle.vue"
import { computed, reactive } from "vue"
import { checkEmail, checkName, checkPassword } from "./support"

const authValues = reactive({
  name: "",
  email: "",
  password: "",
})

const hasNameError = computed(() => {
  if (!authValues.name) return false
  return !checkName(authValues.name)
})

const hasEmailError = computed(() => {
  if (!authValues.email) return false
  return !checkEmail(authValues.email)
})

const hasPasswordError = computed(() => {
  if (!authValues.password) return false
  return !checkPassword(authValues.password)
})
</script>

<template>
  <section class="auth-page">
    <UTitle tag="h1" class="auth-page__title"> Путешествие в Будущее ждет тебя! </UTitle>
    <form class="auth-page__form">
      <UInput v-model="authValues.name" :error="hasNameError" class="auth-page__input _name">
        <template #title>
          <UTitle tag="h5">ФИО</UTitle>
        </template>
      </UInput>
      <UInput v-model="authValues.email" type="email" :error="hasEmailError" class="auth-page__input _email">
        <template #title>
          <UTitle tag="h5" class="text-20-b">Email</UTitle>
        </template>
      </UInput>
      <UInput
        v-model="authValues.password"
        type="password"
        :error="hasPasswordError"
        class="auth-page__input _password"
      >
        <template #title>
          <UTitle tag="h5">Пароль</UTitle>
        </template>
      </UInput>
      <UButton class="auth-page__submit"> Войти </UButton>
    </form>
    <img loading="lazy" src="/src/assets/images/auth-img.png" alt="Авторизация" class="auth-page__img" />
  </section>
</template>

<style lang="scss" scoped>
.auth-page {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content 1fr;
  gap: 10px 40px;

  &__title {
    grid-column: 1/1;
    grid-row: 1/1;
    text-align: left;
  }

  &__form {
    grid-column: 1/1;
    grid-row: 2/2;

    > *:not(:first-child) {
      margin-top: 10px;
    }
  }

  &__input {
    max-width: 420px;
    width: 100%;
    min-width: 260px;

    &._error {
      :deep(input) {
        border: 1px solid red;
      }
    }
  }

  &__img {
    grid-row: 1 / 3;
    grid-column: 2/2;
  }
}
</style>
