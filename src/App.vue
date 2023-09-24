<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper min-w-screen relative flex min-h-screen flex-col">
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
