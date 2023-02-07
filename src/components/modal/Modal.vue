<template>
  <Teleport to="body">
    <Fade>
      <div
        ref="modal-backdrop"
        class="fixed inset-0 backdrop-blur-sm bg-opacity-50 bg-slate-600 flex justify-center items-center"
        v-show="showModal"
      >
        <div
          ref="modal"
          class="absolute z-[90] w-1/2 rounded-lg bg-slate-50 text-gray-900 overflow-hidden shadow-xl p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div ref="modal-header" class="w-full h-6">
            <slot name="modal-header"></slot>
            <button
              class="rounded-full w-7 absolute right-3 top-3 hover:bg-gray-300"
            >
              <font-awesome-icon
                icon="fa-solid fa-xmark"
                size="lg"
                @click="closeModal"
              />
            </button>
          </div>
          <slot></slot>
          <slot name="footer"></slot>
        </div>
      </div>
    </Fade>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, defineProps, watch, defineEmits } from "vue";
import Fade from "@/components/transitions/fade.vue";
const props = defineProps({
  
  visible:{
    type:Boolean,
    default:false
  }
});

const emit = defineEmits(["closed"]);
const showModal = ref(props.visible);

const closeModal = ref(() => {
  showModal.value = false;  
  emit("closed");
});



watch(
  () => props.visible,
  (visible) => {
    
    showModal.value = visible;
  }
);
</script>

<style lang="postcss" scoped></style>
