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
import PrimaryCheckbox from "@/components/custom-ui/primary-checkbox/PrimaryCheckbox.vue";
import MobileInput from "@/components/custom-ui/mobile-input/MobileInput.vue";

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
          <RiHeartFill size="16px" class="text-primary hover:text-secondary" />
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
          Mobile Number
        </Label>
        <MobileInput
            inputId="mobile"
            placeholder="Enter mobile number"
        />
      </div>

      <div>
        <Label for="username">
          File
        </Label>
        <Input type="file" id="username" placeholder="Upload file" />
      </div>

      <PrimaryCheckbox
          inputId="terms-conditions"
          labelTxt="Accept terms and conditions"
      />

      <div>
        <Label for="username">
          Dropdown
        </Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">
                Apple
              </SelectItem>
              <SelectItem value="banana">
                Banana
              </SelectItem>
              <SelectItem value="blueberry">
                Blueberry
              </SelectItem>
              <SelectItem value="grapes">
                Grapes
              </SelectItem>
              <SelectItem value="pineapple">
                Pineapple
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
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

