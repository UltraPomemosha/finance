<script lang="ts" setup>
import { tag } from "@/utils/tag"
import type { ITextProps } from "@c/ui/u-text/support"
import UText from "@c/ui/u-text/UText.vue"
import UTitle from "@c/ui/u-title/UTitle.vue"
import UIconGet from "../ui/u-icon/UIconGet.vue"
import type { ISectionCard } from "./support"

const props = defineProps<ISectionCard>()

const cardDescription: ITextProps = {
  tag: tag("p"),
  config: {
    size: 16,
  },
}
</script>

<template>
  <article class="section-card">
    <UIconGet :icon-name="props.iconName" :size="40" class="section-card__icon" />
    <UTitle tag="h4" class="section-card__title">
      {{ props.title }}
    </UTitle>
    <UText :tag="cardDescription.tag" :config="cardDescription.config" class="section-card__description">
      {{ props.description }}
    </UText>
  </article>
</template>

<style lang="scss" scoped>
.section-card {
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 20px;
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
    margin-top: -20px; // {icon size} / 2
  }

  &__title {
    grid-column: 2/2;
    color: $secondary-color;
  }

  &__description {
    color: $primary-color;
    grid-column: 2/2;
  }
}
</style>
