const authNeededPage = ['/checkout', '/address', '/orders']

export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser()

    if (!user.value && authNeededPage.includes(to.fullPath)) {
        return navigateTo('/auth')
    }

    if (user.value && to.fullPath == '/auth') {
        return navigateTo('/')
    }
})