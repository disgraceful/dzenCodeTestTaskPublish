<template>
  <div
    class="flex items-center relative py-2 px-6 border-solid border-2 cursor-pointer"
    :class="minimized ? 'gap-8' : 'gap-14'"
  >
    <!-- Title -->
    <p
      v-show="!minimized"
      class="text-xl basis-5/12 underline underline-offset-4"
    >
      {{ order.title }}
    </p>

    <!-- Products -->
    <div class="flex basis-1/6">
      <div class="fab mr-4">
        <span class="material-symbols-outlined"> list </span>
      </div>
      <div class="flex-initial">
        <p class="text-xl">{{ products.length }}</p>
        <p class="text-sm text-gray-500">Products</p>
      </div>
    </div>

    <!-- Date -->
    <div class="basis-1/6 flex-auto">
      <template v-if="order.date">
        <p class="text-xs text-gray-500">
          {{ formatDate(order.date, "DD / MM") }}
        </p>
        <p>{{ formatDate(order.date, "DD / MMM / YYYY") }}</p>
      </template>
      <p v-else>-</p>
    </div>

    <!-- Price -->
    <div v-show="!minimized" class="basis-1/6">
      <template v-if="products.length">
        <p v-if="priceSum.value !== 0" class="text-xs text-gray-500">
          {{ formatPrice(priceSum) }}
        </p>
        <p v-if="defaultPriceSum.value !== 0">
          {{ formatPrice(defaultPriceSum) }}
        </p>
      </template>
      <p v-else>-</p>
    </div>

    <!-- Delete -->
    <div v-show="!minimized" @click.stop="$emit('delete')">
      <span class="material-symbols-outlined text-gray-500"> delete </span>
    </div>

    <!-- Minimize Icon -->
    <div
      v-show="selected"
      class="flex absolute top-0 right-0 bottom-0 w-1/12 bg-gray-200 items-center justify-center"
    >
      <span class="material-symbols-outlined"> arrow_forward_ios </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import type { Order, Product } from "~/store/types";
import { useTime } from "~/composables/useTime";
import { useProduct } from "~/composables/useProduct";

interface Props {
  order: Order;
  minimized: boolean;
  selected: boolean;
}

const { order } = defineProps<Props>();
const { getters } = useStore();

const products = computed<Product[]>(() => getters.getOrderProducts(order.id));

const { formatDate } = useTime();
const { getProductPrice, formatPrice } = useProduct();

const defaultPriceSum = computed(() => getProductPrice(products.value, true));
const priceSum = computed(() => getProductPrice(products.value, false));
</script>

<style scoped>
.fab {
  padding: 12px;
  background-color: #fff;
  border: 1px solid #333;
  border-radius: 50%;
  display: flex;
  z-index: 10;
}
</style>
