<script setup lang='ts'>
definePageMeta({
  layout: 'auth'
})

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="flex justify-center items-center h-[100vh]">
    <Card class="w-[350px]">
      <CardHeader>
        <CardTitle>Log in</CardTitle>
        <CardDescription>Login your system</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div class="grid items-center w-full gap-4">
            <div class="flex flex-col space-y-1.5">
              <Label for="username">Username</Label>
              <Input type="email" id="username" placeholder="Enter username" />
            </div>
            <div class="flex flex-col space-y-1.5">
              <Label for="password">Password</Label>
              <Input type="password" id="password" placeholder="Enter password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  </div>
</template>