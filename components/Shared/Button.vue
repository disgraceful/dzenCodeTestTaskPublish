<template>
  <div
    class="flex py-2 px-6 justifty-center items-center rounded-full cursor-pointer button"
    :class="{ 'shadow-xl': !inline }"
  >
    <span v-if="icon" class="material-symbols-outlined pr-4"> {{ icon }} </span>
    <span class="uppercase">
      <slot />
    </span>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  icon?: string;
  inline?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  icon: "",
  inline: false,
});
</script>
