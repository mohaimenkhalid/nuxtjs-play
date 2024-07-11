<template>
  <div>
    <p>Admin layout</p>
    <slot />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})
</script>