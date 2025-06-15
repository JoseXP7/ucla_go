import { defineStore } from 'pinia'
import { useSupabase } from '@/clients/supabase'

export const useUcardStore = defineStore('ucard', {
  state: () => ({
    ucard: null,
  }),
  actions: {
    async fetchUCard(user_id) {
      const { supabase } = useSupabase()
      const { data, error } = await supabase
        .from('cards')
        .select('*')
        .eq('user_id', user_id)
        .maybeSingle()
      if (error) throw error

      this.ucard = data
      return data
    },

    async createUCard(user_id) {
      const { supabase } = useSupabase()
      const newCard = {
        user_id: user_id,
        qr_code_data: user_id,
        card_status: 'Active',
        //timestamp for creation
        issue_date: new Date().toISOString(),
      }

      const { data, error } = await supabase.from('cards').upsert(newCard).select().single()

      if (error) throw error
      this.ucard = data
      return data
    },
  },
  persist: true,
})
