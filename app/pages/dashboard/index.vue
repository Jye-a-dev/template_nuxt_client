<template>
  <section class="dashboard-panel">
    <h1>Dashboard</h1>
    <p>
      This protected page uses the dashboard layout and the auth middleware from the requested Nuxt structure.
    </p>
    <button class="primary-button" type="button" @click="handleLogout">Logout</button>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})

const { logout } = useAuth()

const handleLogout = async () => {
  logout()
  await navigateTo('/')
}
</script>
