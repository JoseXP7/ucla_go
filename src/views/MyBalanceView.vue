<script setup>
import CardActions from '@/components/CardActions.vue'
</script>

<template>
  <section>
    <div class="mt-4 flex justify-between px-4">
      <h1 class="text-2xl font-semibold">Mi Saldo</h1>
      <h1 class="text-2xl font-semibold text-cyan-500">
        UCLA <span class="text-blue-600">Go</span>
      </h1>
    </div>

    <div class="mt-4">
      <div class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl">
        <img
          class="relative object-cover w-full h-full rounded-xl"
          src="https://i.imgur.com/kGkSg1v.png"
        />

        <div class="w-full px-8 absolute top-8">
          <div class="flex justify-between">
            <div class="">
              <p class="font-light">Nombre</p>
              <p class="font-medium tracking-widest">José Graterol</p>
            </div>
            <img class="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
          </div>
          <div class="pt-1">
            <p class="font-light">Balance</p>
            <p class="font-bold text-3xl tracking-more-wider">1335.00 Bs</p>
          </div>
          <div class="pt-6 pr-6">
            <div class="flex justify-between">
              <div class="">
                <p class="font-light text-xs">Estatus</p>
                <p class="font-medium tracking-wider text-sm">Activa</p>
              </div>
              <div class="">
                <p class="font-light text-xs">Creación</p>
                <p class="font-medium tracking-wider text-sm">03/25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardActions />
    </div>

    <div class="mt-6 px-4">
      <h1 class="text-3xl font-semibold">
        Bienvenido <span class="text-blue-600">Estudiante Promedio</span>!
      </h1>
      <p>Prueba alguna de las opciones</p>
    </div>
  </section>
</template>
