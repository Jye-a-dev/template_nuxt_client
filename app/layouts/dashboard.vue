<template>
  <div class="template-shell">
    <div class="template-frame">
      <BaseNavbar />
      <main class="page-main">
        <slot />
      </main>
      <BaseFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseFooter from '~/components/layouts/@base/Footer/BaseFooter.vue'
import BaseNavbar from '~/components/layouts/@base/Navbar/BaseNavbar.vue'
</script>
