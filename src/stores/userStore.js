import { defineStore } from 'pinia'
import { useSupabase } from '@/clients/supabase'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {},
    profile: null,
  }),
  actions: {
    setUser(userInfo) {
      this.user = { ...userInfo }
      this.profile = null
    },
    async getProfile() {
      const { supabase } = useSupabase()
      if (!this.user.id) return null
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', this.user.id)
        .maybeSingle()
      if (error) throw error
      this.profile = data

      return data
    },
    setProfile(profile) {
      this.profile = profile
    },
    clear() {
      this.user = {}
      this.profile = null
    },
  },
  persist: true, // <--- ¡Persistencia automática!
})
