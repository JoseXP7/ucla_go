<script setup>
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import FAQ from '@/components/FAQ.vue'
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
        <h1 class="text-2xl font-semibold">Mi Perfil</h1>
      </div>
    </div>

    <div class="mt-4 mb-2 px-4">
      <h3>Datos Personales</h3>

      <form action="" autocomplete="off">
        <div class="mt-6 grid w-full max-w-sm items-center gap-1.5">
          <Label for="ci">Cedula</Label>
          <Input id="ci" />
        </div>

        <div class="mt-4 grid w-full max-w-sm items-center gap-1.5">
          <Label for="first_name">Nombres</Label>
          <Input id="first_name" />
        </div>

        <div class="mt-4 grid w-full max-w-sm items-center gap-1.5">
          <Label for="last_name">Apellidos</Label>
          <Input id="last_name" />
        </div>

        <div class="mt-4 grid w-full max-w-sm items-center gap-1.5">
          <Label for="phone">Número de Celular</Label>
          <Input id="phone" type="tel" />
        </div>

        <div class="mt-4 grid w-full max-w-sm items-center gap-1.5">
          <Label for="email">Correo electrónico</Label>
          <Input id="email" disabled type="email" />
        </div>

        <h3 class="mt-6">Seguridad</h3>

        <div class="mt-4 grid w-full max-w-sm items-center gap-1.5">
          <Label for="password">Contraseña</Label>
          <Input id="password" type="password" />
        </div>

        <div class="mt-4 grid w-full max-w-sm items-center gap-1.5">
          <Label for="password_verify">Verifica tu contraseña</Label>
          <Input id="password_verify" type="password" />
        </div>

        <div class="mt-6 flex items-center gap-x-2">
          <Button type="button" class="w-full max-w-sm">Guardar Cambios</Button>
        </div>
      </form>
    </div>

    <div class="mt-8 px-4">
      <h3 class="mb-2 text-lg font-bold">Preguntas Frecuentes</h3>
      <FAQ />
    </div>
  </section>
</template>
