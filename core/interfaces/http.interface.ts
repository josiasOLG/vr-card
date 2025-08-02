export interface IHttpClient {
  get<T = unknown>(url: string, config?: unknown): Promise<T>
  post<T = unknown>(url: string, data?: unknown, config?: unknown): Promise<T>
  put<T = unknown>(url: string, data?: unknown, config?: unknown): Promise<T>
  delete<T = unknown>(url: string, config?: unknown): Promise<T>
  patch<T = unknown>(url: string, data?: unknown, config?: unknown): Promise<T>
}

export interface IBaseService {
  readonly baseUrl: string
}
