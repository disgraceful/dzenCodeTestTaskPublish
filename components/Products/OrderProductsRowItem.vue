<template>
  <div class="flex items-center py-2 px-6 border-solid border-y-2 grow-1 gap-8">
    <div class="w-4 h-4 rounded-full" :class="[bgColor]"></div>
    <img class="w-24 h-12 object-contain" :src="images[product.photo]" />

    <!-- Title -->
    <div class="grow">
      <p class="text-xl">{{ product.title }}</p>
      <p class="text-gray-500">{{ product.serialNumber }}</p>
    </div>

    <!-- Status -->
    <div class="w-1/6">
      <p :class="[textColor]">
        {{ formatStatus(product.status) }}
      </p>
    </div>

    <!-- Delete -->
    <div class="w-1/12 text-right">
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
import type { Product } from "~/store/types";
import { useProduct } from "~/composables/useProduct";
import { useImage } from "~/composables/useImage";

interface Props {
  product: Product;
}

const props = defineProps<Props>();
const emits = defineEmits(["delete"]);

const { getStatusColor, getStatusColorText, formatStatus } = useProduct();

const bgColor = ref(getStatusColor(props.product.status));
const textColor = ref(getStatusColorText(props.product.status));

const { images } = useImage();
</script>
