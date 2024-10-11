<template>
  <v-dialog transition="dialog-bottom-transition" width="auto" v-model="orderStore.deletePopup">
    <v-card class="text-center" style=" width:320px; padding: 24px 20px !important;  ">
      <v-card-title>
        <v-icon style="font-size: 50px; padding: 40px; border-radius: 50%; margin-bottom: 24px;"
          class="bg-red-darken-3">
          mdi-delete
        </v-icon>
      </v-card-title>
      <div class="font-weight-bold pa-0 mb-5">
        Are you sure you want to delete this product ?
      </div>
      <v-card-actions class="ma-0">
        <v-btn class="text-white bg-info" text="Close Dialog" @click="orderStore.deletePopup = false">Cansel</v-btn>
        <v-btn class="text-white bg-error" text="Close Dialog " @click="orderStore.deleteItem">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  setup() {
    const orderStore = orders()
    return { orderStore }
  }
}
</script>

<style></style>