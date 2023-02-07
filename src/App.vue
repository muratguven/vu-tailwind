<template>
  <div class="flex h-screen">
    <Sidebar />
    
    <RouterView />
    
    
  </div>
</template>
<script setup lang="ts">
import Sidebar from './components/sidebar/Sidebar.vue'
</script>
<style scoped lang="scss">

</style>
