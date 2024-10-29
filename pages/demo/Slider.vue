<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { watchOnce } from '@vueuse/core'
import { ref } from 'vue'
import TertiaryRadio from "~/components/custom-ui/tertiary-radio/TertiaryRadio.vue";
import {RadioGroup} from "~/components/ui/radio-group";

const emblaMainApi = ref<CarouselApi>()
const emblaThumbnailApi = ref<CarouselApi>()
const selectedIndex = ref(0)

function onSelect() {
  if (!emblaMainApi.value || !emblaThumbnailApi.value)
    return
  selectedIndex.value = emblaMainApi.value.selectedScrollSnap()
  emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap())
}

function onThumbClick(index: number) {
  if (!emblaMainApi.value || !emblaThumbnailApi.value)
    return
  emblaMainApi.value.scrollTo(index)
}

watchOnce(emblaMainApi, (emblaMainApi) => {
  if (!emblaMainApi)
    return

  onSelect()
  emblaMainApi.on('select', onSelect)
  emblaMainApi.on('reInit', onSelect)
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
    <div class="w-full">
      <Carousel
          class="relative w-full max-w-xl"
          @init-api="(val) => emblaMainApi = val"
      >
        <CarouselContent>
          <CarouselItem v-for="(_, index) in 10" :key="index">
            <img
                src="https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="slider img"
                class="h-[528px] object-cover border-2 border-gray-light rounded-md"
            >
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <Carousel
          class="mt-4 relative w-full max-w-xl"
          @init-api="(val) => emblaThumbnailApi = val"
      >
        <CarouselContent class="flex gap-4 ml-0">
          <CarouselItem v-for="(_, index) in 10" :key="index" class="pl-0 basis-1/4 cursor-pointer" @click="onThumbClick(index)">
            <img
                src="https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="slider img"
                :class="index === selectedIndex ? 'border-2 border-primary' : ''"
                class="h-[120px] object-cover rounded-md"
            >
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>

    <!--Multi Column Carousel-->
    <div class="py-10">
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

  </div>
</template>