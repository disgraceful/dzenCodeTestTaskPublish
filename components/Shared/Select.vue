<template>
  <select v-model="model" class="py-1 px-3 rounded-md">
    <option v-for="opt in options" :value="opt">{{ opt }}</option>
  </select>
</template>

<script lang="ts" setup>
const model = defineModel();
interface Props {
  options: string[];
}

const props = defineProps<Props>();
</script>
