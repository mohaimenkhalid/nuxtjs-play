<script setup>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { RiHeartFill } from "@remixicon/vue";
import { Button } from '~/components/ui/button'

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
        <CardTitle class="font-primary text-red-600 dark:text-teal-600">
          <h3>Total Product</h3>
          <RiHeartFill size="16px" className="my-icon text-primary hover:text-secondary animate-pulse" />
        </CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
       1000K+
        <Button variant="link" size="md">
          <RiHeartFill size="16px" className="my-icon text-primary hover:text-secondary" />
          <p>Destructive</p>
        </Button>
      </CardContent>
    </Card>
  </div>
</template>

