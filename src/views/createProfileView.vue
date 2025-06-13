<script setup>
import { useSupabase } from '@/clients/supabase'
import { useAuth } from '@/composables/useAuth'
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
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

const router = useRouter()
const { supabase } = useSupabase()

const loading = ref(false)
const ciType = ref('')
const ci = ref('')
const firstName = ref('')
const lastName = ref('')
const codePhone = ref('')
const phone = ref('')

const fullPhone = computed(() => codePhone.value + phone.value)

const { getSession } = useAuth()

const updateProfile = async () => {
  const session = await getSession()

  const userId = session.user.id

  if (!ciType.value || !ci.value || !firstName.value || !lastName.value || !phone.value) {
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
      id: userId,
      ci_type: ciType.value,
      ci: ci.value,
      first_name: firstName.value,
      last_name: lastName.value,
      contact_number: fullPhone.value,
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
    router.push('/mybalance')
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
  <section>
    <div class="mt-4 mb-2 px-4">
      <h1 class="text-2xl font-semibold text-center">Completa tu perfil</h1>
    </div>
    <div class="mt-4 px-4 flex justify-center">
      <form
        action=""
        autocomplete="off"
        class="w-full max-w-md flex flex-col items-center"
        @submit.prevent="updateProfile()"
      >
        <div class="mt-6 grid w-full max-w-sm items-center gap-1.5">
          <Label for="ci">Cedula</Label>
          <div class="flex items-center gap-2">
            <Select id="ci_type" v-model="ciType">
              <SelectTrigger>
                <SelectValue placeholder="-" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Nacionalidad</SelectLabel>
                  <SelectItem value="V"> V </SelectItem>
                  <SelectItem value="E"> E </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input id="ci" type="number" v-model="ci" />
          </div>
        </div>

        <div class="mt-4 grid w-full max-w-sm items-center gap-1.5">
          <Label for="first_name">Nombres</Label>
          <Input id="first_name" type="text" v-model="firstName" />
        </div>

        <div class="mt-4 grid w-full max-w-sm items-center gap-1.5">
          <Label for="last_name">Apellidos</Label>
          <Input id="last_name" type="text" v-model="lastName" />
        </div>

        <div class="mt-4 grid w-full max-w-sm items-center gap-1.5">
          <Label for="phone">Número de Celular</Label>

          <div class="flex items-center gap-2">
            <Select id="code_phone" v-model="codePhone">
              <SelectTrigger>
                <SelectValue placeholder="0000" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="0414"> 0414 </SelectItem>
                  <SelectItem value="0424"> 0424 </SelectItem>
                  <SelectItem value="0416"> 0416 </SelectItem>
                  <SelectItem value="0426"> 0426 </SelectItem>
                  <SelectItem value="0412"> 0412 </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input id="phone" type="tel" v-model="phone" />
          </div>
        </div>

        <!-- Boton de aceptar, abarca lo mismo que un input en espacio-->
        <div class="mt-6 grid w-full max-w-sm items-center">
          <Button type="submit" class="w-full" :disabled="loading">Aceptar</Button>
        </div>
      </form>
    </div>
  </section>
</template>
