<script setup>
import {Label} from "~/components/ui/label";
import {Input} from "~/components/ui/input";
const emit = defineEmits(['filterProduct'])

const productFilterForm = inject('productFilterForm')

const {status} = defineProps(['status'])
const search = () => {
  emit('filterProduct')
}
</script>
<template>
  <Card>
    <CardContent class="py-5 flex gap-x-2">
      <div class="grid w-full max-w-sm items-center gap-1.5">
        <Label for="name">Name</Label>
        <Input v-model="productFilterForm.title" id="name" type="text" placeholder="product name" />
      </div>
      <div class="grid w-full max-w-sm items-center gap-1.5">
        <Label for="price">Price</Label>
        <Input v-model="productFilterForm.price" id="price" type="text" placeholder="price" />
      </div>
    </CardContent>
    <CardFooter>
      <Button :disabled="status === 'pending'" @click="search">Search</Button>
    </CardFooter>
  </Card>
</template>
