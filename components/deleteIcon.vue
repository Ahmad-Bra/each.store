<template>
  <div class="parent-delete" v-if="orderStore.prodIds.length" @click="orderStore.deletePopup = true">
    <v-icon color="error">
      mdi-delete
    </v-icon>
    <p class="text-black">Delete {{ orderStore.prodIds.length }} Items</p>
  </div>

</template>

<script>
export default {
  setup() {
    let orderStore = orders()

    return { orderStore }

  },
}
</script>

<style lang="scss" scoped>
.parent-delete {
  background-color: #ff00003d;
  margin-bottom: 10px;
  padding: 8px 10px;
  border-radius: 4px;
  margin-left: auto;
  cursor: pointer;
  gap: 4px;
  display: flex;
  align-items: center;

  &:hover {
    background: #ff00004e;
    transition: .3s;
  }
}

.dark-mode .parent-delete p {

  color: #f0f0ff !important;
}
</style>