<template>
  <div class="flex h-screen container">
    <!-- <Sidebar /> -->
    <Navbar />
    
    <RouterView />
    
    
  </div>
</template>
<script setup lang="ts">
import Sidebar from './components/sidebar/Sidebar.vue'
import Navbar from '@/components/sidebar/Navbar.vue'
</script>
<style scoped lang="scss">

</style>
