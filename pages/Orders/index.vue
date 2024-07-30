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
        :order="selectedOrder"
        @close="unselectOrder()"
      />

      <!-- Delete Order Modal -->
      <ClientOnly>
        <Teleport to="body">
          <DeleteOrderModal
            :open="showModal"
            :order-id="orderToDelete?.id"
            @delete="deleteOrder"
            @close="closeModal"
          />
        </Teleport>
      </ClientOnly>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import OrderRowItem from "~/components/Orders/OrderRowItem.vue";
import OrderSelectView from "~/components/Orders/OrderSelectView.vue";
import Fab from "~/components/Shared/Fab.vue";
import type { Order } from "~/store/types";
import DeleteOrderModal from "~/components/Orders/DeleteOrderModal.vue";

const { getters, dispatch } = useStore();

const orders = computed<Order[]>(() => getters.getOrders);

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

// delete order
const showModal = ref(false);
const orderToDelete = ref<Order | null>(null);
const showDelete = (order: Order) => {
  showModal.value = true;
  orderToDelete.value = order;
};

const closeModal = () => {
  showModal.value = false;
  orderToDelete.value = null;
};

const deleteOrder = () => {
  if (!orderToDelete.value) {
    return;
  }

  dispatch("deleteOrder", orderToDelete.value.id);
  closeModal();
};
</script>

<style scoped>
.list-container {
  margin-top: 60px;
}
</style>
