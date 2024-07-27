<template>
  <div class="sidebar flex flex-col text-center items-center shadow-2xl">
    <div class="relative">
      <NuxtImg
        class="sidebar__image my-12 rounded-full object-cover"
        src="/profile.jpeg"
      />
      <Fab
        class="right-0 bottom-10 bg-white p-4"
        icon="settings"
        absolute
        shadow
      />
    </div>

    <div class="flex flex-col my-6">
      <NuxtLink class="py-4 text-2xl" to="/orders"> Orders </NuxtLink>
      <NuxtLink class="py-4 text-2xl"> Groups </NuxtLink>
      <NuxtLink class="py-4 text-2xl" to="/products"> Products </NuxtLink>
      <NuxtLink class="py-4 text-2xl"> Users </NuxtLink>
      <NuxtLink class="py-4 text-2xl"> Settings </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Fab from '../Shared/Fab.vue';
</script>

<style scoped>
.sidebar {
  min-width: 280px;
  padding: 50px 30px;
}

.sidebar__image {
  height: 150px;
  width: 150px;
}

.router-link-exact-active {
  text-decoration: green underline;
}
</style>
