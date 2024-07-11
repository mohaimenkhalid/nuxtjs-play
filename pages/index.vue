<script setup lang='ts'>
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

definePageMeta({
  layout: 'auth',
  title: 'Signin',
  public: true,
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/about',
  },
})

const { signIn } = useAuth() // uses the default signIn function provided by nuxt-auth
const formData = reactive({
  email: 'john@mail.com',
  password: 'changeme',
})


const login = async (e) => {
  console.log(formData)
  try {
    e.preventDefault()
    let res = await signIn(
        { ...formData },
        { callbackUrl: '/about' } // Where the user will be redirected after a successiful login
    )

    console.log("res", res);

  } catch (error) {
    console.log("error", error);
  }
}



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
              <Input v-model="formData.email" type="email" id="username" placeholder="Enter username" />
            </div>
            <div class="flex flex-col space-y-1.5">
              <Label for="password">Password</Label>
              <Input v-model="formData.password" type="password" id="password" placeholder="Enter password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" @click="login">Submit</Button>
      </CardFooter>
    </Card>
  </div>
</template>