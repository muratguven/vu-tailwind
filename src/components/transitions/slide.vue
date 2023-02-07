<template>
  <Transition name="slide"
  :enter-from-class="directionEnter"
  :leave-to-class="directionLeave"
  >
    <slot></slot>
  </Transition>
</template>

<script setup lang="ts">
import {  defineProps, onMounted, computed } from "vue";

const props = defineProps({
    direction:{ type: String, default:'y'}
});

const directionEnter = computed(()=>{
    return props.direction==='vertical'?'enter-from-y':'enter-from-x';
});
const directionLeave = computed(()=>{
    return props.direction==='vertical'?'leave-to-y':'leave-to-x';
});

//TODO:delete this!
onMounted(()=>{
    console.log(props.direction);
});

</script>

<style lang="postcss">
.enter-from-y{
    @apply translate-y-[150%] opacity-0;
}
.enter-from-x{
    @apply translate-x-[150%] opacity-0;
}

.leave-to-y{
    @apply translate-y-[150%] opacity-0;
}

.leave-to-x{
    @apply translate-x-[150%] opacity-0;
}

.slide-enter-active {
  @apply transition ease-in-out duration-300;
}

.slide-leave-active {
    @apply transition ease-in-out duration-300;
}

</style>
