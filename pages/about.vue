<script lang="ts" setup>

const { data, status, getSession, token } = useAuth()

</script>

<template>
  <div >
    <h1>About</h1>
    {{data}}
    <hr />
    {{status}}
    <hr />
    {{token}}
  </div>

</template>