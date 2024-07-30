import type { Order, Product, StoreState } from "./types";

export const state = (): StoreState => ({
  orders: [
    {
      id: 1,
      title: "Order 1",
      date: "2017-06-29 12:09:33",
      description: "desc",
    },
    {
      id: 2,
      title: "Order 2",
      date: "2017-06-29 12:09:33",
      description: "desc",
    },
    {
      id: 3,
      title: "Order 3",
      date: "2017-06-29 12:09:33",
      description: "desc",
    },
  ],
  products: [
    {
      id: 1,
      serialNumber: 1234,
      isNew: 1,
      photo: "product",
      title: "Product 1",
      type: "Monitors",
      specification: "Specification 1",
      guarantee: {
        start: "2017-06-29 12:09:33",
        end: "2017-06-29 12:09:33",
      },
      price: [
        { value: 100, symbol: "USD", isDefault: 0 },
        { value: 2600, symbol: "UAH", isDefault: 1 },
      ],
      order: 1,
      date: "2017-06-29 12:09:33",
      group: "Group name",
      user: "First Name Last Name",
      status: 2,
    },
    {
      id: 3,
      serialNumber: 1234,
      isNew: 0,
      photo: "product",
      title: "Product 1",
      type: "Monitors",
      specification: "Specification 1",
      guarantee: {
        start: "2017-06-29 12:09:33",
        end: "2017-06-29 12:09:33",
      },
      price: [
        { value: 100, symbol: "USD", isDefault: 0 },
        { value: 2600, symbol: "UAH", isDefault: 1 },
      ],
      order: 1,
      date: "2017-06-29 12:09:33",
      group: "",
      user: "First Name Last Name",
      status: 1,
    },
    {
      id: 2,
      serialNumber: 1234,
      isNew: 1,
      photo: "product",
      title: "Product 1",
      type: "Monitors",
      specification: "Specification 1",
      guarantee: {
        start: "2017-06-29 12:09:33",
        end: "2017-06-29 12:09:33",
      },
      price: [
        { value: 0, symbol: "USD", isDefault: 0 },
        { value: 2600, symbol: "UAH", isDefault: 1 },
      ],
      order: 2,
      date: "2017-06-29 12:09:33",
      group: "Group name",
      user: "First Name Last Name",
      status: 1,
    },
  ],
});

export const getters = {
  getOrders: (state: StoreState): Order[] => state.orders,

  getProducts: (state: StoreState): Product[] => state.products,

  getOrderById: (state: StoreState) => (id: number) =>
    state.orders.find((o) => o.id === id),

  getOrderProducts:
    (state: StoreState) =>
    (orderId: number): Product[] =>
      state.products.filter((p) => p.order === orderId),
};

export const mutations = {
  deleteOrder(state: StoreState, orderId: number): void {
    state.orders = state.orders.filter((o) => o.id !== orderId);
    state.products = state.products.filter((p) => p.order !== orderId);
  },

  deleteProduct(state: StoreState, productId: number): void {
    state.products = state.products.filter((p) => p.id !== productId);
  },
};

export const actions = {
  deleteOrder({ commit }, orderId: number) {
    commit("deleteOrder", orderId);
  },

  deleteProduct({ commit }, productId: number) {
    commit("deleteProduct", productId);
  },
};
