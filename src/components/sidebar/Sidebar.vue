<template>
  <div class="flex flex-col py-2">
    <button
      class="border-none mt-3 ml-3 rounded w-12 h-12 md:hidden bg-gradient-to-t from-stone-200 to-stone-400 dark:text-slate-50 dark:from-blue-700 dark:to-blue-600"
    >
      <font-awesome-icon icon="fa-solid fa-bars" />
    </button>
    <aside
    class="max-md:hidden rounded-md h-screen overflow-hidden border-none bg-stone-300 dark:bg-gray-800"
  >
    <div class="flex flex-col items-center justify-center">
      <slot name="logo"> </slot>

      <h2
        class="mt-4 text-sm font-bold md:text-base md:font-extrabold uppercase text-slate-600 dark:text-slate-50 underline underline-offset-4"
      >
        {{ props.appName }}
      </h2>
      <hr
        class="mt-4 w-full border border-gray-300 dark:border-gray-700 shadow-sm shadow-stone-400 dark:shadow-gray-400"
      />
    </div>

    <ul class="flex flex-col justify-center text-slate-600 dark:text-slate-50">
      <li class="relative" v-for="(item, index) in menuItems">
        <RouterLink
          :to="item.to"
          v-if="item.children?.length === 0 || !item.children"
          class="flex h-10 p-2 cursor-pointer rounded-md justify-start items-center hover:bg-zinc-300 dark:hover:bg-indigo-600"
        >
          <font-awesome-icon
            :icon="item.iconName"
            class="h-4 w-4 md:h-5 md:w-5"
          />

          <span class="ml-2 text-xs md:ml-4 md:text-sm">{{ item.text }}</span>
        </RouterLink>
        <a
          class="flex h-10 p-2 cursor-pointer rounded-md hover:bg-stone-300 dark:hover:bg-indigo-600"
          v-else
          @click="toggleMenu(index)"
        >
          <font-awesome-icon
            :icon="item.iconName"
            class="h-4 w-4 md:h-5 md:w-5"
          />
          <span class="ml-2 text-xs md:ml-4 md:text-sm">{{ item.text }}</span>
          <font-awesome-icon
            icon="fa-solid fa-caret-down"
            class="absolute right-3 top-3 h-3 w-3 md:h-4 md:w-4"
          />
        </a>
        <Fade>
          <ul
            class="flex flex-col divide-y divide-dashed text-slate-600 dark:text-slate-50"
            v-if="toggleList[index]"
          >
            <li
              class="relative"
              v-for="subItem in item.children"
              :key="subItem.to"
            >
              <RouterLink
                :to="subItem.to"
                class="flex h-10 pl-4 pt-2 cursor-pointer rounded hover:bg-stone-200 dark:hover:bg-indigo-600"
              >
                <font-awesome-icon
                  :icon="subItem.iconName"
                  class="h-4 w-4 md:h-5 md:w-5"
                />

                <span class="ml-2 text-xs md:ml-4"> {{ subItem.text }}</span>
              </RouterLink>
            </li>
          </ul>
        </Fade>
      </li>
    </ul>
  </aside>
  </div>

  
</template>

<script setup lang="ts">
import SidebarRaw from "@/bases/SidebarRaw";
import { ref, reactive, defineProps, onMounted, computed } from "vue";
import Fade from "@/components/transitions/fade.vue";

const props = defineProps({
  appName: { type: String, default: "Menu" },
  class: { type: String },
  menuItems: { type: Array<SidebarRaw>, required: true },
});

const toggleList: Array<boolean> = reactive([]);
const isExpand = ref(false);

const toggleMenu = (index: any) => {
  toggleList[index] = !toggleList[index];
};

const expandMenu = () => {
  isExpand.value = !isExpand.value;
};

onMounted(() => {
  props.menuItems.forEach((value) => {
    toggleList.push(false);
  });
});
</script>

<style lang="postcss">
li:has(> a.router-link-active) {
  @apply bg-stone-300 rounded dark:bg-indigo-500;
}
.menu-item {
  @apply relative h-10 w-full md:font-medium;
}
.menu-text {
  @apply text-xs md:text-base sm:px-5 opacity-100;
}
</style>
