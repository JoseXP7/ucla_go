<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useUcardStore } from '@/stores/ucardStore'
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
import { toast } from 'vue-sonner'
import { Button } from './ui/button'

const userStore = useUserStore()
const ucardStore = useUcardStore()
const showDialog = ref(false)
const loading = ref(false)

onMounted(async () => {
  if (userStore.user?.id) {
    try {
      await ucardStore.fetchUCard(userStore.user.id)
      if (!ucardStore.ucard) {
        showDialog.value = true
      }
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
    }
  }
})

const createCard = async () => {
  loading.value = true

  try {
    await ucardStore.createUCard(userStore.user.id)
    showDialog.value = false

    toast.success('U-Card creada con éxito', {
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
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <Dialog v-model:open="showDialog">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>¡Crea tu U-Card!</DialogTitle>
        <DialogDescription> No tienes una U-Card activa. ¿Deseas crearla ahora? </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button :disabled="loading" @click="createCard">Crear U-Card</Button>
        <DialogClose as-child>
          <Button variant="outline">Cancelar</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
