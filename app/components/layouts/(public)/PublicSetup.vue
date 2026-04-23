<template>
  <div class="template-shell">
    <div class="template-frame">
      <PublicNavbar />
      <main class="page-main">
        <slot />
      </main>
      <PublicFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import PublicFooter from '~/components/layouts/(public)/Footer/PublicFooter.vue'
import PublicNavbar from '~/components/layouts/(public)/Navbar/PublicNavbar.vue'
</script>
