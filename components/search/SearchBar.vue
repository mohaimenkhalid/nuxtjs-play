<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {cn} from "~/lib/utils";
import {Popover, PopoverContent, PopoverTrigger} from "~/components/ui/popover";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "~/components/ui/command";
import {RiMenLine, RiArrowLeftRightLine, RiMapPinLine, RiWomenLine, RiSearchLine, RiCalendarScheduleLine} from "@remixicon/vue";

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]

const open = ref(false)
const open2 = ref(false)
const open3 = ref(false)
const value = ref('')
</script>

<template>
  <section class="fixed w-full z-40">
    <div class="p-4 bg-white border-t border-secondary-light shadow-[0_4px_24px_0_rgba(16,78,133,0.32)]">
      <div class="container">
        <div class="grid grid-cols-6 gap-x-2">
          <div class="col-span-2 flex items-center bg-background-shade3 border border-background-shade3 rounded-md">
            <div class="grow">
              <Popover v-model:open="open">
                <PopoverTrigger as-child>
                  <Button
                      variant="grayLight"
                      role="combobox"
                      :aria-expanded="open"
                      class="w-full h-[52px] font-normal text-dark-shade3 justify-start border-none"
                  >
                    <RiMapPinLine class="w-5" />
                    {{ value
                      ? frameworks.find((framework) => framework.value === value)?.label
                      : "From" }}
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
                  open = false
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

            <div class="bg-info rounded-full w-8 h-8 grid place-content-center">
              <RiArrowLeftRightLine class="w-4 text-white" />
            </div>

            <div class="grow">
              <Popover v-model:open="open2">
                <PopoverTrigger as-child>
                  <Button
                      variant="grayLight"
                      role="combobox"
                      :aria-expanded="open2"
                      class="w-full h-[52px] font-normal text-dark-shade3 justify-start border-none pl-2"
                  >
                    <RiMapPinLine class="w-5" />
                    {{ value
                      ? frameworks.find((framework) => framework.value === value)?.label
                      : "To" }}
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
                  open2 = false
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
          </div>

          <div>
            <Popover v-model:open="open3">
              <PopoverTrigger as-child>
                <Button
                    variant="grayLight"
                    role="combobox"
                    :aria-expanded="open3"
                    class=" justify-start w-full h-[52px] font-normal text-dark-shade3"
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
                    class=" justify-start w-full h-[52px] font-normal text-dark-shade3"
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
                    class=" justify-start w-full h-[52px] font-normal text-dark-shade3"
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
                class="w-full h-[52px] font-normal"
            >
              Modify Search
            </Button>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>