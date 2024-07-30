<script setup>
import {Loader2} from 'lucide-vue-next'
const {$fetch} = useNuxtApp()
import ProductFilter from "~/components/product/ProductFilter.vue";

const route = useRoute();

const {title, price} = route.query

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const productFilterForm = reactive({
  title: title,
  price: price
})

const {
  data: products,
  error,
  status,
  execute
} = await useAsyncData('products', () => $fetch(import.meta.env.VITE_API_BASE_URL+'/v1/products', {
  params: {
    title: productFilterForm.title || '',
    price: productFilterForm.price || ''
  }
}));

provide("productFilterForm", productFilterForm)

const changePage = async () => {
  await navigateTo({
    path: '/products',
    query: {
      ...productFilterForm
    }
  })
  execute();
}

</script>

<template>
  <h1 class="text-xl font-bold">Product List</h1>
  <ProductFilter :status="status" @filterProduct="changePage"/>
  <div v-if="error">{{ error }}</div>
  <div v-if="status === 'pending'" class="flex gap-x-2 justify-center text-center py-3 items-center">
    <Loader2 class="w-4 h-4 animate-spin"/>
    Loading...
  </div>
  <Table v-else-if="products">
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]">
          Title
        </TableHead>
        <TableHead>Image</TableHead>
        <TableHead>Price</TableHead>
        <TableHead>Category</TableHead>
        <TableHead>Description</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="product in products" :key="product.id">
        <TableCell class="font-medium">
          {{ product.title }}
        </TableCell>
        <TableCell class="font-medium">
          {{ product.images[0] }}
        </TableCell>
        <TableCell class="font-medium">
          {{ product.price }}
        </TableCell>
        <TableCell class="font-medium">
          {{ product.category.name }}
        </TableCell>
        <TableCell class="font-medium">
          {{ product.category.name }}
        </TableCell>
        <TableCell class="font-medium">
          {{ product.description }}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>