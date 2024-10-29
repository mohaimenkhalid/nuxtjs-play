<script setup lang="ts">
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

// definePageMeta({
//   middleware: 'auth',
// });

useHead({
  title: 'Dashboard',
})
</script>

<template>
  <div class="container py-10">
    <Card class="w-[350px]">
      <CardHeader>
        <CardTitle>
          Total Product
        </CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
       1000K+
        <Button variant="link" size="md">
          <RiHeartFill size="16px" class="text-primary hover:text-secondary" />
          <span>Destructive</span>
        </Button>
      </CardContent>
    </Card>
  </div>
</template>

