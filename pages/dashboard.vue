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
  <div class="container py-10">
    <Card class="w-[350px]">
      <CardHeader>
        <CardTitle class="font-primary text-red-600 dark:text-teal-600">Total Product</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
       1000K+
      </CardContent>
    </Card>
  </div>
</template>

