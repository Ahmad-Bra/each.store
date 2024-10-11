import { Cart } from "~/stores/cart.js";

export default defineNuxtRouteMiddleware(() => {
  let cart = Cart();
  watch(() => {
    if (cart.cartItem.length == 0) {
      return navigateTo("/");
    }
  });
});
