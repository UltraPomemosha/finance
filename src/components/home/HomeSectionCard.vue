<script lang='ts' setup>
import { tag } from '@/utils/tag';
import type { ITextProps } from '@c/ui/u-text/support';
import type { ISectionCard } from './support';

const props = defineProps<ISectionCard>();

const cardTitle: ITextProps = {
  tag: tag('h2'),
  config: {
    size: 24
  }
}

const cardDescription: ITextProps = {
  tag: tag('p'),
  config: {
    size: 16
  }
}

</script>

<template>
  <article class="section-card">
    <slot></slot>
    <UText :tag="cardTitle.tag" :config="cardTitle.config">
      {{ props.title }}
    </UText>
    <UText :tag="cardDescription.tag" :config="cardDescription.config">
      {{ props.description }}
    </UText>
  </article>
</template>

<style lang='scss' scoped>
:slotted(img) {
  grid-column: 1/1;
  grid-row: 1/2;
}
</style>

