<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { watchOnce } from '@vueuse/core'
import { ref } from 'vue'

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
  </div>
</template>