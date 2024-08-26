<script lang='ts' setup>
import type { ITextConfig, ITextProps } from './support';

const props = defineProps<ITextProps>();

const getClass = (config: ITextConfig) => {
  return `text-${config.size}${config['weight'] ? '-' + config.weight! : ''}`
}

</script>

<template>
  <component :is="props.tag" :class="getClass(props.config)">
    <slot>Text</slot>
  </component>
</template>

<style lang='scss' scoped>
/* */
</style>

