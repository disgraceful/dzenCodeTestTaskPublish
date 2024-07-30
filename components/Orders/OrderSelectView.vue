<template>
  <div class="relative border-solid border-2 overflow-visible">
    <div class="px-6">
      <Fab
        class="p-3 -right-5 -top-5 bg-white"
        icon="close"
        absolute
        shadow
        @click="emits('close')"
      />

      <h3 class="text-2xl">{{ order.title }}</h3>

      <!-- Add product button -->
      <div class="flex items-center gap-3 mt-5 mb-3 cursor-pointer">
        <Fab class="p-1 bg-green-500 inline-flex" icon="add" />
        <span class="text-green-500">Add product</span>
      </div>
    </div>

    <!-- Product List -->
    <OrderProductsRowItem
      v-for="product in products"
      :key="product.id"
      :product="product"
      @delete="showDelete"
    />

    <!-- Delete Product Modal -->
    <ClientOnly>
      <Teleport to="body">
        <DeleteProductModal
          :open="showModal"
          :product="productToDelete"
          @delete="deleteProduct"
          @close="closeModal"
        />
      </Teleport>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import OrderProductsRowItem from "~/components/Products/OrderProductsRowItem.vue";
import Fab from "../Shared/Fab.vue";
import type { Order, Product } from "~/store/types";
import { useProduct } from "~/composables/useProduct";
import DeleteProductModal from "../Products/DeleteProductModal.vue";

interface Props {
  order: Order;
}

const props = defineProps<Props>();
const emits = defineEmits(["close"]);

const { getters } = useStore();
const { showModal, productToDelete, showDelete, closeModal, deleteProduct } =
  useProduct();

const products = computed<Product[]>(() =>
  getters.getOrderProducts(props.order.id)
);
</script>
