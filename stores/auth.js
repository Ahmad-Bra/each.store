import { defineStore } from "pinia";
export const auth = defineStore("auth", {
  state: () => ({}),
  actions: {
    checkToken() {
      if (!localStorage.getItem("user-token")) {
        return navigateTo("/login");
      }
    },
  },
});
