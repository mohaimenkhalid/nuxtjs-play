<script lang="ts" setup>
import {Tabs, TabsContent, TabsList, TabsTrigger} from "~/components/ui/tabs";
import Cars from "~/components/search/search-left/cars/Cars.vue";
import Flights from "~/components/search/search-left/flights/Flights.vue";
import Buses from "~/components/search/search-left/buses/Buses.vue";
import Launches from "~/components/search/search-left/Launches/Launches.vue";

const services = [
  {
    id: 1,
    name: "Flights",
    amount: '4500-12000',
    icon: "/icons/airplane.png",
    component: Flights,
  },
  {
    id: 2,
    name: "Cars",
    amount: '4500-15500',
    icon: "/icons/car.png",
    component: Cars,
  },
  {
    id: 3,
    name: "Buses",
    amount: '4500-3500',
    icon: "/icons/bus.png",
    component: Buses,
  },
  {
    id: 4,
    name: "Launches",
    amount: '4500-12000',
    icon: "/icons/launch.png",
    component: Launches,
  },
]
</script>

<template>
  <div>
    <client-only>
      <Tabs :default-value="`tab-${services[2]?.id}`" class="">
        <TabsList class="">
          <TabsTrigger
              v-for="service in services"
              :key="service?.id"
              :value="`tab-${service?.id}`"
              class="p-4 text-secondary border-b-4 data-[state=active]:border-b-4 data-[state=active]:bg-secondary-light data-[state=active]:text-secondary"
          >
            <div class="flex items-center gap-x-4">
              <img :src="service?.icon" alt="icon">
              <div class="text-left space-y-1">
                <h4 class="text-base font-semibold text-secondary"> {{ service?.name }} </h4>
                <p class="text-xs text-secondary"> ৳ {{ service?.amount }} </p>
              </div>
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent
            v-for="service in services"
            :key="service?.id"
            :value="`tab-${service?.id}`"
            class="mt-6"
        >
          <separator class="mb-6 bg-gray-light" />
          <component :is="service?.component" />
        </TabsContent>
      </Tabs>
    </client-only>
  </div>
</template>
