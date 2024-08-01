<script setup lang='ts'>
import {Loader2} from "lucide-vue-next";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "~/components/ui/table";
import {useCategoryStore} from "~/store/useCategoryStore";

useHead({
  title: 'Category list',
})

const categoryStore = useCategoryStore()

const categories = ref([]);

const getCategoryList = async () => {
  const response = await categoryStore.getCategoryListAction();
  categories.value = response
}
getCategoryList()


</script>

<template>
  <h1 class="text-xl font-bold">Category List</h1>
  <div v-if="categoryStore.getIsLoading" class="flex gap-x-2 justify-center text-center py-3 items-center">
    <Loader2 class="w-4 h-4 animate-spin"/>
    Loading...
  </div>
  <Table>
    <TableCaption v-if="!categoryStore.getIsLoading && categories.length === 0">
      <p>No Product Found</p>
    </TableCaption>
    <TableHeader v-if="categories.length">
      <TableRow>
        <TableHead class="w-[100px]">
          Name
        </TableHead>
        <TableHead>Image</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="(category, index) in categories" :key="category.id">
        <TableCell class="font-medium">
          {{category.name}}
        </TableCell>
        <TableCell class="font-medium">
          <NuxtImg
              :src="category.image"
              alt="Image description"
              width="300"
              height="200"
              format="webp"
              quality="50"
              loading="lazy"
              :placeholder="[50, 25, 75, 5]"
          />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>