<script setup>
import { ref, watchEffect } from 'vue'
import QRCode from 'qrcode'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const props = defineProps({
  ucard: Object,
})

const qrCodeUrl = ref('')

watchEffect(async () => {
  if (props.ucard?.qr_code_data) {
    qrCodeUrl.value = await QRCode.toDataURL(props.ucard.qr_code_data, {
      width: 512,
    })
  }
})
</script>

<template>
  <div class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl">
    <img
      class="relative object-cover w-full h-full rounded-xl"
      src="https://i.imgur.com/kGkSg1v.png"
    />

    <div class="w-full px-8 absolute top-8">
      <div class="flex justify-between">
        <div class="">
          <p class="font-light">ID de Usuario</p>
          <p class="font-medium tracking-widest">{{ ucard.user_id }}</p>
        </div>
        <img class="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
      </div>
      <div class="pt-1">
        <p>
          <Dialog>
            <DialogTrigger as-child>
              <Button variant="outline" class="text-black"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 4.875C3 3.839 3.84 3 4.875 3h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 0 1 3 9.375v-4.5ZM4.875 4.5a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375h-4.5Zm7.875.375c0-1.036.84-1.875 1.875-1.875h4.5C20.16 3 21 3.84 21 4.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5a1.875 1.875 0 0 1-1.875-1.875v-4.5Zm1.875-.375a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375h-4.5ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75A.75.75 0 0 1 6 7.5v-.75Zm9.75 0A.75.75 0 0 1 16.5 6h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75ZM3 14.625c0-1.036.84-1.875 1.875-1.875h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.035-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 0 1 3 19.125v-4.5Zm1.875-.375a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375h-4.5Zm7.875-.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Zm6 0a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75ZM6 16.5a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Zm9.75 0a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Zm-3 3a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Zm6 0a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Ver QR
              </Button>
            </DialogTrigger>
            <DialogContent class="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>QR de la U-Card</DialogTitle>
                <DialogDescription>
                  Muestra el código QR al operador para dar tu colaboración. Se recomienda subir el
                  brillo del dispositivo.
                </DialogDescription>
              </DialogHeader>
              <img
                class="relative object-cover w-full h-full rounded-xl"
                v-if="qrCodeUrl"
                :src="qrCodeUrl"
              />
              <p class="text-center">{{ ucard.qr_code_data }}</p>
              <DialogFooter>
                <DialogClose as-child>
                  <Button type="button" variant="outline">Cerrar</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </p>
      </div>
      <div class="pt-6 pr-6">
        <div class="flex justify-between">
          <div class="">
            <p class="font-light text-xs">Estatus</p>
            <p class="font-medium tracking-wider text-sm">{{ ucard.card_status }}</p>
          </div>
          <div class="">
            <p class="font-light text-xs">Creación</p>
            <p class="font-medium tracking-wider text-sm">{{ ucard.issue_date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
