import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { IHttpClient } from '../interfaces'

export class BaseHttpClient implements IHttpClient {
  protected client: AxiosInstance

  constructor(baseURL: string = process.env.NEXT_PUBLIC_API_URL || 'https://dummyjson.com') {
    this.client = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    this.setupInterceptors()
  }

  protected setupInterceptors(): void {
    this.client.interceptors.request.use(
      (config) => {
        const token = this.getAuthToken()
        if (token) {
          config.headers = config.headers || {}
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    this.client.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config
        
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true
          
          const newToken = await this.handleTokenRefresh()
          if (newToken) {
            originalRequest.headers.Authorization = `Bearer ${newToken}`
            return this.client(originalRequest)
          }
        }
        
        return Promise.reject(this.handleError(error))
      }
    )
  }

  protected getAuthToken(): string | null {
    return typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null
  }

  protected async handleTokenRefresh(): Promise<string | null> {
    return null
  }


  protected handleError(error: unknown): unknown {
    console.error('HTTP Error:', error)
    return error
  }
  async get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.client.get(url, config)
    return response.data
  }

  async post<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.client.post(url, data, config)
    return response.data
  }

  async put<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.client.put(url, data, config)
    return response.data
  }

  async delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.client.delete(url, config)
    return response.data
  }

  async patch<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.client.patch(url, data, config)
    return response.data
  }
}

export const httpClient = new BaseHttpClient()
