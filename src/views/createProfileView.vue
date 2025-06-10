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
</script>

<template>
  <section>
    <div class="mt-4 mb-2 px-4">
      <h1 class="text-2xl font-semibold text-center">Completa tu perfil</h1>
    </div>
    <div class="mt-4 px-4 flex justify-center">
      <form action="" autocomplete="off" class="w-full max-w-md flex flex-col items-center">
        <div class="mt-6 grid w-full max-w-sm items-center gap-1.5">
          <Label for="ci">Cedula</Label>
          <div class="flex items-center gap-2">
            <Select id="ci_type">
              <SelectTrigger>
                <SelectValue placeholder="-" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Tipo de Cedula</SelectLabel>
                  <SelectItem value="V"> V </SelectItem>
                  <SelectItem value="E"> E </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input id="ci" type="number" />
          </div>
        </div>

        <div class="mt-4 grid w-full max-w-sm items-center gap-1.5">
          <Label for="first_name">Nombres</Label>
          <Input id="first_name" type="text" />
        </div>

        <div class="mt-4 grid w-full max-w-sm items-center gap-1.5">
          <Label for="last_name">Apellidos</Label>
          <Input id="last_name" type="text" />
        </div>

        <div class="mt-4 grid w-full max-w-sm items-center gap-1.5">
          <Label for="phone">Número de Celular</Label>
          <Input id="phone" type="tel" />
        </div>

        <!-- Boton de aceptar, abarca lo mismo que un input en espacio-->
        <div class="mt-6 grid w-full max-w-sm items-center">
          <Button type="button" class="w-full">Aceptar</Button>
        </div>
      </form>
    </div>
  </section>
</template>
