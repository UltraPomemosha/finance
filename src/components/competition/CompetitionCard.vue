<script lang="ts" setup></script>

<template>
  <article class="competition-card">
    <div class="image-wrapper">
      <slot name="image"></slot>
    </div>
    <slot name="content"></slot>
  </article>
</template>

<style lang="scss" scoped>
.competition-card {
  display: flex;
  flex-flow: column nowrap;

  .image-wrapper {
    width: 400px;
    height: 400px;
    overflow: hidden;
    margin-bottom: 20px;
  }

  :slotted(img) {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>
