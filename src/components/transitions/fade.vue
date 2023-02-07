<template>
    <Transition
    enter-from-class="opacity-0"
    enter-active-class="transition ease-in-out duration-300"
    leave-active-class="transition ease-in-out duration-300"
    leave-to-class="opacity-0"
    >
    <slot></slot>
    </Transition>
</template>

<script setup lang="ts">


</script>

<style lang="postcss">

</style>