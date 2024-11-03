<script lang="ts" setup>
import { ref } from "vue"
import { Button } from '~/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { RiEqualizer3Fill, RiIndeterminateCircleLine } from "@remixicon/vue";

const isAllFilter = ref(false)
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h3 class="text-2xl text-dark font-bold">Select outbound</h3>
      <div>
        <!-- v-if -->
        <div
            v-if="!isAllFilter"
            class="flex items-center gap-x-2"
        >
          <div>
            <Select>
              <SelectTrigger class="min-w-[118px] h-9 text-sm text-dark-secondary border-gray-shade3">
                <SelectValue placeholder="Bus Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem v-for="(n, index) in 5" :value="`type-${index}`">
                    Type {{ index}}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Button
                @click="isAllFilter = true"
                variant="border"
                class="h-9 bg-white border-gray-shade3 text-dark-secondary font-normal"
            >
              <RiEqualizer3Fill class="text-dark-secondary w-5 h-5" />
              <span>Show All Filter</span>
            </Button>
          </div>
        </div>

        <!-- v-else -->
        <div
            v-else
            @click="isAllFilter = !isAllFilter"
            class="text-right"
        >
          <Button variant="border" class="h-9 border-primary text-primary font-normal">
            <RiIndeterminateCircleLine class="text-primary w-5 h-5" />
            <span>Close All Filter</span>
          </Button>
        </div>
      </div>
    </div>

    <div
        v-if="isAllFilter"
        class="flex items-center gap-x-2"
    >
      <div v-for="n in 5" class="grow">
        <Select>
          <SelectTrigger class="h-9 text-sm text-dark-secondary border-gray-shade3">
            <SelectValue placeholder="Bus Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem v-for="(n, index) in 5" :value="`type-${index}`">
                Type {{ index}}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  </div>
</template>