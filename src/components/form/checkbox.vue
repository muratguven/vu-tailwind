<template>
  <label class="inline-flex items-center">
    <input
      :id="props.id"
      type="checkbox"
      :name="props.name"
      :value="props.value"
      @input="updateValue"
      :checked="props.checked"
      :class="checkBoxClass"
      
    />
    <span :for="props.id" :class="props.labelClass">{{ props.label }}</span>
  </label>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
  id: { type: String },
  name: { type: String, required: true },
  label: { type: String },
  labelClass: { type: String, default:'ml-2' },
  class: { type: String },
  checked: { type: Boolean, default: false },
  value: { type: String },
});

const emit = defineEmits<{
  (e: "update:value", value: String): void;
  (e: "checked", checked: Boolean): void;
}>();

const updateValue = (e: Event) => {
  emit("update:value", (e.target as HTMLInputElement).value);
};
const checkBoxClass = computed(()=>{
    if(!props.class){
        return 'h-4 w-4 rounded';
    }
    return props.class;
});
</script>

<style scoped></style>
