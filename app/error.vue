<template>
  <NuxtLayout name="public">
    <section class="error-panel">
      <h1>{{ error?.statusCode || 500 }}</h1>
      <p>{{ error?.statusMessage || 'Something went wrong.' }}</p>
      <button class="primary-button" type="button" @click="handleError">Back home</button>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

const handleError = () => clearError({ redirect: '/' })
</script>
