import { createApiClient } from '~/services/api/client'
import type { LoginPayload, User } from '~/types'

export const authService = () => {
  const api = createApiClient()

  return {
    login: (payload: LoginPayload) => api.post<User, LoginPayload>('/auth/login', payload),
    profile: () => api.get<User>('/auth/profile')
  }
}
