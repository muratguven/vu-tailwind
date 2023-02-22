<template>
  <div class="mx-auto h-screen bg-pink-50 dark:bg-slate-700 dark:text-slate-50">
    <div
      class="w-full h-screen grid grid-cols-6 grid-rows-[3rem_minmax(0,1fr)_2rem_3rem_5rem] gap-0"
    >
      <header class="col-span-5 col-start-2">
      <Navbar />
      </header>
      <div class="col-start-1 row-start-1 row-span-4 max-md:absolute">
        <Sidebar :menu-items="menuDataState">
          <template #logo>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mt-2 h-14 w-14 rounded-full border-2 border-gray-300 p-1 md:h-20 md:w-20"
              viewBox="0 0 64 64"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#9C4D4D"
                  d="M11,7.99079514 C11,6.89130934 11.514871,6.73552996 12.1456788,7.63668394 L25,26 L11,26 L11,7.99079514 Z"
                />
                <path
                  fill="#9C4D4D"
                  d="M39,7.99079514 C39,6.89130934 39.514871,6.73552996 40.1456788,7.63668394 L53,26 L39,26 L39,7.99079514 Z"
                  transform="matrix(-1 0 0 1 92 0)"
                />
                <ellipse cx="32" cy="38.5" fill="#BD7575" rx="28" ry="22.5" />
                <path
                  fill="#595959"
                  d="M31.9667384,49.2336044 C31.4437906,50.2091578 30.5967076,50.2106181 30.072977,49.2336044 L28.214371,45.7663956 C27.6914233,44.7908422 28.1578525,44 29.2589184,44 L32.780797,44 C33.8806323,44 34.3490749,44.7893819 33.8253443,45.7663956 L31.9667384,49.2336044 Z"
                />
                <circle cx="21" cy="35" r="4" fill="#FFF" />
                <circle cx="20" cy="36" r="2" fill="#595959" />
                <circle cx="43" cy="35" r="4" fill="#FFF" />
                <circle cx="42" cy="36" r="2" fill="#595959" />
                <path
                  stroke="#595959"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M30.8154771 50C30.8154771 50 27.6116078 52.9001474 24.4077385 52.9001474 21.2038693 52.9001474 18 50 18 50M43.8154771 50C43.8154771 50 40.6116078 52.9001474 37.4077385 52.9001474 34.2038693 52.9001474 31 50 31 50"
                />
                <path
                  stroke="#9C4D4D"
                  stroke-linecap="round"
                  d="M3 41L22.0815162 45.8675256M3.5 37.5L22.0815162 44.8675256M43 44.270357L61.5 39.5M43 45.270357L61.5 42.5"
                />
              </g>
            </svg>
          </template>
        </Sidebar>
      </div>
      <main class="col-span-6 md:col-span-5 w-full row-span-3"><RouterView /></main>
      <footer class="col-span-6 fixed bottom-0 left-0 right-0 bg-purple-500">
        Footer
      </footer>
    </div>
  </div>
</template>
<script setup lang="ts">
import Sidebar from "@/components/sidebar/Sidebar.vue";
import Navbar from '@/components/navbar/Navbar.vue';

import { ref } from "vue";

const menuDataState = ref([
  {
    to: "/",
    iconName: "fa-solid fa-house",
    text: "DashBoard",
  },
  {
    to: "/about",
    iconName: "fa-solid fa-rainbow",
    text: "About",
    children: [
      {
        to: "/about",
        iconName: "fa-solid fa-rainbow",
        text: "Alt-About",
      },
      {
        to: "/about",
        iconName: "fa-solid fa-rainbow",
        text: "Alt-About",
      },
    ],
  },
  {
    to: "/modal",
    iconName: "fa-solid fa-object-group",
    text: "Modals",
  },
  {
    to: "/form",
    iconName: "fa-solid fa-receipt",
    text: "Forms",
  },
  {
    to: "/dragable",
    iconName: "fa-solid fa-draw-polygon",
    text: "Drag&Drop",
  },
]);
</script>
<style scoped lang="scss"></style>
