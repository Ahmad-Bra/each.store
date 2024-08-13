import { defineStore } from "pinia";

export const Cart = defineStore("CartItem", {
  state: () => ({
    cartItem: [],
  }),
  actions: {
    addCart(item) {
      let exsits = false;
      for (let i = 0; i < this.cartItem.length; i++) {
        if (this.cartItem[i].id == item.id) {
          this.cartItem[i].quantity += item.quantity;
          exsits = true;
          break;
        }
      }
      if (!exsits) {
        this.cartItem.push(JSON.parse(JSON.stringify(item)));
      }
      localStorage.setItem("cart-item", JSON.stringify(this.cartItem));
    },
    getItemCart() {
      if (localStorage.getItem("cart-item")) {
        this.cartItem = JSON.parse(localStorage.getItem("cart-item"));
      }
    },
    deletItem(id) {
      const { $bus } = useNuxtApp();
      $bus.$emit("openConfDelete", id);
    },
    clearCart() {
      const { $bus } = useNuxtApp();
      $bus.$emit("openConfDeleteAll");
    },
  },
});
