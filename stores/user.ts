import { defineStore } from "pinia";


export const useUserStore: StoreDefinition<"user", {
    isMenuOverlay: boolean;
    isLoading: boolean;
    cart: never[];
    checkout: never[];
}, {}, {}> = defineStore('user', {
    state: () => ({
        isMenuOverlay: false,
        isLoading: false,
        cart: [],
        checkout: [],
    }),
    persist: true
})