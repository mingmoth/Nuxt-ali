<template>
    <MainLayout>
        <div
            id="IndexPage"
            class="mt-4 max-w-[1200px] min-w-[350px] mx-auto px-2"
        >
            <div
                class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"
            >
                <div
                    v-if="products"
                    v-for="product in products"
                    :key="product.id"
                >
                    <ProductCard
                        :product="product"
                    />
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '../layouts/MainLayout.vue';
import ProductCard from '../components/ProductCard.vue';

const products = [
    { id: 1, title: "Title 1", description: "This is a description", url: "https://picsum.photos/id/7/300/300", price: 9999 },
    { id: 2, title: "Title 2", description: "This is a description", url: "https://picsum.photos/id/71/300/300", price: 9199 },
    { id: 3, title: "Title 3", description: "This is a description", url: "https://picsum.photos/id/72/300/300", price: 99299 },
    { id: 4, title: "Title 4", description: "This is a description", url: "https://picsum.photos/id/73/300/300", price: 99939 },
    { id: 5, title: "Title 5", description: "This is a description", url: "https://picsum.photos/id/74/300/300", price: 9949 },
    { id: 6, title: "Title 6", description: "This is a description", url: "https://picsum.photos/id/75/300/300", price: 299 },
    { id: 7, title: "Title 7", description: "This is a description", url: "https://picsum.photos/id/76/300/300", price: 9699 },
    { id: 8, title: "Title 8", description: "This is a description", url: "https://picsum.photos/id/77/300/300", price: 9799 },
    { id: 9, title: "Title 9", description: "This is a description", url: "https://picsum.photos/id/78/300/300", price: 939 },
    { id: 10, title: "Title 10", description: "This is a description", url: "https://picsum.photos/id/79/300/300", price: 9989 },
]

</script>