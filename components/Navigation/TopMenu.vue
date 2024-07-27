<template>
  <div class="flex navbar items-center shadow-lg">
    <!-- Logo -->
    <div class="logo flex flex-inital">
      <span class="text-xl font-bold text-green-700">INVENTORY</span>
    </div>

    <!-- Searchbar -->
    <div class="navbar__searchbar flex-auto">
      <input
        id="search"
        v-model="search"
        class="input shadow-inner bg-gray-100 rounded-md px-3 py-1 w-1/3"
        type="text"
      />
    </div>

    <!-- Date -->
    <div class="date flex-initial">
      <p class="text-lg">{{ currentDayName }}</p>
      <p class="items-center flex text-sm">
        <span class="mr-3">{{ currentDate }} </span>
        <span class="material-symbols-outlined mr-3"> schedule </span>
        <span>{{ currentTime }}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTime } from "~/composables/useTime";

const search = ref("Search");

const { currentDayName, currentDate, currentTime, startTimer, clearTimer } =
  useTime();

onMounted(() => startTimer());
onUnmounted(() => clearTimer());
</script>

<style scoped>
.navbar {
  height: 100px;
  padding-right: 120px;
  padding-left: 280px;
}

.navbar__searchbar {
  padding-left: 40px;
}
</style>
