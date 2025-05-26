<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- Mobile Navbar -->
  <nav class="fixed bottom-0 left-0 right-0 z-50 flex justify-center w-full">
    <div class="w-full max-w-md mx-auto px-2 bg-white shadow-lg rounded-t-2xl">
      <div class="flex">
        <div class="flex-1 group">
          <RouterLink
            to="/mybalance"
            class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-blue-600"
          >
            <span class="block px-1 pt-1 pb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8 pt-1 mb-1 mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span class="block text-xs pb-2">Saldo</span>
              <span class="block w-5 mx-auto h-1 group-hover:bg-blue-600 rounded-full"></span>
            </span>
          </RouterLink>
        </div>
        <div class="flex-1 group">
          <RouterLink
            to="/transactions"
            class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-blue-600"
          >
            <span class="block px-1 pt-1 pb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8 pt-1 mb-1 mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                />
              </svg>

              <span class="block text-xs pb-2">Movimientos</span>
              <span class="block w-5 mx-auto h-1 group-hover:bg-blue-600 rounded-full"></span>
            </span>
          </RouterLink>
        </div>
        <div class="flex-1 group">
          <RouterLink
            to="/ucard"
            class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-blue-600"
          >
            <span class="block px-1 pt-1 pb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8 pt-1 mb-1 mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>

              <span class="block text-xs pb-2 whitespace-nowrap">U-Card</span>
              <span class="block w-5 mx-auto h-1 group-hover:bg-blue-600 rounded-full"></span>
            </span>
          </RouterLink>
        </div>
        <div class="flex-1 group">
          <RouterLink
            to="/myprofile"
            class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-blue-600"
          >
            <span class="block px-1 pt-1 pb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8 pt-1 mb-1 mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              <span class="block text-xs pb-2">Perfil</span>
              <span class="block w-5 mx-auto h-1 group-hover:bg-blue-600 rounded-full"></span>
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
