<template>
  <ul class="flex flex-col">
    <li v-for="(item, index) in props.menuData">
      <router-link
        :to="item.to"
        class="flex p-3 h-full items-center hover: border-purple-600 hover:bg-purple-500 transition-all duration-300 ease-in-out hover:border-r-4"
        v-if="item.children?.length === 0 || !item.children"
      >
        <font-awesome-icon
          :icon="item.iconName"
          class="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
          :class="[props.is_expanded ? 'ml-1' : 'ml-7']"
        />

        <span class="menu-text">{{ item.text }}</span>
      </router-link>
      <span
        class="flex p-3 h-full items-center transition-all duration-300 ease-in-out hover:cursor-pointer"
        v-else
      >
        <font-awesome-icon
          :icon="item.iconName"
          class="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
          :class="[props.is_expanded ? 'ml-1' : 'ml-7']"
        />

        <span class="menu-text">{{ item.text }}</span>
        <a class="flex-none w-6 absolute right-2" @click="ToggleMenu(index)">
          <font-awesome-icon icon="fa-solid fa-caret-down" class="ml-2" />
        </a>
      </span>
      <Transition name="submenu">
        <ul
        class="flex flex-col"
        v-if="item.children && item.children?.length > 0 && index===isOpenIndex.value"
      >
        <li
          class="border-t border-purple-400 hover:rounded-sm hover:bg-purple-700"
          v-for="child in item.children"
          :key="child.to"
        >
          <router-link
            :to="item.to"
            class="flex p-3 ml-2 h-full items-center transition-all duration-300 ease-in-out"
          >
            <font-awesome-icon
              :icon="item.iconName"
              class="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
              :class="[props.is_expanded ? 'ml-1' : 'ml-7']"
            />
            <span class="menu-text">{{ item.text }}</span>
          </router-link>
        </li>
      </ul>
      </Transition>
      
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps, ref, computed, watch } from "vue";
import SidebarRaw from "@/bases/SidebarRaw";

const props = defineProps({
  is_expanded: { type: Boolean, required: true },
  menuData: { type: Array<SidebarRaw>, required: true },
});

const isOpenMenu = ref(0);

const isOpenIndex = computed(()=>{
  return  isOpenMenu;
})


const ToggleMenu = (index: any) => {

  if(isOpenIndex.value.value===index){
    isOpenMenu.value=-1;
    return;
  }
  isOpenMenu.value = index
};
</script>

<style lang="postcss" scoped>
li:has(>a.router-link-active) {
  @apply border-r-4  border-purple-600 bg-purple-500;
}
/* a.router-link-active{
  @apply border-r-4  border-purple-600 bg-purple-500;
} */
.submenu-enter-from{
  @apply opacity-0;
}
.submenu-enter-active{
  @apply transition-all ease-in-out duration-500;
}

.submenu-leave-active{
  @apply transition-all ease-in-out duration-700;
}
.submenu-leave-to{
  @apply opacity-0;
}
</style>
