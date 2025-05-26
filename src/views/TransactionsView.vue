<script setup>
import { RouterLink } from 'vue-router'

import Transaction from '@/components/Transaction.vue'

const transactions = [
  {
    transaction_id: 2,
    transaction_type: 'Colaboracion',
    transaction_amount: 15.0,
    transaction_date: '05-04-2025',
    reference: 'PAY',
  },
  {
    transaction_id: 1,
    transaction_type: 'Recarga',
    transaction_amount: 1350.0,
    transaction_date: '02-03-2025',
    reference: '0025560',
  },
]
</script>

<template>
  <section>
    <div class="mt-4 flex justify-between px-4">
      <div class="flex items-center gap-x-2">
        <RouterLink
          to="/mybalance"
          class="active:bg-gray-200 hover:rounded-full hover:bg-gray-200 active:rounded-full p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
          >
            <path
              fill-rule="evenodd"
              d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </RouterLink>
        <h1 class="text-2xl font-semibold">Transacciones</h1>
      </div>
    </div>

    <div class="mt-4 px-4">
      <p class="text-sm">Recientes</p>

      <div class="mt-2">
        <Transaction v-for="tx in transactions" :key="tx.id" :transaction="tx" />
      </div>
    </div>
  </section>
</template>
