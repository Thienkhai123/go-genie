<script setup lang="ts">
import TheNavbar from '@/components/layout/TheNavbar.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <TheNavbar />
    <router-view />
    <TheFooter />
  </div>
</template>
