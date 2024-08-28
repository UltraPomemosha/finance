<script lang="ts" setup>
import ULink from "@c/ui/u-link/ULink.vue";
import type { ITextConfig } from "@c/ui/u-text/support";
import UText from "@c/ui/u-text/UText.vue";
import type { IMenu } from "./support";

const props = defineProps<IMenu>()

const ListTitleTag = "h2" as unknown as HTMLElementTagNameMap
const listTitleConfig: ITextConfig = {
  size: 16,
  weight: "sb",
}

const listLinkTitleConfig: ITextConfig = {
  size: 16,
}
</script>

<template>
  <ul class="footer-list">
    <li class="footer-list__item _list-title">
      <UText :tag="ListTitleTag" :config="listTitleConfig">
        {{ props.title }}
      </UText>
    </li>
    <li v-for="item in props.data" :key="item.title" class="footer-list__item">
      <ULink :type="item.type" :to="item.to" :title-config="listLinkTitleConfig" class="footer-list__link">
        {{ item.title }}
      </ULink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.footer-list {
  width: max-content;
  &__item {
    color: $tertiary-color;
    &:not(:first-child) {
      margin-top: 8px;
    }
  }

  &__link {
    padding-left: 0;
    color: inherit;
    :deep(span) {
      font-weight: 300;
    }
  }
}
</style>
