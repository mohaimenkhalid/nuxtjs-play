<script setup lang="ts">
import {Input} from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { RiFlagFill } from "@remixicon/vue";

const props = defineProps<{
  inputId?: [Number, String][];
  placeholder?: string;
}>();
</script>

<template>
  <div class="relative">
    <Select>
      <SelectTrigger class="w-[95px] h-6 px-2 text-sm font-medium absolute top-1/2 -translate-y-1/2 left-3">
        <SelectValue placeholder="Select code" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="000">
          <div class="flex items-center gap-x-1">
            <RiFlagFill class="h-4 w-4" />
            <span>+000</span>
          </div>
        </SelectItem>
        <SelectItem value="001">
          +001
        </SelectItem>
        <SelectItem value="002">
          +002
        </SelectItem>
        <SelectItem value="003">
          +003
        </SelectItem>
        <SelectItem value="004">
          +004
        </SelectItem>
        <SelectItem value="005">
          +005
        </SelectItem>
      </SelectContent>
    </Select>

    <Input :id="inputId" :placeholder="placeholder" class="pl-[116px]" />
  </div>
</template>