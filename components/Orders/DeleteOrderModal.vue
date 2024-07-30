<template>
  <Modal
    :open="open"
    title="Are you sure you want to delete this order?"
    @close="emits('close')"
  >
    <!-- Product List -->
    <template #body>
      <div
        class="flex items-center py-2 px-6 border-solid border-t-2 grow-1 gap-8"
        v-for="product in deleteOrderProducts"
      >
        <div
          class="w-4 h-4 rounded-full"
          :class="[getStatusColor(product.status)]"
        ></div>
        <img class="w-24 h-12 object-contain" :src="images[product.photo]" />

        <div class="grow">
          <p class="text-lg underline">{{ product.title }}</p>
          <p class="text-gray-500">{{ product.serialNumber }}</p>
        </div>
      </div>
    </template>

    <!-- Footer -->
    <template #footer>
      <div class="flex p-8 justify-end bg-green-500 gap-6">
        <Button class="text-white" inline @click="emits('close')">
          Cancel
        </Button>
        <Button
          class="bg-white text-red-600"
          icon="delete"
          @click="emits('delete')"
        >
          Delete
        </Button>
      </div>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import type { Product } from "~/store/types";
import Modal from "../Shared/Modal.vue";
import Button from "../Shared/Button.vue";
import { useImage } from "~/composables/useImage";
import { useProduct } from "~/composables/useProduct";
import { useStore } from "vuex";

const props = defineProps({
  open: Boolean,
  orderId: Number,
});

const emits = defineEmits(["close", "delete"]);

const { getters } = useStore();
const { getStatusColor } = useProduct();
const { images } = useImage();

const deleteOrderProducts = computed<Product[]>(() =>
  getters.getOrderProducts(props.orderId)
);
</script>
