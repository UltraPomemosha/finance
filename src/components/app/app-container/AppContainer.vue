<script lang='ts' setup>
// 
</script>

<template>
  <div class="app-container">
    <slot></slot>
  </div>
</template>

<style lang='scss' scoped>
.app-container {
  padding: $safe-padding;
  margin: 0 auto;
  max-width: 1360px;
  width: 100%;
  min-width: 280px;
}
</style>
