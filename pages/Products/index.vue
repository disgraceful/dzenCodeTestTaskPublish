<template>
  <div class="w-full">
    <!-- Title -->
    <div class="flex gap-10 items-center">
      <h1 class="text-3xl font-bold">Products / {{ products.length }}</h1>

      <!-- Select Type -->
      <div class="flex gap-4 items-center">
        <label for="productType" class="text-gray-500">Type: </label>

        <Select
          id="productType"
          class="w-56"
          v-model="selectedType"
          :options="typeOptions"
        />
      </div>

      <div class="flex gap-4 items-center">
        <label for="specificationType" class="text-gray-500"
          >Specification:
        </label>

        <Select
          id="specificationType"
          class="w-56"
          v-model="selectedSpecification"
          :options="specificationOptions"
        />
      </div>
    </div>

    <!-- Product Table -->
    <div class="prodcut-container w-full flex gap-5">
      <div class="prodcut-wrapper w-full flex flex-col grow gap-2">
        <ProductRowItem
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
          @delete="showDelete"
        />
      </div>
    </div>

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
import type { Product } from "~/store/types";
import ProductRowItem from "~/components/Products/ProductRowItem.vue";
import Select from "~/components/Shared/Select.vue";
import DeleteProductModal from "~/components/Products/DeleteProductModal.vue";

const { getters } = useStore();
const { showModal, productToDelete, showDelete, closeModal, deleteProduct } =
  useProduct();

const products = computed<Product[]>(() => getters.getProducts);

const typeOptions = ref(["Monitors", "Motherboards"]);
const selectedType = ref(typeOptions.value[0]);

const specificationOptions = ref([
  "Specification 1",
  "Specification 2",
  "Specification 3",
]);
const selectedSpecification = ref(specificationOptions.value[0]);

const filteredProducts = computed(() =>
  products.value.filter(
    (p) =>
      p.type === selectedType.value &&
      p.specification === selectedSpecification.value
  )
);
</script>

<style scoped>
.prodcut-container {
  margin-top: 60px;
}

.prodcut-wrapper {
  overflow-x: auto;
  max-width: 1200px;
}
</style>
