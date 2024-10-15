<script setup>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

definePageMeta({
  middleware: 'auth',
});

useHead({
  title: 'Dashboard',
})

</script>

<template>
  <div class="">
    <Card class="w-[350px]">
      <CardHeader>
        <CardTitle class="text-green-600 lg:text-red-600 xl:text-yellow-600 2xl:text-teal-600 3xl:text-green-600">Total Product</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
       1000K+
      </CardContent>
    </Card>
  </div>
</template>

