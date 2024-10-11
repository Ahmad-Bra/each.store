<template>
  <div class="empty-block text-center">
    <img src="/public/images/empty-bg.png" alt="">
    <p>{{ $t('No Product has been added recently, Please add ') }}
      <span>{{ $t('Product') }}</span>
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.empty-block {
  height: 400px;
  align-content: center;
  padding: 10px 24px;

  p {
    color: #000;
    margin: auto !important;
    text-align: center;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 312px;
  }

  span {
    color: #3978fe;

    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
}
</style>