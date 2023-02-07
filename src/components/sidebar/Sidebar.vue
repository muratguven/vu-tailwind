<template>
  <aside class="sidebar" :class="expandWidth" >
  <div class="flex flex-col items-center justify-end mb-4 border-b-[1px] border-purple-500 shadow-[0_30px_30px_-15px_rgba(172,91,239,0.3)]">
    <img src="../../assets/vue.svg" alt="" class="logo" />
    <button @click="expand()" class="m-2 transition all duration-300 ease-out hover:-translate-y-1"><font-awesome-icon icon="fa-solid fa-arrow-right-arrow-left" class="h-5 w-5" /></button>
  </div>
    
    <div class="-mx-4 my-0">

    <SidebarMenu :is_expanded="is_expanded" :menu-data="menuDataState" />
    </div>
  </aside>
</template>

<script setup lang="ts">

import {ref, computed} from 'vue'
import SidebarMenu from "./SidebarMenu.vue";
//States
const is_expanded = ref(false);

//Methods
const expand = ()=> is_expanded.value = !is_expanded.value;

const menuDataState = ref([{
  to:'/',
  iconName:'fa-solid fa-house',
  text:'DashBoard'
},{
  to:'/about',
  iconName:'fa-solid fa-rainbow',
  text:'About'
},
{
  to:'/modal',
  iconName:'fa-solid fa-object-group',
  text:'Modals'
}
])
const expandWidth = computed(()=> ({
    'sidebar-expand':is_expanded.value
    
}));
</script>

<style lang="postcss" scoped>

.logo{
  @apply w-[2rem] h-[2rem] my-3 md:w-[4rem] md:h-[4rem] border border-purple-400 rounded-full shadow-lg shadow-purple-500;
}

</style>