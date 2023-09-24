<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper relative flex flex-col min-w-screen min-h-screen">
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
