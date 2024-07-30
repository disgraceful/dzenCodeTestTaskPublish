<template>
  <div class="flex items-center py-2 px-6 border-solid border-2 gap-8 w-max">
    <div class="w-4 h-4 rounded-full" :class="[bgColor]"></div>
    <img class="w-24 h-12 object-contain" :src="images[product.photo]" />

    <!-- Title -->
    <div class="w-52">
      <p class="text-lg underline">{{ product.title }}</p>
      <p class="text-gray-500">{{ product.serialNumber }}</p>
    </div>

    <!-- Status -->
    <div class="w-24 text-center">
      <p :class="[textColor]">
        {{ formatStatus(product.status) }}
      </p>
    </div>

    <!-- Guarantee -->
    <div class="flex gap-3 w-40">
      <div class="flex flex-col text-gray-500">
        <p>from</p>
        <p>to</p>
      </div>
      <div class="flex flex-col text-gray-700">
        <p>{{ formatDate(product.guarantee.start, "DD / MMM / YYYY") }}</p>
        <p>{{ formatDate(product.guarantee.end, "DD / MMM / YYYY") }}</p>
      </div>
    </div>

     <!-- Type -->
     <div class="w-32">
      <p>{{ product.type }}</p>
    </div>

    <!-- Specification -->
    <div class="w-32">
      <p>{{ product.specification }}</p>
    </div>

    <!-- IsNew -->
    <div class="w-24">
      <p>{{ formatIsNew(product.isNew) }}</p>
    </div>

    <!-- Price -->
    <div class="w-24">
      <p class="text-sm text-gray-500">{{ formatPrice(product.price[0]) }}</p>
      <p>{{ formatPrice(product.price[1]) }}</p>
    </div>

    <!-- Group -->
    <div class="text-xl w-52">
      <p v-if="product.group" class="underline">{{ product.group }}</p>
      <p v-else>-</p>
    </div>

    <!-- User -->
    <div class="text-xl w-52 shrink-0">
      <p v-if="product.user" class="underline">{{ product.user }}</p>
      <p v-else>-</p>
    </div>

    <!-- Order -->
    <div class="text-xl w-52">
      <p v-if="order.title" class="underline">{{ order.title }}</p>
      <p v-else>-</p>
    </div>

    <!-- Date -->
    <div class="w-40">
      <p class="text-sm text-gray-500">
        {{ formatDate(product.date, "DD / MM") }}
      </p>
      <p>{{ formatDate(product.date, "DD / MMM / YYYY") }}</p>
    </div>

    <!-- Delete -->
    <div class="ml-6">
      <span
        class="material-symbols-outlined text-gray-500 cursor-pointer"
        @click="emits('delete', product)"
      >
        delete
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import type { Product } from "~/store/types";
import { useImage } from "~/composables/useImage";

interface Props {
  product: Product;
}

const props = defineProps<Props>();
const emits = defineEmits(["delete"]);
const { getters } = useStore();

const order = computed(() => getters.getOrderById(props.product.order));

const { formatDate } = useTime();
const {
  getStatusColor,
  getStatusColorText,
  formatStatus,
  formatIsNew,
  formatPrice,
} = useProduct();

const bgColor = ref(getStatusColor(props.product.status));
const textColor = ref(getStatusColorText(props.product.status));

const { images } = useImage();
</script>
