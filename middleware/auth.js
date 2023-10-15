export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser()

    if (user.value && to.fullPath == '/auth') {
        return navigateTo('/')
    }

    if (!user.value && to.fullPath == '/checkout') {
        return navigateTo('/auth')
    }
})