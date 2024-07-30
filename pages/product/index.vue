<script setup>
import ProductFilter from "~/components/product/ProductFilter.vue";

const { $fetch } = useNuxtApp()

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const { data: products, error, status } = await useAsyncData('products', () => $fetch('https://api.escuelajs.co/api/v1/products'));

const productFilterForm = reactive({
  title: '',
  price: ''
})

provide("productFilterForm", productFilterForm)

</script>

<template>
  <h1 class="text-xl font-bold">Product List</h1>
  <ProductFilter />
  <div v-if="status === 'pending'">Loading...</div>
  <Table v-else>
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
      {{productFilterForm}}
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