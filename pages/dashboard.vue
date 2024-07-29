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

</script>

<template>
  <div class="">
    <Card class="w-[350px]">
      <CardHeader>
        <CardTitle>Total Product</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
       1000K+
      </CardContent>
    </Card>
  </div>
</template>

