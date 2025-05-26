<script setup>
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router'
import UCard from '@/components/UCard.vue'

/*Data of the card:
- card_id
- user_id
- qr_code_data
- card_status
- issue_date
*/

const ucard = {
  card_id: 1,
  user_id: 2,
  qr_code_data: 'XXXX-XXXX-XXXX-XXXX-XXXX',
  card_status: 'Activa',
  issue_date: '03-02-2025',
}
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
        <h1 class="text-2xl font-semibold">Mi U-Card</h1>
      </div>
    </div>

    <div class="mt-4">
      <UCard :ucard="ucard" />
    </div>

    <div class="mt-9 mb-4 px-4">
      <h3>Acciones</h3>
      <!-- Botones de descargar y Bloquear, además recuerdame poner un as-child en cada button si quiero agregar un router link-->
      <div class="flex justify-between mt-4">
        <Button class="bg-blue-600 hover:bg-blue-500 focus-visible:ring-blue-500/50"
          >Descargar U-Card</Button
        >
        <Button variant="destructive">Bloquear</Button>
      </div>
    </div>
  </section>
</template>
