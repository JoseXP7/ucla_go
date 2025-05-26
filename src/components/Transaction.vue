<script setup>
defineProps({
  transaction: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="flex justify-between mt-3">
    <div class="flex items-center gap-x-2">
      <div
        class="w-15 h-15 bg-green-100 rounded-lg flex items-center justify-center text-green-500"
        v-if="transaction.transaction_type === 'Recarga'"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
        >
          <path
            fill-rule="evenodd"
            d="M20.03 3.97a.75.75 0 0 1 0 1.06L6.31 18.75h9.44a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 1 1.5 0v9.44L18.97 3.97a.75.75 0 0 1 1.06 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div
        class="w-15 h-15 bg-red-100 rounded-lg flex items-center justify-center text-red-500"
        v-else
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
        >
          <path
            fill-rule="evenodd"
            d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div>
        <p class="font-medium">{{ transaction.transaction_type }}</p>
        <p class="text-sm text-gray-500">{{ transaction.reference }}</p>
      </div>
    </div>
    <div class="flex flex-col items-end">
      <p class="font-bold text-lg">{{ transaction.transaction_amount }}</p>
      <p class="font-light text-sm">{{ transaction.transaction_date }}</p>
    </div>
  </div>
</template>
