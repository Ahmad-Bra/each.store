import { defineStore } from "pinia";

export const Cart = defineStore("CartItem", {
  state: () => ({
    cartItem: [],
  }),
  actions: {
    addCart(item) {
      let exsits = false;
      let product = item;
      for (let i = 0; i < this.cartItem.length; i++) {
        if (this.cartItem[i].id == product.id) {
          this.cartItem[i].quantity += product.quantity;
          exsits = true;
          break;
        }
      }
      if (!exsits) {
        this.cartItem.push(JSON.parse(JSON.stringify(product)));
      }
      localStorage.setItem("cart-item", JSON.stringify(this.cartItem));
    },
    subTotalPrice() {
      let price = 0;
      this.cartItem.forEach((prodcut) => {
        price +=
          (prodcut.price -
            Math.ceil((prodcut.price * prodcut.discountPercentage) / 100)) *
          prodcut.quantity;
      });
      return Number(price.toFixed(2));
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
