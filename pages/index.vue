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
import LanguageSwitcher from "~/components/app/LanguageSwitcher.vue";
const { locales } = useI18n()

useHead({
  title: 'Login',
  meta: [
    { name: 'description', content: 'This is login page.' }
  ]
})


definePageMeta({
  layout: 'auth',
  middleware: 'guest',
})

const isLoading = ref(false)
const formData: SignForm = reactive({
  email: 'john@mail.com',
  password: 'changeme'
})

const authStore = useAuthStore()
const _signIn = async () => {
  try {
    const response = await authStore.loginAction(formData);
    if(response.access_token) {
      await authStore.getUserSessionAction();
      await navigateTo('/dashboard');
      toast.success("Login successfully!")
    }
  } catch (e) {
    if(e.message === "Unauthorized") {
      toast.success("Invalid credential!")
    } else {
      console.log(e)
      toast.error("Something went wrong with login!")
    }
  }
}


</script>

<template>
  <div class="float-end">
    <LanguageSwitcher />
  </div>
  <div class="flex justify-center items-center h-[100vh] flex-col">
    <Card class="w-[350px]">
      <CardHeader>
        {{$t('TITLE')}}
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
        <Button type="submit" @click="_signIn" :disabled="authStore.getIsLoading">
          <Loader2 v-if="authStore.getIsLoading" class="w-4 h-4 mr-2 animate-spin"/>
          {{ !authStore.getIsLoading ? 'Submit' : '' }}
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>