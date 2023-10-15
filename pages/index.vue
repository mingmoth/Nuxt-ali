<template>
    <MainLayout>
        <div
            id="IndexPage"
            class="mt-4 max-w-[1200px] min-w-[350px] mx-auto px-2"
        >
            <div
                class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"
            >
                <LoadingProductCard
                    v-if="isLoading"
                    v-for="index in 20"
                    :key="index"
                />
                <ProductCard
                    v-if="products"
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
                />
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import { toRaw } from 'vue';
// components
import MainLayout from '../layouts/MainLayout.vue';
import ProductCard from '../components/ProductCard.vue';
import LoadingProductCard from '../components/loading/LoadingProductCard.vue'

let products = ref(null)
let isLoading = ref(true)

onBeforeMount(async () => {
    const { data } = await useFetch('/api/prisma/product/products')
    setTimeout(() => {
        products.value = toRaw(data.value)
        isLoading.value = false
    }, 1000)
})

</script>