import { defineStore } from "pinia";
const { supabase } = useSupabase();
let user = useSupabaseUser();

export const orders = defineStore("orders", {
  state: () => ({
    userOrders: [],
    prodIds: ref([]),
    deletePopup: false,
    order: {
      stripe_id: "",
      first_name: "",
      last_name: "",
      country: "",
      apartment: "",
      user_address: "",
      delivery_method: "",
      phone_number: "",
      user_email: "",
    },
  }),
  actions: {
    // filtring all user orders by his email
    async getUserOrders() {
      const { data: response, error } = await supabase
        .from("orders")
        .select("*")
        .eq("user_email", user.value.email);
      if (response.length > 0) {
        this.userOrders = [];
        response.forEach((order) => {
          this.userOrders.push({
            id: order.id,
            Date: new Date(String(order.created_at)).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              }
            ),
            "First Name": order.first_name,
            "Last_name Name": order.last_name,
            Address: order.user_address,
            Country: order.country || "Not Matched",
          });
        });
      }
    },
    deleteItem() {
      this.prodIds.forEach(async (id) => {
        const { error } = await supabase.from("orders").delete().eq("id", id);
        this.userOrders.forEach((prod, i) => {
          if (prod.id == id) {
            this.userOrders.splice(i, 1);
            console.log("sliced");
          }
        });
      });
      this.deletePopup = false;
    },
  },
});
