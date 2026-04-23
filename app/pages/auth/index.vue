<template>
  <section class="auth-panel">
    <h1>Auth page</h1>
    <p>
      Demo auth screen for the Nuxt template. Click login to set local in-memory auth state and enter the dashboard layout.
    </p>
    <button class="primary-button" type="button" @click="handleLogin">Login demo</button>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'public'
})

const { login } = useAuth()

const handleLogin = async () => {
  await login({
    email: 'demo@nuxt.local',
    password: 'password'
  })

  await navigateTo('/dashboard')
}
</script>
