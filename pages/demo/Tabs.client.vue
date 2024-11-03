<script setup lang="ts">
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '~/components/ui/tabs'
</script>

<template>
  <div class="container py-10">
    <Tabs default-value="tab1">
      <TabsList class="">
        <TabsTrigger value="tab1">
          Tab 1
        </TabsTrigger>
        <TabsTrigger value="tab2">
          Tab 2
        </TabsTrigger>
        <TabsTrigger value="tab3">
          Tab 3
        </TabsTrigger>
        <TabsTrigger value="tab4">
          Tab 4
        </TabsTrigger>
        <TabsTrigger value="tab5">
          Tab 5
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        Tabs 1 content
      </TabsContent>
      <TabsContent value="tab2">
        Tabs 2 content
      </TabsContent>
      <TabsContent value="tab3">
        Tabs 3 content
      </TabsContent>
      <TabsContent value="tab4">
        Tabs 4 content
      </TabsContent>
      <TabsContent value="tab5">
        Tabs 5 content
      </TabsContent>
    </Tabs>

    <!-- Primary tabs -->
    <div class="py-10">
      <h3 class="font-semibold mb-10 text-info text-2xl">Primary tabs</h3>
      <Tabs default-value="tab1">
        <TabsList class="">
          <TabsTrigger
              v-for="(n, index) in 5"
              :key="index"
              :value="`tab-${index+1}`"
              class="p-4 text-secondary border-b-4 data-[state=active]:border-b-4 data-[state=active]:bg-secondary-light data-[state=active]:text-secondary"
          >
            Tab {{ index + 1 }}
          </TabsTrigger>
        </TabsList>
        <TabsContent
            v-for="(n, index) in 5"
            :value="`tab-${index+1}`"
        >
          Tabs {{ index + 1 }} content
        </TabsContent>
      </Tabs>
    </div>

  </div>
</template>