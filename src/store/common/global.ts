import { defineStore } from 'pinia'
import type { StoreDefinition } from 'pinia'
import type { GlobalState } from '@/types/store'
export const useGlobalState: StoreDefinition = defineStore('globalState', {
  state: (): GlobalState => {
    return {
      isLoading: false,
      error: {
        code: '',
        message: '',
      },
    }
  },
})
