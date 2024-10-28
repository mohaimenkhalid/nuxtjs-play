<script setup>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { RiHeartFill, RiMenLine, RiWomenLine, RiTimerFlashLine } from "@remixicon/vue";
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
import { RadioGroup } from '@/components/ui/radio-group'
import PrimaryRadio from "~/components/custom-ui/primary-radio/PrimaryRadio.vue";
import PrimaryCheckbox from "@/components/custom-ui/primary-checkbox/PrimaryCheckbox.vue";
import MobileInput from "@/components/custom-ui/mobile-input/MobileInput.vue";
import SecondaryRadio from "~/components/custom-ui/secondary-radio/SecondaryRadio.vue";
import TertiaryRadio from "~/components/custom-ui/tertiary-radio/TertiaryRadio.vue";
import PrimaryFileUpload from "~/components/custom-ui/primary-file-upload/PrimaryFileUpload.vue";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'


// definePageMeta({
//   middleware: 'auth',
// });

useHead({
  title: 'Dashboard',
})


const coupons = ref([
  {
    id: 'coupon1',
    labelTxt: 'Coupon 1',
    labelDescription: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    id: 'coupon2',
    labelTxt: 'Coupon 2',
    labelDescription: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    id: 'coupon3',
    labelTxt: 'Coupon 3',
    labelDescription: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    id: 'coupon4',
    labelTxt: 'Coupon 4',
    labelDescription: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    id: 'coupon5',
    labelTxt: 'Coupon 5',
    labelDescription: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    id: 'coupon6',
    labelTxt: 'Coupon 6',
    labelDescription: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    id: 'coupon7',
    labelTxt: 'Coupon 7',
    labelDescription: 'Lorem ipsum dolor sit amet, consectetur',
  },
]);
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

    <div class="my-10 space-y-4">
      <div>
        <Label>
          Primary Radio
        </Label>
        <RadioGroup default-value="Radio 1" class="space-y-2">
          <PrimaryRadio inputId="radio1" labelTxt="Radio 1" />
          <PrimaryRadio inputId="radio2" labelTxt="Radio 2" />
        </RadioGroup>
      </div>

      <div>
        <Label>
          Secondary Radio
        </Label>
        <div class="flex gap-x-1">
          <SecondaryRadio inputId="male" name="gender" labelTxt="Male" :checked="true">
            <template #icon>
              <RiMenLine class="text-2xl text-dark-shade1" />
            </template>
          </SecondaryRadio>
          <SecondaryRadio inputId="female" name="gender" labelTxt="Female">
            <template #icon>
              <RiWomenLine class="text-2xl text-dark-shade1" />
            </template>
          </SecondaryRadio>
        </div>
      </div>

      <div>
        <Label>
          Tertiary Radio
        </Label>
        <RadioGroup default-value="Coupon 10" class="flex gap-x-2">
          <TertiaryRadio
              inputId="coupon10"
              labelTxt="Coupon 10"
              labelDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, veritatis."
          />
          <TertiaryRadio
              inputId="coupon20"
              labelTxt="Coupon 20"
              labelDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, veritatis."
          />
        </RadioGroup>
      </div>

      <div>
        <Label for="username">
          Checkbox
        </Label>
        <PrimaryCheckbox
            inputId="terms-conditions"
            labelTxt="Accept terms and conditions"
        />
      </div>

      <div>
        <Label for="username">
          Text Input
        </Label>
        <Input id="username" placeholder="Enter username" />
      </div>

      <div>
        <Label for="username">
          Phone input
        </Label>
        <MobileInput
            inputId="mobile"
            placeholder="Enter mobile number"
        />
      </div>

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

      <div>
        <Label for="username">
          File Upload
        </Label>
        <Input type="file" id="username" placeholder="Upload file" />
      </div>

      <div>
        <Label for="username">
          Primary File Upload
        </Label>
        <PrimaryFileUpload />
      </div>
    </div>

    <div class="my-5">
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

    <!--Multi Column Carousel-->
    <div>
      <h3 class="mb-3 font-semibold">Multi Column Carousel</h3>
      <Carousel
        :opts="{
          align: 'start',
        }"
      >
        <RadioGroup default-value="Coupon 1">
          <CarouselContent class="-ml-2">
              <CarouselItem v-for="(coupon, index) in coupons" :key="index?.id" class="basis-[276px] pl-2">
                <TertiaryRadio
                    :inputId="coupon?.id"
                    :labelTxt="coupon?.labelTxt"
                    :labelDescription="coupon?.labelDescription"
                />
              </CarouselItem>
          </CarouselContent>
        </RadioGroup>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>

    <!-- Breadcrumbs -->
    <div class="py-10">
      <h3 class="mb-3 font-semibold">Breadcrumb</h3>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">
              dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/demo/tabs">
              tabs
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>

    <!-- Separator -->
    <div class="w-[400px]">
      <h3 class="mb-3 font-semibold">Separator</h3>
      <Separator class="my-4 bg-red-400" label="Or" />
      <div class="my-5 flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>

      <div>
        <div v-for="(n, index) in coupons" :key="index" class="flex justify-between gap-2">
          <div>
            <div class="flex items-center gap-x-2">
              <RiTimerFlashLine class="text-gray-shade4 w-4 h-4" />
              <p class="text-dark-shade1 text-sm">10:00 am</p>
            </div>
            <Separator v-if="index < coupons.length - 1" orientation="vertical" class="h-2 my-1 mx-2" labelClass="bg-body" />
          </div>
          <p class="text-dark-shade1 text-sm">10:00 am</p>
        </div>
      </div>
    </div>

  </div>
</template>

