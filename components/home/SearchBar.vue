<script setup>
import {ref} from 'vue'
import {Button} from '@/components/ui/button'
import {
  RiArrowLeftRightLine,
  RiSearchLine,
  RiMapPinLine
} from "@remixicon/vue";
import CustomSearchFilter from "~/components/custom-ui/filter/CustomSearchFilter.vue";
import DatePicker from "~/components/common/DatePicker.vue";
import TravellerCounter from "~/components/custom-ui/popover/TravellerCounter.vue";

const frameworks = [
  {value: 'next.js', label: 'Next.js dfhdr ergear drhg'},
  {value: 'sveltekit', label: 'SvelteKit'},
  {value: 'nuxt', label: 'Nuxt'},
  {value: 'remix', label: 'Remix'},
  {value: 'astro', label: 'Astro'},
]
const modelValue = ref('Nuxt')
const modelValue1 = ref('')
const date = ref(new Date())
const traver = ref({
  adult: 0,
  children: 0,
})
</script>

<template>
  <section class="container -mt-20 relative z-10">
    <div
        class="p-4 bg-white border-2 border-info-light shadow-[0_4px_24px_0_rgba(16,78,133,0.32)] rounded-3xl grid grid-cols-6 gap-x-2">
      <div class="col-span-2 flex items-center bg-background-shade3 border border-background-shade3 rounded-md">
        <div class="grow">
        <CustomSearchFilter
            v-model="modelValue"
            :options="frameworks"
            placeholder="From"
        >
          <RiMapPinLine class="w-5"/>
        </CustomSearchFilter>
        </div>
        <div class="bg-info rounded-full w-8 h-8 grid place-content-center">
          <RiArrowLeftRightLine class="w-4 text-white"/>
        </div>
        <div class="grow">
          <CustomSearchFilter
              v-model="modelValue1"
              :options="frameworks"
              placeholder="Destination"
          >
            <RiMapPinLine class="w-5"/>
          </CustomSearchFilter>
        </div>
      </div>

      <div>
        <DatePicker v-model="date" />
      </div>

      <div>
        <DatePicker v-model="date" placeholder="Add Return" />
      </div>

      <div>
        <TravellerCounter v-model="traver" />
      </div>

      <div>
        <Button
            role="combobox"
            :aria-expanded="open3"
            class="w-full h-[68px] font-normal"
        >
          <RiSearchLine class="w-5"/>
          <span>Search</span>
        </Button>
      </div>

    </div>
  </section>
</template>