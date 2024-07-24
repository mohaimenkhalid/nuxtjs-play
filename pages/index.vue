<script setup lang='ts'>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import {Button} from '@/components/ui/button'
import {Loader2} from 'lucide-vue-next'
import {toast} from 'vue-sonner'
import type {SignForm} from "~/types/user.types"
import {useAuthStore} from "~/store/useAuthStore";
import * as authService from "~/services/auth.service"

definePageMeta({
  layout: 'auth'
})

const isLoading = ref(false)
const formData: SignForm = reactive({
  email: 'john@mail.com',
  password: 'changeme'
})

const store = useAuthStore()


const {data, status, error, execute} = useAsyncData('login', () => authService.signIn(formData)) //pass argument as a function with service function
// const {data: userSessionData, status: userSessionStatus, error: userSessionError, execute: executeUserSession} = useApi(() => $services.auth.signIn()) //pass argument as a function with service function

const _signIn = async () => {
  await execute();
  if (error.value) {
    console.log({...error.value})
    toast.success("Invalid credential!")
  } else {
    await store.setLogin(data.value.data)
    await store.getUserSession();
    await navigateTo('/dashboard');
    toast.success("Login successfully!")
  }
}


</script>

<template>
  <div class="flex justify-center items-center h-[100vh]">
    <Card class="w-[350px]">
      <CardHeader>
        {{store.getCounter}}
        <CardTitle>Log in</CardTitle>
        <CardDescription>Login your system</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div class="grid items-center w-full gap-4">
            <div class="flex flex-col space-y-1.5">
              <Label for="username">Username</Label>
              <Input v-model="formData.email" type="email" id="username" placeholder="Enter username"/>
            </div>
            <div class="flex flex-col space-y-1.5">
              <Label for="password">Password</Label>
              <Input v-model="formData.password" type="password" id="password" placeholder="Enter password"/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" @click="_signIn" :disabled="status === 'pending'">
          <Loader2 v-if="isLoading" class="w-4 h-4 mr-2 animate-spin"/>
          {{ status === 'pending' ? 'processing...' : 'Submit' }}
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>