<script lang="ts" setup>
import UTitle from "@c/ui/u-title/UTitle.vue";
import UIconGet from "../ui/u-icon/UIconGet.vue";
import type { ISectionCard } from "./support";

const props = defineProps<ISectionCard>()
</script>

<template>
  <article class="section-card">
    <UIconGet :icon-name="props.iconName" :size="40" class="section-card__icon" />
    <UTitle tag="h4" class="section-card__title">
      {{ props.title }}
    </UTitle>
    <p class="section-card__description">
      {{ props.description }}
    </p>
  </article>
</template>

<style lang="scss" scoped>
.section-card {
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 10px;
  column-gap: 40px;

  position: relative;
  &:not(:first-of-type)::before {
    content: "";
    top: calc((50% + 20px) * -1);
    left: 19px;
    position: absolute;
    height: calc(100% - 20px); // 20px - cards gap
    width: 2px;
    background-color: $blue-smoke-color;
  }

  &__icon {
    grid-row: 1/3;
    align-self: center;
    margin-top: -10px; // {icon size} / 2
  }

  &__title {
    grid-column: 2/2;
    align-self: flex-end;
    color: $secondary-color;
  }

  &__description {
    grid-column: 2/2;
    @extend .text-16;
    color: $primary-color;
  }
}
</style>
