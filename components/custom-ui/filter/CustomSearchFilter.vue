
<script setup lang="ts">
import {CommandEmpty, CommandGroup, CommandItem, CommandList} from "~/components/ui/command";
import {ComboboxAnchor, ComboboxContent, ComboboxInput, ComboboxPortal, ComboboxRoot} from "radix-vue";
import {ref} from "vue";

const props = defineProps(['modelValue', 'placeholder', 'options'])
const emit = defineEmits(['update:modelValue'])
const open = ref(false)
const searchTerm = ref('')
const currentModelVal = ref(props.modelValue)


const filteredOptions = computed(() => props.options.filter(i => !currentModelVal.value.includes(i.label)))

const selectOption = (ev) => {
  if (typeof ev.detail.value === 'string') {
    searchTerm.value = ''
    currentModelVal.value = ev.detail.value
    emit('update:modelValue', ev.detail.value)
  }
  open.value = false
  if (filteredOptions.value.length === 0) {
    open.value = false
  }
}

</script>

<template>
  <ComboboxRoot v-model="currentModelVal" v-model:open="open" v-model:search-term="searchTerm"
                class="w-full z-[9999]">
    <div class="flex">
      <slot></slot>
      <ComboboxAnchor as-child>
        <ComboboxInput :placeholder="placeholder">
          <Input
              class="w-full h-[68px] font-normal text-dark-shade3 justify-start border-none pl-10"
              v-model="currentModelVal" id="search" type="text" :class="currentModelVal.length > 0 ? 'mt-2' : ''"
              @keydown.enter.prevent/>
        </ComboboxInput>
      </ComboboxAnchor>
    </div>

    <ComboboxPortal>
      <ComboboxContent>
        <CommandList
            position="popper"
            class="z-50 w-[--radix-popper-anchor-width] rounded-md mt-2 border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
        >
          <CommandEmpty class="bg-white"/>
          <CommandGroup class="bg-white">
            <CommandItem
                v-for="option in options" :key="option.value" :value="option.label"
                @select.prevent="selectOption"
            >
              {{ option.label }}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>