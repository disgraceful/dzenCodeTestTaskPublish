<template>
  <div class="w-full">
    <!-- Title -->
    <div class="flex items-center gap-4">
      <Fab
        class="p-2 bg-green-600 border-4 border-green-900"
        icon="add"
        shadow
      />
      <h1 class="text-3xl font-bold">Orders / {{ orders.length }}</h1>
    </div>

    <div class="list-container flex gap-5">
      <!-- Order List -->
      <div
        class="flex flex-col grow gap-2"
        :class="{ 'w-2/5': isOrderSelected }"
      >
        <OrderRowItem
          v-for="order in orders"
          :key="order.id"
          :order="order"
          :minimized="isOrderSelected"
          :selected="selectedOrder === order"
          @click="selectOrder(order)"
          @delete="showDelete(order)"
        />
      </div>

      <!-- Order's Product List -->
      <OrderSelectView
        v-if="isOrderSelected && selectedOrder"
        class="w-3/5 pt-5"
        @close="unselectOrder()"
        :order="selectedOrder"
      />

      <!-- Delete Order Modal -->
      <Teleport to="body">
        <Modal
          :open="showModal"
          title="Are you sure you want to delete this order?"
          @close="showModal = false"
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
              <NuxtImg class="w-24 h-12 object-cover" :src="product.photo" />

              <div class="grow">
                <p class="text-lg underline">{{ product.title }}</p>
                <p class="text-gray-500">{{ product.serialNumber }}</p>
              </div>
            </div>
          </template>

          <!-- Footer -->
          <template #footer>
            <div class="flex p-8 justify-end bg-green-500 gap-6">
              <Button class="text-white" inline @click="showModal = false">
                Cancel
              </Button>
              <Button class="bg-white text-red-600" icon="delete">
                Delete
              </Button>
            </div>
          </template>
        </Modal>
      </Teleport>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import OrderRowItem from "~/components/Orders/OrderRowItem.vue";
import OrderSelectView from "~/components/Orders/OrderSelectView.vue";
import Modal from "~/components/Shared/Modal.vue";
import Fab from "~/components/Shared/Fab.vue";
import Button from "~/components/Shared/Button.vue";
import type { Order, Product } from "~/store/types";

const { getters } = useStore();

const orders = computed<Order[]>(() => getters.getOrders);

const { getStatusColor } = useProduct();

// select order
const isOrderSelected = ref(false);
const selectedOrder = ref<Order | null>(null);
const selectOrder = (order: Order) => {
  selectedOrder.value = order;
  isOrderSelected.value = true;
};
const unselectOrder = () => {
  isOrderSelected.value = false;
  selectedOrder.value = null;
};

// modal
const showModal = ref(false);
const deleteOrder = ref<Order | null>(null);
const deleteOrderProducts = computed<Product[]>(() =>
  getters.getOrderProducts(deleteOrder.value!.id)
);
function showDelete(order: Order) {
  showModal.value = true;
  deleteOrder.value = order;
}
</script>

<style scoped>
.list-container {
  margin-top: 60px;
}
</style>
