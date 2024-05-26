<script setup lang="ts">
import VMenubar from "@/components/features/Menubar.vue";
  
</script>

<template>
  <v-menubar>

  </v-menubar>
  <router-view :key="$route.path"></router-view>
</template>

<style scoped>

</style>
