import { defineStore } from "pinia";
import axios from "axios";

export const ProductsModule = defineStore("ProductsModule", {
  state: () => ({
    favorite: [],
    catName: [],
    products: [],
    newProducts: [],
    topSmartPhones: [],
    topFragrances: [],
    topSkinCare: [],
    productsCategory: [],
    productDetails: "",
    productRev: [],
    categories: [
      {
        title: "smartPhones",
        route: "smartphones",
      },
      {
        title: "Laptops",
        route: "laptops",
      },
      {
        title: "Lighting",
        route: "lighting",
      },
      {
        title: "Groceries",
        route: "groceries",
      },
      {
        title: "Furniture",
        route: "furniture",
      },
      {
        title: "HomeDecoration",
        route: "home-decoration",
      },
      {
        title: "MensWatches",
        route: "mens-watches",
      },
      {
        title: "MensShirts",
        route: "mens-shirts",
      },
      {
        title: "Sunglasses",
        route: "sunglasses",
      },
    ],
  }),
  actions: {
    addToFav(item) {
      item.quantity = 1;
      this.favorite.push(item);
      localStorage.setItem("fav-item", JSON.stringify(this.favorite));
    },
    getFavItems() {
      if (localStorage.getItem("fav-item")) {
        this.favorite = JSON.parse(localStorage.getItem("fav-item"));
      }
    },
    deletFavItem(id) {
      for (let i = 0; i <= this.favorite.length; i++) {
        if (this.favorite[i].id == id) {
          this.favorite.splice(i, 1);
          break;
        }
      }
      localStorage.setItem("fav-item", JSON.stringify(this.favorite));
    },
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          this.newProducts = res.data.products.filter(
            (el) => el.category === "laptops"
          );
          this.products = res.data.products.slice(0, 10);
          this.topFragrances = this.products.filter(
            (el) => el.category === "fragrances"
          );
        })
        .catch(() => console.log("error data"));
    },
    async getByCategory(product) {
      await axios
        .get(`https://dummyjson.com/products/category/${product}`)
        .then((res) => {
          this.productsCategory = res.data;
        })
        .catch(() => console.log("error res"));
    },
    async getSingleProd(productId) {
      await axios
        .get(`https://dummyjson.com/products/${productId}`)
        .then((res) => {
          this.productDetails = res.data;
          this.productRev = res.data.reviews;
          localStorage.setItem("reviews", JSON.stringify(this.productRev));
        })
        .catch(() => console.log("error res"));
    },
  },
});
