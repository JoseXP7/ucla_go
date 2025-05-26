<script setup></script>

<template>
  <main class="bg-white">
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="text-center">
          <h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Una manera sencilla de colaborar
          </h1>
          <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            UCLA Go! te facilita una tarjeta de transporte recargable fácil de usar.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <RouterLink
              to="/login"
              class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >Empezar</RouterLink
            >
            <a href="#" class="text-sm/6 font-semibold text-gray-900"
              >Leer más <span aria-hidden="true">→</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
