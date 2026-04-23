export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated.value && to.path.startsWith('/dashboard')) {
    return navigateTo('/auth')
  }
})
