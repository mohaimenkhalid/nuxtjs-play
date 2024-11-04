<script lang="ts" setup>
import { ref } from "vue";

const cancellationProcess = ref([
    "First, you have to go to the ticket history option. You need to add your phone number/PNR/transaction ID to search for your ticket.",
    "Click at the cancellation option. Your request will be submitted to our team.",
    "Your money will be refunded with following our refund & cancellation policy.",
])

const cancellationPolicies = ref([
  "First, you have to go to the ticket history option. You need to add your phone number/PNR/transaction ID to search for your ticket.",
  "Click at the cancellation option. Your request will be submitted to our team.",
  "Your money will be refunded with following our refund & cancellation policy.",
  "First, you have to go to the ticket history option. You need to add your phone number/PNR/transaction ID to search for your ticket.",
  "Click at the cancellation option. Your request will be submitted to our team.",
  "Your money will be refunded with following our refund & cancellation policy.",
  "First, you have to go to the ticket history option. You need to add your phone number/PNR/transaction ID to search for your ticket.",
  "Click at the cancellation option. Your request will be submitted to our team.",
  "Your money will be refunded with following our refund & cancellation policy.",
  "First, you have to go to the ticket history option. You need to add your phone number/PNR/transaction ID to search for your ticket.",
  "Click at the cancellation option. Your request will be submitted to our team.",
  "Your money will be refunded with following our refund & cancellation policy.",
  "First, you have to go to the ticket history option. You need to add your phone number/PNR/transaction ID to search for your ticket.",
  "Click at the cancellation option. Your request will be submitted to our team.",
  "Your money will be refunded with following our refund & cancellation policy.",
])
</script>

<template>
  <div class="overflow-hidden">
    <div class="space-y-2 max-h-[200px] overflow-y-scroll">
      <div class="space-y-2">
        <p class="text-dark text-2xs font-semibold">Cancellation process</p>
        <ul class="list-disc pl-6 text-2xs text-dark-shade1">
          <li v-for="(item, index) in cancellationProcess" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="space-y-2">
        <p class="text-dark text-2xs font-semibold">Cancellation Policies</p>
        <ul class="list-disc pl-6 text-2xs text-dark-shade1">
          <li v-for="(item, index) in cancellationPolicies" :key="`index-${index}`">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>