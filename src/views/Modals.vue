<template>
  <div class="flex justify-center items-center w-full">
    <Modal :show="showModal" @closed="showModal=false">
      <template #modal-header>
        <h1>Modal Header</h1>
      </template>
      <template #body class="flex flex-col justify-center">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim laborum
          quo provident placeat quasi repudiandae obcaecati! Sit, necessitatibus
          laboriosam libero quis voluptatum neque mollitia reprehenderit
          possimus eius id, a vitae.
        </p>
      </template>
      <template #footer>
      <div class="flex justify-end items-center mt-12">
        <button class="border ml-1 rounded-md shadow-lg px-8 py-2 text-white bg-indigo-500 border-indigo-400">Save Changes</button>
        <button class="border ml-1 rounded-md shadow-lg px-4 py-2 text-white bg-gray-500 border-gray-400" @click="showModal=false">Close</button>
      </div>
      </template>
    </Modal>

    <button class="bg-cyan-600 px-4 py-2 rounded-md border border-cyan-500 shadow-md" @click="showModal=true">Open Modal</button>
  </div>
</template>

<script setup lang="ts">
import Modal from "@/components/modal/Modal.vue";
import {ref} from 'vue'

const showModal = ref(false);


</script>

<style scoped></style>
