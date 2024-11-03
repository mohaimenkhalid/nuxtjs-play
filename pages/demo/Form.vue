<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup } from '@/components/ui/radio-group'
import PrimaryRadio from "~/components/custom-ui/primary-radio/PrimaryRadio.vue";
import PrimaryCheckbox from "@/components/custom-ui/primary-checkbox/PrimaryCheckbox.vue";
import MobileInput from "@/components/custom-ui/mobile-input/MobileInput.vue";
import SecondaryRadio from "~/components/custom-ui/secondary-radio/SecondaryRadio.vue";
import TertiaryRadio from "~/components/custom-ui/tertiary-radio/TertiaryRadio.vue";
import PrimaryFileUpload from "~/components/custom-ui/primary-file-upload/PrimaryFileUpload.vue";
import { RiMenLine, RiWomenLine } from "@remixicon/vue";

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
// import { CaretSortIcon, CheckIcon } from '@radix-icons/vue'

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]

const open = ref(false)
const value = ref('')
</script>

<template>
  <div class="container py-10">
    <div class="space-y-4">

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

      <div>
        <Label for="">
          Combobox
        </Label>
        <Popover v-model:open="open">
          <PopoverTrigger as-child>
            <Button
                variant="border"
                role="combobox"
                :aria-expanded="open"
                class="w-[200px] justify-between cursor-text"
            >
              {{ value
                ? frameworks.find((framework) => framework.value === value)?.label
                : "Select framework..." }}
              <RiWomenLine class="ml-2 h-4 w-4 shrink-0 opacity-50" />
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

    </div>
  </div>
</template>