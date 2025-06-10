<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { toast } from 'vue-sonner'

const loading = ref(false)
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
// Regular expression to validate Gmail addresses with at least 8 characters before the '@'
let emailregEx = /[^@ \t\r\n]{8,}@gmail\.com/g
const { signUpWithPassw } = useAuth()

const signup = async () => {
  loading.value = true
  if (emailregEx.test(email.value) == false) {
    //variante destructive
    toast.error('El correo debe ser de Gmail y tener al menos 8 caracteres', {
      position: 'bottom-right',
      duration: 5000,
      style: {
        backgroundColor: '#EF4444',
        color: '#fff',
        border: 'none',
      },
    })
    loading.value = false
  } else if (password.value !== passwordConfirm.value) {
    toast.error('Las contraseñas no coinciden', {
      position: 'bottom-right',
      duration: 5000,
      style: {
        backgroundColor: '#EF4444',
        color: '#fff',
        border: 'none',
      },
    })
  } else {
    loading.value = true
    try {
      await signUpWithPassw({
        email: email.value,
        password: password.value,
      })
    } catch (error) {
      toast.error(error.message, {
        position: 'bottom-right',
        duration: 5000,
        style: {
          backgroundColor: '#EF4444',
          color: '#fff',
          border: 'none',
        },
      })
    } finally {
      loading.value = false
    }
  }
}
</script>

<template>
  <section class="flex min-h-full mt-12 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        Crear una cuenta
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="signup()">
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900"
            >Correo electronico</label
          >
          <div class="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              autocomplete="off"
              required=""
              v-model="email"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div class="mb-2">
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-900"
              >Contraseña</label
            >
          </div>
          <div class="mt-2">
            <input
              type="password"
              name="password"
              id="password"
              autocomplete="off"
              required=""
              v-model="password"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password_confirm" class="block text-sm/6 font-medium text-gray-900"
              >Repite tu contraseña</label
            >
          </div>
          <div class="mt-2">
            <input
              type="password"
              name="password_confirm"
              id="password_confirm"
              autocomplete="off"
              required=""
              v-model="passwordConfirm"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="loading"
            class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Registrarse
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Ya tienes una cuenta?
        {{ ' ' }}
        <RouterLink to="/login" class="font-semibold text-blue-600 hover:text-blue-500"
          >Iniciar Sesión</RouterLink
        >
      </p>
    </div>
  </section>
</template>
