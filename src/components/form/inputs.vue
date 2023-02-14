<template>
  <input  :type="props.type" :class="props.class" v-model="value" />
</template>

<script setup lang="ts">
import { defineProps, onMounted, defineEmits, computed } from "vue";
const props = defineProps({
  type: { type: String, required: true, validator:(val:string)=>{
    console.log(val);
    return !(["checkbox"].includes(val))
  } },
  class: {
    type: String,
  },
  placeHolder: {
    type: String,
  },
  modelValue: {},
});

const emits = defineEmits(["updated:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("updated:modelValue", value);
  },
});
onMounted(() => {
  
  if(props.type==='checkbox'){
    throw new Error('Please use Checkbox component instead of input component!')
  }
});
</script>

<style lang="postcss"></style>
