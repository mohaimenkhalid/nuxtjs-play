<script setup lang="ts">
import { RadioGroup } from '@/components/ui/radio-group'
import PrimaryRadio from "~/components/custom-ui/primary-radio/PrimaryRadio.vue";
import PrimaryCheckbox from "@/components/custom-ui/primary-checkbox/PrimaryCheckbox.vue";
import MobileInput from "@/components/custom-ui/mobile-input/MobileInput.vue";
import SecondaryRadio from "~/components/custom-ui/secondary-radio/SecondaryRadio.vue";
import TertiaryRadio from "~/components/custom-ui/tertiary-radio/TertiaryRadio.vue";
import PrimaryFileUpload from "~/components/custom-ui/primary-file-upload/PrimaryFileUpload.vue";
import { RiMenLine, RiWomenLine } from "@remixicon/vue";
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
    </div>
  </div>
</template>