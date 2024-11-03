<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {cn} from "~/lib/utils";
import {Popover, PopoverContent, PopoverTrigger} from "~/components/ui/popover";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "~/components/ui/command";
import {RiMenLine, RiArrowLeftRightLine, RiMapPinLine, RiWomenLine, RiSearchLine, RiCalendarScheduleLine} from "@remixicon/vue";
import { Search } from 'lucide-vue-next'
import { ComboboxAnchor, ComboboxContent, ComboboxInput, ComboboxPortal, ComboboxRoot } from 'radix-vue'

const frameworks = [
  { value: 'next.js', label: 'Next.js dfhdr ergear drhg' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]

const open = ref(false)
const open2 = ref(false)
const open3 = ref(false)
const value = ref('')

const modelValue = ref('')
const searchTerm = ref('')

const filteredFrameworks = computed(() => frameworks.filter(i => !modelValue.value.includes(i.label)))

</script>

<template>
  <section class="container -mt-20 relative z-10">
    {{filteredFrameworks}}
    <div class="p-4 bg-white border-2 border-info-light shadow-[0_4px_24px_0_rgba(16,78,133,0.32)] rounded-3xl grid grid-cols-6 gap-x-2">
      <div class="col-span-2 flex items-center bg-background-shade3 border border-background-shade3 rounded-md">
<!--        <div class="grow">-->
<!--          <Popover v-model:open="open">-->
<!--            <PopoverTrigger as-child>-->
<!--              <Button-->
<!--                  variant="grayLight"-->
<!--                  role="combobox"-->
<!--                  :aria-expanded="open"-->
<!--                  class="w-full h-[68px] font-normal text-dark-shade3 justify-start border-none"-->
<!--              >-->
<!--                <RiMapPinLine class="w-5" />-->
<!--                {{ value-->
<!--                  ? frameworks.find((framework) => framework.value === value)?.label-->
<!--                  : "From" }}-->
<!--              </Button>-->
<!--            </PopoverTrigger>-->
<!--            <PopoverContent class="w-[200px] p-0">-->
<!--              <Command>-->
<!--                <CommandInput class="h-9" placeholder="Search framework..." />-->
<!--                <CommandEmpty>No framework found.</CommandEmpty>-->
<!--                <CommandList>-->
<!--                  <CommandGroup>-->
<!--                    <CommandItem-->
<!--                        v-for="framework in frameworks"-->
<!--                        :key="framework.value"-->
<!--                        :value="framework.value"-->
<!--                        @select="(ev) => {-->
<!--                if (typeof ev.detail.value === 'string') {-->
<!--                  value = ev.detail.value-->
<!--                }-->
<!--                open = false-->
<!--              }"-->
<!--                    >-->
<!--                      {{ framework.label }}-->
<!--                      <RiMenLine-->
<!--                          :class="cn(-->
<!--                  'ml-auto h-4 w-4',-->
<!--                  value === framework.value ? 'opacity-100' : 'opacity-0',-->
<!--                )"-->
<!--                      />-->
<!--                    </CommandItem>-->
<!--                  </CommandGroup>-->
<!--                </CommandList>-->
<!--              </Command>-->
<!--            </PopoverContent>-->
<!--          </Popover>-->
<!--        </div>-->

<!--        <div class="bg-info rounded-full w-8 h-8 grid place-content-center">-->
<!--          <RiArrowLeftRightLine class="w-4 text-white" />-->
<!--        </div>-->

<!--        <div class="grow">-->
<!--          <Popover v-model:open="open2">-->
<!--            <PopoverTrigger as-child>-->
<!--              <Button-->
<!--                  variant="grayLight"-->
<!--                  role="combobox"-->
<!--                  :aria-expanded="open2"-->
<!--                  class="w-full h-[68px] font-normal text-dark-shade3 justify-start border-none pl-2"-->
<!--              >-->
<!--                <RiMapPinLine class="w-5" />-->
<!--                {{ value-->
<!--                  ? frameworks.find((framework) => framework.value === value)?.label-->
<!--                  : "To" }}-->
<!--              </Button>-->
<!--            </PopoverTrigger>-->
<!--            <PopoverContent class="w-[200px] p-0">-->
<!--              <Command>-->
<!--                <CommandInput class="h-9" placeholder="Search framework..." />-->
<!--                <CommandEmpty>No framework found.</CommandEmpty>-->
<!--                <CommandList>-->
<!--                  <CommandGroup>-->
<!--                    <CommandItem-->
<!--                        v-for="framework in frameworks"-->
<!--                        :key="framework.value"-->
<!--                        :value="framework.value"-->
<!--                        @select="(ev) => {-->
<!--                if (typeof ev.detail.value === 'string') {-->
<!--                  value = ev.detail.value-->
<!--                }-->
<!--                open2 = false-->
<!--              }"-->
<!--                    >-->
<!--                      {{ framework.label }}-->
<!--                      <RiMenLine-->
<!--                          :class="cn(-->
<!--                  'ml-auto h-4 w-4',-->
<!--                  value === framework.value ? 'opacity-100' : 'opacity-0',-->
<!--                )"-->
<!--                      />-->
<!--                    </CommandItem>-->
<!--                  </CommandGroup>-->
<!--                </CommandList>-->
<!--              </Command>-->
<!--            </PopoverContent>-->
<!--          </Popover>-->
<!--        </div>-->

        <div class="relative w-full max-w-sm items-center">
          <ComboboxRoot v-model="modelValue" v-model:open="open" v-model:search-term="searchTerm" class="w-full z-[9999]">
            <ComboboxAnchor as-child>
              <ComboboxInput placeholder="Search" />
<!--              <Input v-model="modelValue" id="search" type="text" placeholder="Search..." class="pl-10"  :class="modelValue.length > 0 ? 'mt-2' : ''" @keydown.enter.prevent/>-->

            </ComboboxAnchor>

            <ComboboxPortal>
              <ComboboxContent>
                <CommandList
                    position="popper"
                    class="z-50 w-[--radix-popper-anchor-width] rounded-md mt-2 border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                >
                  <CommandEmpty class="bg-white" />
                  <CommandGroup class="bg-white">
                    <CommandItem
                        v-for="framework in filteredFrameworks" :key="framework.value" :value="framework.label"
                        @select.prevent="(ev) => {
                          console.log('asfafd')
                    if (typeof ev.detail.value === 'string') {
                      searchTerm = ev.detail.value
                      modelValue = ev.detail.value
                    }

                    if (filteredFrameworks.length === 0) {
                      open = false
                    }
                }"
                    >
                      {{ framework.label }}
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </ComboboxContent>
            </ComboboxPortal>
          </ComboboxRoot>
        </div>
      </div>

      <div>
        <Popover v-model:open="open3">
          <PopoverTrigger as-child>
            <Button
                variant="grayLight"
                role="combobox"
                :aria-expanded="open3"
                class=" justify-start w-full h-[68px] font-normal text-dark-shade3"
            >
              <RiCalendarScheduleLine class="w-5" />
              {{ value
                ? frameworks.find((framework) => framework.value === value)?.label
                : "Add Return..." }}
            </Button>
          </PopoverTrigger>
          <PopoverContent class="w-[200px] p-0 bg-white z-50">
            <Command>
              <CommandInput class="h-9" placeholder="Search framework..." />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandList>
                <CommandGroup>
                  <CommandItem
                      v-for="framework in frameworks"
                      :key="framework.value"
                      :value="framework.value"
                      @select="(ev) => {
                if (typeof ev.detail.value === 'string') {
                  value = ev.detail.value
                }
                open3 = false
              }"
                  >
                    {{ framework.label }}
                    <RiMenLine
                        :class="cn(
                  'ml-auto h-4 w-4',
                  value === framework.value ? 'opacity-100' : 'opacity-0',
                )"
                    />
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <Popover v-model:open="open3">
          <PopoverTrigger as-child>
            <Button
                variant="grayLight"
                role="combobox"
                :aria-expanded="open3"
                class=" justify-start w-full h-[68px] font-normal text-dark-shade3"
            >
              <RiCalendarScheduleLine class="w-5" />
              {{ value
                ? frameworks.find((framework) => framework.value === value)?.label
                : "Add Return..." }}
            </Button>
          </PopoverTrigger>
          <PopoverContent class="w-[200px] p-0">
            <Command>
              <CommandInput class="h-9" placeholder="Search framework..." />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandList>
                <CommandGroup>
                  <CommandItem
                      v-for="framework in frameworks"
                      :key="framework.value"
                      :value="framework.value"
                      @select="(ev) => {
                if (typeof ev.detail.value === 'string') {
                  value = ev.detail.value
                }
                open3 = false
              }"
                  >
                    {{ framework.label }}
                    <RiMenLine
                        :class="cn(
                  'ml-auto h-4 w-4',
                  value === framework.value ? 'opacity-100' : 'opacity-0',
                )"
                    />
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <Popover v-model:open="open3">
          <PopoverTrigger as-child>
            <Button
                variant="grayLight"
                role="combobox"
                :aria-expanded="open3"
                class=" justify-start w-full h-[68px] font-normal text-dark-shade3"
            >
              <RiCalendarScheduleLine class="w-5" />
              {{ value
                ? frameworks.find((framework) => framework.value === value)?.label
                : "Add Return..." }}
            </Button>
          </PopoverTrigger>
          <PopoverContent class="w-[200px] p-0">
            <Command>
              <CommandInput class="h-9" placeholder="Search framework..." />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandList>
                <CommandGroup>
                  <CommandItem
                      v-for="framework in frameworks"
                      :key="framework.value"
                      :value="framework.value"
                      @select="(ev) => {
                if (typeof ev.detail.value === 'string') {
                  value = ev.detail.value
                }
                open3 = false
              }"
                  >
                    {{ framework.label }}
                    <RiMenLine
                        :class="cn(
                  'ml-auto h-4 w-4',
                  value === framework.value ? 'opacity-100' : 'opacity-0',
                )"
                    />
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <Button
            role="combobox"
            :aria-expanded="open3"
            class="w-full h-[68px] font-normal"
        >
          <RiSearchLine class="w-5" />
          <span>Search</span>
        </Button>
      </div>

    </div>
  </section>
</template>