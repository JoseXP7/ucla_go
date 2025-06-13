<script setup>
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'vue-sonner'
import FAQ from '@/components/FAQ.vue'
import { RouterLink, useRouter } from 'vue-router'
import { ref } from 'vue'
import { useSupabase } from '@/clients/supabase'

const router = useRouter()

import { useAuth } from '@/composables/useAuth'
import { useUserStore } from '@/stores/userStore'

const { supabase } = useSupabase()
const userStore = useUserStore()

const firstName = ref(userStore.profile?.first_name || '')
const lastName = ref(userStore.profile?.last_name || '')
const contact_number = ref(userStore.profile?.contact_number || '')
const loading = ref(false)

const handleLogout = async () => {
  const { signOut } = useAuth()
  await signOut()
  router.push('/')
}

const updateProfile = async () => {
  if (!firstName.value || !lastName.value || !contact_number.value) {
    toast.error('Por favor, completa todos los campos.', {
      position: 'bottom-right',
      duration: 5000,
      style: {
        backgroundColor: '#EF4444',
        color: '#fff',
        border: 'none',
      },
    })
    return
  }

  try {
    loading.value = true

    const updates = {
      id: userStore.profile.id,
      first_name: firstName.value,
      last_name: lastName.value,
      contact_number: contact_number.value,
    }

    const { error } = await supabase.from('profiles').upsert(updates)

    if (error) throw error

    toast.success('Perfil actualizado con éxito.', {
      position: 'bottom-right',
      duration: 5000,
      style: {
        backgroundColor: '#4ade80',
        color: '#fff',
        border: 'none',
      },
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
    return
  } finally {
    loading.value = false
  }
}
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

      <form action="" autocomplete="off" @submit.prevent="updateProfile()">
        <div class="mt-6 grid w-full max-w-sm items-center gap-1.5">
          <Label for="ci">Cedula</Label>
          <div class="flex items-center gap-2">
            <p>{{ userStore.profile?.ci_type }} - {{ userStore.profile?.ci }}</p>
          </div>
        </div>

        <div class="mt-4 grid w-full max-w-sm items-center gap-1.5">
          <Label for="first_name">Nombres</Label>
          <Input id="first_name" v-model="firstName" />
        </div>

        <div class="mt-4 grid w-full max-w-sm items-center gap-1.5">
          <Label for="last_name">Apellidos</Label>
          <Input id="last_name" v-model="lastName" />
        </div>

        <div class="mt-4 grid w-full max-w-sm items-center gap-1.5">
          <Label for="phone">Número de Celular</Label>
          <Input id="phone" type="tel" v-model="contact_number" />
        </div>

        <div class="mt-4 grid w-full max-w-sm items-center gap-1.5">
          <Label for="email">Correo electrónico</Label>
          <p>{{ userStore.user.email }}</p>
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
          <Button type="submit" class="w-full max-w-sm" :disabled="loading">Guardar Cambios</Button>
        </div>
      </form>
    </div>

    <div class="mt-8 px-4">
      <div class="grid w-full max-w-sm items-center gap-1.5">
        <h3 class="mb-2 text-lg font-bold">Preguntas Frecuentes</h3>
        <FAQ />
      </div>
    </div>

    <div class="mt-8 px-4">
      <div class="grid w-full max-w-sm items-center gap-1.5">
        <Button type="button" class="w-full" @click="handleLogout">Cerrar Sesión</Button>
      </div>
    </div>
  </section>
</template>
