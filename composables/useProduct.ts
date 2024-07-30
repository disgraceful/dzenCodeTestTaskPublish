import { useStore } from "vuex";
import type { Price, Product } from "~/store/types";

const STATUS_COLOR = {
  0: "bg-gray-500",
  1: "bg-yellow-300",
};

const STATUS_COLOR_TEXT = {
  0: "text-gray-500",
  1: "text-yellow-300",
};

const STATUS_TEXT = {
  0: "Available",
  1: "In repairs",
};

const NEW_STATUS = {
  0: "New",
  1: "Used",
};

export function useProduct() {
  const { dispatch } = useStore();

  function getProductPrice(products: Product[], isDefault = false): Price {
    const val = products.reduce((acc, curV) => {
      const price = curV.price.find((p) => Boolean(p.isDefault) === isDefault);
      if (!price) {
        return acc + 0;
      }

      return acc + price.value;
    }, 0);

    return {
      value: val,
      symbol: isDefault ? "UAH" : "USD",
      isDefault: isDefault ? 1 : 0,
    };
  }

  function getStatusColor(status: number) {
    return (STATUS_COLOR as any)[status] ?? STATUS_COLOR[0];
  }

  function getStatusColorText(status: number) {
    return (STATUS_COLOR_TEXT as any)[status] ?? STATUS_COLOR_TEXT[0];
  }

  function formatStatus(status: number) {
    return (STATUS_TEXT as any)[status] ?? STATUS_TEXT[0];
  }
  function formatIsNew(status: number) {
    return (NEW_STATUS as any)[status] ?? NEW_STATUS[0];
  }

  function formatPrice(price: Price) {
    if (price.value === 0) {
      return "";
    }
    return `${price.value} ${price.symbol === "USD" ? "$" : price.symbol}`;
  }

  // Delete Product
  const showModal = ref(false);
  const productToDelete = ref<Product | null>(null);

  function showDelete(product: Product) {
    showModal.value = true;
    productToDelete.value = product;
  }

  function closeModal() {
    showModal.value = false;
    productToDelete.value = null;
  }

  function deleteProduct() {
    if (!productToDelete.value) {
      return;
    }

    dispatch("deleteProduct", productToDelete.value.id);
    closeModal();
  }

  return {
    getProductPrice,
    getStatusColor,
    getStatusColorText,
    formatStatus,
    formatIsNew,
    formatPrice,
    // delete produt
    showModal,
    productToDelete,
    showDelete,
    closeModal,
    deleteProduct,
  };
}
