<template>
	<div class="newProducts">
		<v-container fluid>
			<h1 class="text-red font-wight-bold py-5">New products</h1>
			<v-row class="align-center ">
				<v-col cols="7" v-if="!newItmes.length">
					<v-row>
						<v-col cols="12">
							<v-row>
								<v-col v-for="num in 3" :key="num" cols="4">
									<v-skeleton-loader type="card, paragraph, actions"></v-skeleton-loader>
								</v-col>
							</v-row>
						</v-col>
					</v-row>
				</v-col>
				<v-col v-else cols="12" sm="12" lg="7">
					<swiper style="padding: 40px 0;" :grab-cursor="true"
						:pagination="{ el: '.swiper-pagination', clickable: true }" :modules="modules"
						:breakpoints="breakpoints" space-between="10"
						:navigation="{ prevIcon: '.prev', nextIcon: '.next' }" :autoplay="{ delay: 3000 }"
						effect="coverflow">
						<swiper-slide v-for="item in newItmes" :key="item.id" cols="3">
							<v-card>
								<v-card-item>
									<v-card-subtitle class="img-holder" style="position: relative;">
										<img style="height: 200px" :src="ShownItem[item.title]
											? ShownItem[item.title]
											: item.thumbnail
											" alt="" />
										<v-btn @click="quickView(item)" variant="outlined" rounded
											class="quick bg-white"
											style="height: 30px; position: absolute; inset: 50%; transform: translate(-50%, -50%); font-size: 12px; ">
											Quick View
										</v-btn>
									</v-card-subtitle>
									<v-card-text>
										<p>
											({{ item.title }})
											{{
												item.description.length <= 40 ? item.description : item.description.slice(0,
													20) }} ... </p>
												<v-rating v-model="item.rating" density="compact"
													color="yellow-darken-3" half-increment readonly>
												</v-rating>
												<p>
													<del>${{ item.price }}</del> From<span
														class="font-weight-bold text-red">
														${{
															Math.ceil(item.price -
																Math.ceil(
																	(item.price * item.discountPercentage) / 100
																))
														}}</span>
												</p>
									</v-card-text>
									<v-card-actions class="action">
										<v-btn-toggle class="mb-5 action" v-model="ShownItem[item.title]">
											<v-btn size="x-small action" v-for="(pic, i) in item.images" :value="pic"
												:key="i">
												<img :src="pic" style="
                            width: 40px;
                            height: 40px;
                            border-radius: 50%;
                            border: 1px solid #ccc;" />
											</v-btn>
										</v-btn-toggle>
									</v-card-actions>
									<div class="d-flex align-center">
										<v-btn style="font-weight: bold;" icon=" mdi-heart" variant="text"
											@click="addToFav(item)">
										</v-btn>
										<v-btn @click="navigateTo(`/productDetails/${item.id}`)" rounded
											class=" w-75 btn"
											style="width: 100%; padding: 3px 0; font-weight: 500">Choose
											Options</v-btn>
									</div>
								</v-card-item>
							</v-card>
						</swiper-slide>
						<div class="swiper-prev"></div>
						<div class="swiper-next"></div>
						<div class="swiper-pagination"></div>
					</swiper>
				</v-col>
				<v-col cols="12" sm="12" lg="5">
					<img style="width: 100%;" src="/images/vr-banner.webp" alt="" />
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import { ProductsModule } from "~/stores/Products"
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { mapActions } from "pinia";
export default {
	mounted() {
		const { $bus } = useNuxtApp();
		this.bus = $bus.$emit
	},
	methods: {
		...mapActions(ProductsModule, ["addToFav"]),
		quickView(product) {
			this.bus("openQuickView", product)
		},
	},
	components: {
		Swiper, SwiperSlide
	},
	props: {
		newItmes: {
			type: Array,
		},
	},
	setup() {
		return {
			modules: [Navigation, Pagination, Autoplay, EffectCoverflow],
		};
	},
	data() {
		return {
			bus: '',
			ShownItem: {},
			breakpoints: {
				0: {
					slidesPerView: 1,
				}, 580: {
					slidesPerView: 3,
				}, 767: {
					slidesPerView: 3,
				}, 990: {
					slidesPerView: 3,
				}
			},
		}
	}
}
</script>

<style lang="scss">
.quick {
	opacity: 0;
}

.img-holder:hover .quick {
	opacity: 1;
}


.swiper-pagination-bullet {
	width: 13px;
	background-color: rgb(3, 3, 154);
	height: 13px;
	margin: 0px 20px;
}

.dark-mode .swiper-next,
.dark-mode .swiper-prev,
.dark-mode .v-skeleton-loader,
.dark-mode .action,
.dark-mode .btn,
.dark-mode .card {
	background-color: #0a0313 !important;
	color: white !important;
}
</style>