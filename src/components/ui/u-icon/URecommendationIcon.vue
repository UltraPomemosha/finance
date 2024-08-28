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
      <clipPath id="clip12_1363">
        <rect
          id="material-symbols-light:pie-chart"
          rx="0.500000"
          width="39.000000"
          height="39.000000"
          transform="translate(0.500000 0.500000)"
          fill="white"
          fill-opacity="0"
        />
      </clipPath>
    </defs>
    <rect
      id="material-symbols-light:pie-chart"
      rx="0.500000"
      width="39.000000"
      height="39.000000"
      transform="translate(0.500000 0.500000)"
      fill="#FFFFFF"
      fill-opacity="0"
    />
    <g clip-path="url(#clip12_1363)">
      <path
        id="Vector"
        d="M20.83 19.16L20.83 5.1C24.67 5.3 27.92 6.73 30.57 9.4C33.22 12.06 34.66 15.32 34.89 19.16L20.83 19.16ZM19.17 34.85C15.23 34.65 11.9 33.12 9.19 30.26C6.48 27.39 5.13 23.97 5.13 20C5.13 15.99 6.48 12.56 9.19 9.7C11.9 6.84 15.23 5.3 19.17 5.1L19.17 34.85ZM20.83 34.85L20.83 20.82L34.89 20.82C34.67 24.64 33.24 27.89 30.58 30.56C27.92 33.22 24.67 34.65 20.83 34.85Z"
        fill="#0044CC"
        fill-opacity="1.000000"
        fill-rule="nonzero"
      />
    </g>
  </svg>
</template>

<style lang="scss" scoped>
/* */
</style>
