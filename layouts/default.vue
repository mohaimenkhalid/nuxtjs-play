<script setup lang="ts">
import LoadingIndicator from "~/components/app/LoadingIndicator.vue";
import Header from "~/components/common/Header.vue";
import Footer from "~/components/common/Footer.vue";
</script>

<template>
  <LoadingIndicator />

  <div>
    <Header />
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>