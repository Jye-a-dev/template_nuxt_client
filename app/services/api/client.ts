import type { ApiResponse } from '~/types'

export const createApiClient = () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBase

  return {
    get: <T>(url: string) => $fetch<ApiResponse<T>>(url, { baseURL }),
    post: <T, Body>(url: string, body: Body) =>
      $fetch<ApiResponse<T>>(url, {
        baseURL,
        method: 'POST',
        body
      })
  }
}
