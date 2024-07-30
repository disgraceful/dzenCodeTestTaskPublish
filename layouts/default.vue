<template>
  <div class="flex flex-col h-full">
    <TopMenu />
    <div class="h-full flex">
      <NavigationMenu />
      <div class="main-container h-full flex flex-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import TopMenu from '~/components/Navigation/TopMenu.vue';
import NavigationMenu from '~/components/Navigation/NavigationMenu.vue';
</script>

<style scoped>
  .main-container {
    padding: 80px 120px;
  }
</style>
