<template>
  <!-- <div class="mx-auto h-screen bg-pink-50 dark:bg-slate-700 dark:text-slate-50">
    <div
      class="w-full h-screen grid grid-cols-4 grid-rows-[5rem_minmax(0,2fr)_2rem] gap-0"
    >
      <header class="col-span-4 h-20 bg-blue-600">Header</header>
      <aside class="row-span-3 h-full bg-slate-400">Sidebar</aside>
      <main class="bg-indigo-300 col-span-3 w-fu row-span-3 h-full">Main</main>
      <footer
        class="col-span-4 sticky h-24 bottom-0 left-0 right-0 bg-purple-500"
      >
        Footer
      </footer>
    </div>
  </div> -->

  <aside class="md:1/5 h-screen w-1/4 overflow-hidden border bg-gradient-to-t from-slate-100 to-zinc-100">
  <div class="flex h-full w-full flex-col">
    <div class="mt-2 flex h-1/6 w-full flex-col items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="mt- h-14 w-14 rounded-full border-2 border-gray-300 p-3 md:h-20 md:w-20" viewBox="0 0 64 64">
        <g fill="none" fill-rule="evenodd">
          <path fill="#9C4D4D" d="M11,7.99079514 C11,6.89130934 11.514871,6.73552996 12.1456788,7.63668394 L25,26 L11,26 L11,7.99079514 Z" />
          <path fill="#9C4D4D" d="M39,7.99079514 C39,6.89130934 39.514871,6.73552996 40.1456788,7.63668394 L53,26 L39,26 L39,7.99079514 Z" transform="matrix(-1 0 0 1 92 0)" />
          <ellipse cx="32" cy="38.5" fill="#BD7575" rx="28" ry="22.5" />
          <path fill="#595959" d="M31.9667384,49.2336044 C31.4437906,50.2091578 30.5967076,50.2106181 30.072977,49.2336044 L28.214371,45.7663956 C27.6914233,44.7908422 28.1578525,44 29.2589184,44 L32.780797,44 C33.8806323,44 34.3490749,44.7893819 33.8253443,45.7663956 L31.9667384,49.2336044 Z" />
          <circle cx="21" cy="35" r="4" fill="#FFF" />
          <circle cx="20" cy="36" r="2" fill="#595959" />
          <circle cx="43" cy="35" r="4" fill="#FFF" />
          <circle cx="42" cy="36" r="2" fill="#595959" />
          <path stroke="#595959" stroke-linecap="round" stroke-width="2" d="M30.8154771 50C30.8154771 50 27.6116078 52.9001474 24.4077385 52.9001474 21.2038693 52.9001474 18 50 18 50M43.8154771 50C43.8154771 50 40.6116078 52.9001474 37.4077385 52.9001474 34.2038693 52.9001474 31 50 31 50" />
          <path stroke="#9C4D4D" stroke-linecap="round" d="M3 41L22.0815162 45.8675256M3.5 37.5L22.0815162 44.8675256M43 44.270357L61.5 39.5M43 45.270357L61.5 42.5" />
        </g>
      </svg>
      <h2 class="mt-4 font-extrabold uppercase text-slate-600 underline underline-offset-4">Flow Cat</h2>
      <hr class="mt-4 w-full border border-zinc-100 shadow-sm" />
    </div>
    <div class="h-1/2 w-full">
      <ul class="flex list-none flex-col items-center text-slate-600">
        <li class="menu-item">
          <a class="flex h-full w-full cursor-pointer rounded-md p-2 hover:bg-zinc-300">
            <svg class="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"><path fill="#000000" d="M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"></path></g>
            </svg>
            <span class="ml-2 text-sm md:ml-4 md:text-base">Dashboard</span>
          </a>
        </li>
        <li class="menu-item">
          <a class="flex h-full w-full rounded-md p-2 hover:bg-zinc-300">
            <svg class="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"><path fill="#000000" d="M832 384H192v448h640V384zM96 320h832V128H96v192zm800 64v480a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V384H64a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h896a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32h-64zM416 512h192a32 32 0 0 1 0 64H416a32 32 0 0 1 0-64z"></path></g>
            </svg>
            <span class="ml-2 text-sm md:ml-4 md:text-base">Components</span>
          </a>
        </li>
        <li class="menu-item">
          <a class="flex h-full w-full cursor-pointer rounded-md p-2 hover:bg-zinc-300">
            <svg class="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path fill="#000000" d="M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"></path>
                <path fill="#000000" d="M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z"></path>
              </g>
            </svg>
            <span class="ml-2 text-sm md:ml-4 md:text-base">Editor</span>
          </a>
        </li>
        <li class="menu-item">
          <a class="flex h-full w-full rounded-md p-2 hover:bg-zinc-300">
            <svg class="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path fill="#000000" d="M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224H128zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64z"></path>
                <path fill="#000000" d="M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224h784zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056z"></path>
              </g>
            </svg>
            <span class="ml-2 text-sm md:ml-4 md:text-base">Contact</span>
          </a>
        </li>
        <li class="menu-item">
          <a class="flex h-full w-full cursor-pointer rounded-md p-2 hover:bg-zinc-300">
            <svg class="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path fill="#000000" d="M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224H128zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64z"></path>
                <path fill="#000000" d="M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224h784zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056z"></path>
              </g>
            </svg>
            <span class="ml-2 text-sm md:ml-4 md:text-base">Parent</span>
            <svg class="absolute right-3 top-3 h-3 w-3 md:h-4 md:w-4" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"><path fill="#000000" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"></path></g>
            </svg>
          </a>
          <ul class="flex flex-col items-center divide-y divide-dashed text-slate-600">
            <li class="h-10 w-full">
              <a class="flex h-full w-full p-2 cursor-pointer rounded hover:bg-stone-200">
                <svg class="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"></path></g></svg>
                <span class="ml-2 text-sm md:ml-4"> Alt Menu</span>
              </a>

            </li>
            <li class="h-10 w-full">
              <a class="flex h-full w-full p-2 cursor-pointer rounded hover:bg-stone-200">
                <svg class="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"></path></g></svg>
                <span class="ml-2 text-sm md:ml-4"> Alt Menu-2</span>
              </a>

            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</aside>

</template>

<script setup lang="ts">

import { ref, defineProps } from "vue";

const props = defineProps({
    class:{ type:String }

});


</script>

<style lang="postcss">

.menu-item {
  @apply relative h-10 w-full font-medium;
}

</style>
