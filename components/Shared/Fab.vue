<template>
  <div
    class="flex shadow-xl rounded-full cursor-pointer z-10"
    :class="{ absolute, 'shadow-xl': shadow }"
  >
    <span class="material-symbols-outlined" :class="iconClass">
      {{ icon }}
    </span>
  </div>
</template>

<script lang="ts" setup>
const { icon, absolute } = defineProps({
  icon: String,
  absolute: Boolean,
  shadow: Boolean,
  iconClass: String,
});
</script>
