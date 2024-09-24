<template>
  <p class="text-red-500 text-xs">
    {{ message }}
  </p>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  props: {
    message: String,
  },
})
</script>
