<script setup>
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
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

import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="mb-16 pb-16">
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
        <h1 class="text-2xl font-semibold">Recargar cuenta</h1>
      </div>
    </div>

    <div class="mt-4 mb-2 px-4">
      <div class="flex justify-between">
        <h3>Reporta tu transacción</h3>

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
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clip-rule="evenodd"
                />
              </svg>

              Ayuda
            </Button>
          </DialogTrigger>
          <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Instrucciones</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit delectus placeat fugit
                vero deleniti numquam voluptas nesciunt itaque fugiat quibusdam est ab natus, ipsam
                iusto dolorum voluptatum iure, illum veniam? Voluptates consequatur voluptatum,
                nihil animi praesentium, sint, velit amet explicabo doloribus rem odit? Quibusdam
                dicta earum voluptatum, quam cumque corporis tempore rerum iste tenetur sunt. Eum
                officiis numquam est eligendi.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose as-child>
                <Button type="button" variant="outline">Cerrar</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <form action="" autocomplete="off">
        <div class="mt-6 grid w-full max-w-sm items-center gap-1.5">
          <Label for="amount">Monto</Label>
          <Input id="amount" type="number" />
        </div>

        <div class="mt-4 grid w-full max-w-sm items-center gap-1.5">
          <Label for="date">Fecha de la operación</Label>
          <Input id="date" type="date" />
        </div>

        <div class="mt-4 grid w-full max-w-sm items-center gap-1.5">
          <Label for="refer">Número de Referencia</Label>
          <Input id="refer" />
        </div>

        <div class="mt-4 grid w-full max-w-sm items-center gap-1.5">
          <Label for="url_link">URL del capture</Label>
          <Input id="url_link" type="url" />
        </div>

        <div class="mt-4 grid w-full max-w-sm items-center gap-1.5">
          <Label for="pay_type">Forma de Pago</Label>
          <Select id="pay_type">
            <SelectTrigger>
              <SelectValue placeholder="Selecciona" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Formas de Pago</SelectLabel>
                <SelectItem value="Pago Movil"> Pago Móvil </SelectItem>
                <SelectItem value="Transferencia"> Transferencia </SelectItem>
                <SelectItem value="Efectivo"> Efectivo </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div class="mt-6 flex items-center gap-x-2">
          <Button type="button" class="w-full max-w-sm">Reportar</Button>
        </div>
      </form>
    </div>
  </section>
</template>
