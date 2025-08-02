export interface ApiResponse<T = unknown> {
  data: T
  message?: string
  status: number
}

export interface ApiError {
  message: string
  status: number
  code?: string
}

export interface PaginationParams {
  page?: number
  limit?: number
  skip?: number
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  skip: number
  limit: number
}

export interface ProductsApiResponse<T> {
  products: T[]
  total: number
  skip: number
  limit: number
}
