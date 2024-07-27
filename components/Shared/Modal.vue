<template>
  <div v-if="open" class="modal relative">
    <Fab class="p-2 -right-3 -top-3 bg-white" icon="close" absolute
    @click="emits('close')"/>
    <h2 class="text-2xl px-6 my-5">{{ title }}</h2>

    <!-- Body -->
    <slot name="body" />

    <!-- Footer -->
    <slot name="footer" />
  </div>

  <!-- Overlay -->
  <div v-if="open" class="modal-overlay"></div>
</template>

<script lang="ts" setup>
import Fab from "./Fab.vue";

interface Props {
  title: string;
  open: boolean;
}

const props = defineProps<Props>();
const emits = defineEmits(["close"]);
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  z-index: 40;
  left: 280px;
  top: 90px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.modal {
  position: fixed;
  border-radius: 4px;
  z-index: 999;
  top: 30%;
  left: 50%;
  margin-left: -150px;
  background-color: #fff;
}
</style>
