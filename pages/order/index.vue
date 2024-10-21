<template>

  <Head>
    <Title>My Orders </Title>
    <Meta name="all user orders">
    </Meta>
  </Head>
  <NuxtLayout />
  <v-container fluid data-aos="zoom-out">
    <v-row>
      <v-col cols="12" md="9">
        <h1> {{ $t('Your Orders') }}</h1>
        <v-breadcrumbs color="grey" :items="items">
          <template v-slot:divider>
            <v-icon icon="mdi-chevron-right"></v-icon>
          </template>
        </v-breadcrumbs>
      </v-col>
    </v-row>
    <div id="div">
      <v-data-table v-model="order.prodIds" v-if="order.userOrders.length" :items="order.userOrders" show-select>
        <template v-slot:top>
          <DeleteIcon />
        </template>
      </v-data-table>
    </div>
    <v-skeleton-loader v-if="!order.userOrders.length" type="card, text, text, text"></v-skeleton-loader>
  </v-container>
  <PopUpDelete />

</template>

<script>


export default {
  setup() {
    defineRouteRules({
      prerender: true,
    });
    const order = orders()
    let items = ref([
      {
        title: 'Home',
        disabled: false,
        to: '/',
      },
      {
        title: 'My Orders',
        disabled: false,
        to: '/order/',
      },
    ],)
    onBeforeMount(async () => {
      await order.getUserOrders()
    })

    return { order, items, }
  }
}
</script>

<style lang="scss">
.v-data-table-footer {
  display: none !important;
}

.dark-mode .v-data-table .v-table__wrapper>table>thead>tr>th.v-data-table__th--sortable:hover {
  color: #f0f0ff !important;
}

.dark-mode {
  .v-table {
    background: transparent;
    color: white;
  }
}



.v-table {
  th {

    font-weight: 700 !important;
  }
}
</style>