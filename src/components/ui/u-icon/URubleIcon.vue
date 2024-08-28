<script lang="ts" setup>
import type { UIconProps } from './support';

const props = defineProps<UIconProps>();
</script>

<template>
  <svg
    :width="props.size"
    :height="props.size"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <clipPath id="clip12_2014">
        <rect
          id="f7:money-rubl-circle-fill"
          rx="19.500000"
          width="39.000000"
          height="39.000000"
          transform="translate(0.500000 0.500000)"
          fill="white"
          fill-opacity="0"
        />
      </clipPath>
    </defs>
    <rect
      id="f7:money-rubl-circle-fill"
      rx="19.500000"
      width="39.000000"
      height="39.000000"
      transform="translate(0.500000 0.500000)"
      fill="#FFFFFF"
      fill-opacity="0"
    />
    <g clip-path="url(#clip12_2014)">
      <path
        id="Vector"
        d="M20 37.14C10.53 37.14 2.85 29.46 2.85 20C2.85 10.53 10.53 2.85 20 2.85C29.46 2.85 37.14 10.53 37.14 20C37.14 29.46 29.46 37.14 20 37.14ZM18.01 14.16L20.39 14.16C22.59 14.16 23.69 15.31 23.69 17.12C23.69 18.95 22.59 20.11 20.38 20.11L18.01 20.11L18.01 14.16ZM21.01 22.16C24.17 22.16 26.25 20.02 26.25 17.11C26.25 14.19 24.21 12.04 21.09 12.04L15.5 12.04L15.5 20.86L13.26 20.86L13.26 22.16L15.5 22.16L15.5 24.36L13.26 24.36L13.26 25.65L15.5 25.65L15.5 28.12L18.01 28.12L18.01 25.65L22.56 25.65L22.56 24.36L18.01 24.36L18.01 22.16L21.01 22.16Z"
        fill="#0044CC"
        fill-opacity="1.000000"
        fill-rule="evenodd"
      />
    </g>
  </svg>
</template>

<style lang="scss" scoped>
/* */
</style>
