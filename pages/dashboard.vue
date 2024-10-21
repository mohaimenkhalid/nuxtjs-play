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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

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
        <CardTitle>
          <h3>Total Product</h3>
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

    <div class="my-10 space-y-4">
      <div>
        <Label for="username">
          Username
        </Label>
        <Input id="username" placeholder="Enter username" />
      </div>

      <div>
        <Label for="username">
          File
        </Label>
        <Input type="file" id="username" placeholder="Upload file" />
      </div>

      <div class="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
            for="terms"
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    </div>

    <div class="mt-5">
      <Dialog>
        <DialogTrigger as-child>
          <Button variant="info">
            Dialog
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
            <DialogClose>
              close
            </DialogClose>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="name" class="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="username" class="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" class="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" variant="success">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>

  </div>
</template>

