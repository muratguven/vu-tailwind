<template>
  <aside
    class="w-1/2 md:w-1/5 h-screen overflow-hidden border bg-gradient-to-t from-slate-100 to-zinc-100"
  >
    <div class="flex flex-col items-center justify-center">
      <slot name="logo"> </slot>

      <h2
        class="mt-4 text-sm font-bold md:text-base md:font-extrabold uppercase text-slate-600 underline underline-offset-4"
      >
        {{ props.appName }}
      </h2>
      <hr class="mt-4 w-full border border-zinc-100 shadow-sm" />
    </div>

    <ul class="flex flex-col justify-center text-slate-600">
      <li class="relative" v-for="item in props.menuItems" :key="item.to">
        <RouterLink
          :to="item.to"
          v-if="item.children?.length === 0 || !item.children"
          class="flex h-10 p-2 cursor-pointer rounded-md justify-start items-center hover:bg-zinc-300"
        >
          <font-awesome-icon
            :icon="item.iconName"
            class="h-4 w-4 md:h-5 md:w-5"
          />

          <span class="ml-2 text-xs md:ml-4 md:text-base">{{ item.text }}</span>
        </RouterLink>
        <a class="flex h-10 p-2 cursor-pointer rounded-md hover:bg-zinc-300" v-else>
          <font-awesome-icon
            :icon="item.iconName"
            class="h-4 w-4 md:h-5 md:w-5"
          />
          <span class="ml-2 text-xs md:ml-4 md:text-base">{{ item.text }}</span>
          <font-awesome-icon
            icon="fa-solid fa-caret-down"
            class="absolute right-3 top-3 h-3 w-3 md:h-4 md:w-4"
          />
        </a>
        <ul
          class="flex flex-col divide-y divide-dashed text-slate-600"
        >
          <li
            class="relative"
            v-for="subItem in item.children"
            :key="subItem.to"
          >
            <RouterLink
              :to="subItem.to"
              class="flex h-10 pl-4 pt-2 cursor-pointer rounded hover:bg-stone-200"
            >
              <font-awesome-icon
                :icon="subItem.iconName"
                class="h-4 w-4 md:h-5 md:w-5"
              />

              <span class="ml-2 text-xs md:ml-4"> {{ subItem.text }}</span>
            </RouterLink>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import SidebarRaw from "@/bases/SidebarRaw";
import { ref, defineProps } from "vue";

const props = defineProps({
  appName: { type: String, default: "Menu" },
  class: { type: String },
  menuItems: { type: Array<SidebarRaw>, required: true },
});
</script>

<style lang="postcss">
li:has(> a.router-link-active) {
  @apply bg-stone-300 rounded;
}
.menu-item {
  @apply relative h-10 w-full md:font-medium;
}
.menu-text {
  @apply text-xs md:text-base sm:px-5 opacity-100;
}
</style>
