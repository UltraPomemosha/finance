<script lang="ts" setup>
import type { UIconProps } from "../support";

const props = defineProps<UIconProps>()
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
      <clipPath id="clip12_1361">
        <rect
          id="mdi:human-male-board"
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
      id="mdi:human-male-board"
      rx="0.500000"
      width="39.000000"
      height="39.000000"
      transform="translate(0.500000 0.500000)"
      fill="#FFFFFF"
      fill-opacity="0"
    />
    <g clip-path="url(#clip12_1361)">
      <path
        id="Vector"
        d="M33.33 28.33C34.21 28.33 35.06 27.98 35.69 27.35C36.31 26.73 36.66 25.88 36.66 25L36.66 6.66C36.66 5.78 36.31 4.93 35.69 4.3C35.06 3.68 34.21 3.33 33.33 3.33L15.76 3.33C16.35 4.34 16.66 5.49 16.66 6.66L33.33 6.66L33.33 25L18.33 25L18.33 28.33L33.33 28.33ZM25 11.66L25 15L15 15L15 36.66L11.66 36.66L11.66 26.66L8.33 26.66L8.33 36.66L5 36.66L5 23.33L2.5 23.33L2.5 15C2.5 14.11 2.85 13.26 3.47 12.64C4.1 12.01 4.94 11.66 5.83 11.66L25 11.66ZM13.33 6.66C13.33 7.55 12.98 8.39 12.35 9.02C11.73 9.64 10.88 9.99 10 9.99C9.11 9.99 8.26 9.64 7.64 9.02C7.01 8.39 6.66 7.55 6.66 6.66C6.66 5.78 7.01 4.93 7.64 4.3C8.26 3.68 9.11 3.33 10 3.33C10.88 3.33 11.73 3.68 12.35 4.3C12.98 4.93 13.33 5.78 13.33 6.66Z"
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
