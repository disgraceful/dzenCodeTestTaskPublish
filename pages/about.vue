<script setup lang="ts">
import { NuxtImg } from '#build/components';
</script>

<template>
  <main>
    <div>
      <h1>About</h1>
      <NuxtLink to="/">Home</NuxtLink>
    </div>
    <NuxtImg src="/profile.jpeg" loading="lazy" />
  </main>
</template>