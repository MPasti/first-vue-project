<script setup lang="ts">
import { defineProps } from 'vue'

const { loading } = defineProps<{ loading: boolean }>();
</script>

<template>
  <div v-if="loading" class="loader-overlay">
    <v-icon name="ri-loader-2-fill" class="icon" scale="10" animation="spin" color="white" />
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.5s;
}
</style>
