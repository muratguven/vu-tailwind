<template>
  <div
    class="w-full h-full bg-slate-700 relative"
    @drop="onDrop($event)"
    @dragover.prevent
    @dragenter.prevent
  >
    <div
      class="dragbox"
      ref="box"
      draggable="true"
      @dragstart="startDrag($event)"
      @touchstart="startTouch($event)"
      @drag="onDrag($event)"
      @touchmove="onTouch($event)"
      @dragenter.prevent
    >
      Drag Me!
    </div>

    <div
      class="relative top-5 w-[40%] h-[40%] bg-green-300 text-gray-700 border bg-gradient-to-tr from-green-300 to-green-600"
    >
      drop me!
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const box = ref();
const startDrag = (event: DragEvent) => {
  console.log(event);

  event.dataTransfer!.dropEffect = "move";
  event.dataTransfer!.effectAllowed = "move";

  box.value.style.opacity = 0;
};

const onDrag = (event: DragEvent) => {
  box.value.style.opacity = 1;
  box.value.classList.add("ondrag");
  const x = event.clientX - box.value.offsetWidth;
  const y = event.clientY - box.value.offsetHeight;

  box.value.style.left = x + "px";
  box.value.style.top = y + "px";
  // console.log('x:'+x+' y:'+y);
};
const onDrop = (event: DragEvent) => {
  event.preventDefault;
  box.value.classList.remove("ondrag");
};

const startTouch = (event: TouchEvent) => {
  console.log(event);
  box.value.style.opacity = 0;
};

const onTouch = (event: TouchEvent) => {
  event.preventDefault;
  box.value.style.opacity = 1;
  let touch = event.changedTouches[0];
  const x = touch.clientX - box.value.offsetWidth;
  const y = touch.clientY - box.value.offsetHeight;

  box.value.style.left = x + "px";
  box.value.style.top = y + "px";
};

onMounted(() => {});
</script>

<style scoped>
.dragbox {
  @apply absolute w-32 h-32 left-2/4 top-1/4 z-50 border border-indigo-400 bg-gradient-to-r from-sky-500 to-indigo-500 text-slate-100 p-6 flex justify-center items-center;
  @apply hover:cursor-move;
}

.ondrag {
  @apply border-purple-600 shadow-lg shadow-purple-500;
}
</style>
