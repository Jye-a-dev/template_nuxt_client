import { createApiClient } from '~/services/api/client'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      api: createApiClient()
    }
  }
})
