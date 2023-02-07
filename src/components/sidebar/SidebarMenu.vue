<template>
  <ul class="flex flex-col">
    <li
      class="hover:border-r-4 hover: border-purple-600 hover:bg-purple-500"
      v-for="item in props.menuData" :key="item.to"
    >
      <router-link
        :to="item.to"
        class="flex p-3 h-full items-center transition-all duration-300 ease-in-out"
      >
        <font-awesome-icon
          :icon="item.iconName"
          
          class="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
          :class="[props.is_expanded ? 'ml-1' : 'ml-7' ]"
        />
       
        <span class="menu-text">{{ item.text }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import SidebarRaw from "@/bases/SidebarRaw";

const props = defineProps({
  is_expanded: { type: Boolean, required: true },
  menuData: { type: Array<SidebarRaw>, required: true }
});




</script>

<style lang="postcss" scoped>
  li:has(a.router-link-active){
    @apply border-r-4  border-purple-600 bg-purple-500;
  }
</style>
