<script lang="ts" setup>
import { computed, defineAsyncComponent } from "vue";
import type { UIconEnum, UIconProps } from "./support";

interface Props {
  iconName: UIconEnum
}
const props = defineProps<Props & UIconProps>()

const icon = computed(() => defineAsyncComponent(() => import(`./${props.iconName}.vue`)))
</script>

<template>
  <component :is="icon" :size="props.size" :color="props.color" :secondary-color="props.secondaryColor"></component>
</template>

<style lang="scss" scoped>
/* */
</style>
