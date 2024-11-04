<script setup lang="ts">
import {Button} from "~/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "~/components/ui/tabs";
import BoardingDropping from "~/components/search/search-left/buses/trips/trip-details/BoardingDropping.vue";
import RouteVia from "~/components/search/search-left/buses/trips/trip-details/RouteVia.vue";
import SeatInformation from "~/components/search/search-left/buses/trips/trip-details/SeatInformation.vue";
import CancellationPolicies from "~/components/search/search-left/buses/trips/trip-details/CancellationPolicies.vue";

const detailsTabs = [
  {
    id: 1,
    name: "Boarding & Dropping",
    component: BoardingDropping,
  },
  {
    id: 2,
    name: "Route Via",
    component: RouteVia,
  },
  {
    id: 3,
    name: "Seat Formation",
    component: SeatInformation,
  },
  {
    id: 4,
    name: "Cancellation Policies",
    component: CancellationPolicies,
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
          <Button variant="primaryBorder" size="sm" class="mt-4">
            <img src="@/assets/imgs/icons/close.png" alt="close icon">
            <span>Close Details</span>
          </Button>
        </TabsContent>
      </Tabs>
    </div>
</template>