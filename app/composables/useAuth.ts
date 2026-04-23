import type { LoginPayload, User } from '~/types'

export const useAuth = () => {
  const user = useState<User | null>('auth:user', () => null)

  const isAuthenticated = computed(() => Boolean(user.value))

  const login = async (payload: LoginPayload) => {
    user.value = {
      id: 'demo-user',
      name: 'Nuxt Developer',
      email: payload.email
    }

    return user.value
  }

  const logout = () => {
    user.value = null
  }

  return {
    user,
    isAuthenticated,
    login,
    logout
  }
}
