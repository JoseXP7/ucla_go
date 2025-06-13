import { ref } from 'vue'
import { useSupabase } from '@/clients/supabase'

const user = ref({})

const loadProfileFromStorage = () => {
  try {
    const stored = localStorage.getItem('profile')
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

const saveProfileToStorage = (data) => {
  if (data) {
    localStorage.setItem('profile', JSON.stringify(data))
  } else {
    localStorage.removeItem('profile')
  }
}

const profile = ref(loadProfileFromStorage())

export function useUser() {
  const { supabase } = useSupabase()

  const setUser = (userInfo) => {
    user.value = { ...userInfo }
    profile.value = null
    saveProfileToStorage(null)
  }

  const getProfile = async () => {
    if (!user.value.id) return null
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.value.id)
      .maybeSingle()

    if (error) throw error

    profile.value = data
    saveProfileToStorage(data)

    return data
  }

  return {
    user,
    profile,
    getProfile,
    setUser,
  }
}
