<template>
  <div class="w-full h-full bg-slate-700 relative" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent>
    Drag container!
    <div class="dragbox" ref="box" draggable="true"  @dragstart="startDrag($event)" @drag="onDrag($event)" @dragenter.prevent>Drag Me!</div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
const box = ref();
const startDrag = (event: DragEvent) => {
  console.log(event);
 
  event.dataTransfer!.dropEffect = "link";
  event.dataTransfer!.effectAllowed = 'move';
  
  box.value.style.opacity=0;
};

const onDrag = (event:DragEvent)=>{
  box.value.style.opacity=1;
  const x = event.clientX - box.value.offsetWidth;
  const y = event.clientY - box.value.offsetHeight;

  box.value.style.left = x+"px";
  box.value.style.top = y+"px";
  console.log('x:'+x+' y:'+y);
}
const onDrop = (event:DragEvent)=>{
  
  event.preventDefault;

}

onMounted(()=>{
  
});
</script>

<style scoped>
.dragbox {
  @apply absolute w-32 h-32 left-2/4 top-1/4 border border-indigo-400 bg-gradient-to-r from-sky-500 to-indigo-500 text-slate-100 p-6 flex justify-center items-center;
  @apply hover:cursor-move;
}
</style>
