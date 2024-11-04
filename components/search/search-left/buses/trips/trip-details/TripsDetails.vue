<script setup lang="ts">
import { ref } from "vue"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "~/components/ui/tabs";
import BoardingDropping from "~/components/search/search-left/buses/trips/trip-details/BoardingDropping.vue";

const detailsTabs = [
  {
    id: 1,
    name: "Boarding & Dropping",
    component: BoardingDropping,
  },
  {
    id: 2,
    name: "Route Via",
    component: BoardingDropping,
  },
  {
    id: 3,
    name: "Seat Formation",
    component: BoardingDropping,
  },
  {
    id: 4,
    name: "Cancellation Policies",
    component: BoardingDropping,
  }
]
</script>

<template>
    <div class="mt-4 pt-4 border-t border-gray">
      <Tabs :default-value="`details-tab-${detailsTabs[0]?.id}`">
        <TabsList>
          <TabsTrigger
            v-for="tab in detailsTabs"
            :key="tab?.id"
            :value="`details-tab-${tab?.id}`"
          >
            {{ tab?.name }}
          </TabsTrigger>
        </TabsList>

        <TabsContent
          v-for="tab in detailsTabs"
          :key="tab?.id"
          :value="`details-tab-${tab?.id}`"
        >
          <component :is="tab?.component" />
        </TabsContent>
      </Tabs>
    </div>
</template>