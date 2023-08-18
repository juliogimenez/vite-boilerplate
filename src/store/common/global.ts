import { defineStore } from 'pinia'

export type GlobalState = {
  isLoading: boolean
}

export const useGlobalState = defineStore('globalState', {
  state: () => {
    return {
      isLoading: false,
    }
  },
})
