<template>
  <div class="custom-loader" v-if="isLoading">
    <div class="spinner"></div>
    <h1 class="text-3xl">{{Math.round(progress)}}%</h1>
  </div>
</template>

<script setup>

const { isLoading, progress } = useLoadingIndicator();
</script>

<style scoped>
.custom-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #3498db;
  border-radius: 50%;
  animation: spin 1s infinite linear;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
