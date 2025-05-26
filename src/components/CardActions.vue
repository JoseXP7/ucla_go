<template>
  <!-- Mobile Navbar -->
  <nav class="mt-9 mx-auto flex justify-center w-full">
    <div class="px-7">
      <div class="flex">
        <div class="flex-1 group">
          <a
            href="#"
            class="flex items-center justify-center flex-col text-center mx-auto px-4 pt-2 w-full text-black group-hover:text-blue-600"
          >
            <span class="block p-3 bg-white rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8 mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                />
              </svg>
            </span>
            <span class="block text-xs pb-2 mt-2">Recargar</span>
          </a>
        </div>
        <div class="flex-1 group">
          <a
            href="#"
            class="flex items-center justify-center flex-col text-center mx-auto px-4 pt-2 w-full text-black group-hover:text-blue-600"
          >
            <span class="block p-3 bg-white rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8 mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"
                />
              </svg>
            </span>
            <span class="block text-xs pb-2 mt-2">Escanear</span>
          </a>
        </div>
        <div class="flex-1 group">
          <a
            href="#"
            class="flex items-center justify-center flex-col text-center mx-auto px-4 pt-2 w-full text-black group-hover:text-blue-600"
          >
            <span class="block p-3 bg-white rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8 mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </span>
            <span class="block text-xs pb-2 mt-2">Enviar</span>
          </a>
        </div>
        <div class="flex-1 group">
          <a
            href="#"
            class="flex items-center justify-center flex-col text-center mx-auto px-4 pt-2 w-full text-black group-hover:text-blue-600"
          >
            <span class="block p-3 bg-white rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8 mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>
            </span>
            <span class="block text-xs pb-2 mt-2">Amigos</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
