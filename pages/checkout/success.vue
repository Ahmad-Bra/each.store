<template>
  <div class="success">
    <div class="holder-msg">
      <v-icon style="  background-color: rgb(51, 128, 84);
      font-size: 60px; border-radius: 50%; color: white; padding: 40px; ">mdi-check</v-icon>
      <h2> {{ $t('Congratulations, Your Order has been sent.') }}</h2>
      <v-btn @click="navigateTo('/')"
        style="height: 50px; color: white;background-color: rgba(3, 3, 154,6); margin:  0; margin-top: 10px ;width: 200px; "
        rounded>
        {{ $t('Continue Shopping') }}
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.success {
  background: #f0f0f0;
  height: 100vh;
  align-content: center;
  text-align: center;

  .holder-msg {
    padding: 24px;
    text-align: center;
    color: #121212;

    h2 {
      margin: 20px 0;
    }

  }
}
</style>