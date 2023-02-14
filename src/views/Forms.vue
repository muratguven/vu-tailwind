<template>
    <div class="flex w-full h-20 justify-center m-1 ">
        <Input type="text" v-model="test" class="h-6 rounded outline-none border text-sm hover:shadow-gray-300 focus:border-gray-500 text-gray-800 shadow-md" />
        <Checkbox id="checkBox" name="testCheck" label="Test" v-model="test" :checked="true" class="text-green-600 border-1 rounded focus:ring-0" label-class="text-black text-sm" />
        
    </div>
    
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Input from '@/components/form/inputs.vue'
import Checkbox from '@/components/form/checkbox.vue'


const test = ref("Deneme");
</script>

<style>

</style>