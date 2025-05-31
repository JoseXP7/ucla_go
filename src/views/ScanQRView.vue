<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Html5Qrcode } from 'html5-qrcode'

const router = useRouter()
const scanner = ref(null)
const isStopped = ref(false)
const cameraError = ref(false)
const scannerStarted = ref(false)

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

function stopAndClearScanner() {
  if (scanner.value && scannerStarted.value && !isStopped.value) {
    isStopped.value = true
    scanner.value
      .stop()
      .then(() => scanner.value.clear())
      .catch((err) => {
        // Silencia el error si el escáner no estaba corriendo
        // console.error('Error al limpiar el escáner:', err)
      })
  }
}

function onScanSuccess(decodedText, decodedResult) {
  // Aquí puedes mostrar el resultado en tu UI
  stopAndClearScanner()
  alert(`QR detectado: ${decodedText}`, decodedResult)
}

onMounted(() => {
  if (!isMobileDevice()) {
    router.replace('/mybalance')
    return
  }
  scanner.value = new Html5Qrcode('reader')
  scanner.value
    .start(
      { facingMode: 'environment' },
      {
        fps: 13,
        qrbox: { width: 300, height: 300 },
      },
      onScanSuccess,
      // onScanFailure (opcional)
    )
    .then(() => {
      scannerStarted.value = true
    })
    .catch((err) => {
      cameraError.value = true
      alert('Error al iniciar el escáner: ' + err)
      router.replace('/mybalance')
    })
})

onBeforeUnmount(() => {
  stopAndClearScanner()
})
</script>

<template>
  <section>
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
        <h1 class="text-2xl font-semibold">Escanear QR</h1>
      </div>
    </div>

    <div class="mt-4 px-2 shadow-md flex flex-col items-center">
      <div id="reader" class="rounded-lg overflow-hidden" style="width: 350px; height: 350px"></div>
      <p class="mt-4 text-center text-gray-500">Apunta la cámara al código QR</p>
      <!-- Puedes agregar un botón para detener el escaneo si quieres -->
    </div>
  </section>
</template>
