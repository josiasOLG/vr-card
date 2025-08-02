import { BaseService } from '../baseService'
import { Product, ProductsApiResponse, PaginationParams } from '../../interfaces'

export interface ProductFilters extends PaginationParams {
  category?: string
  search?: string
  minPrice?: number
  maxPrice?: number
}

export class ProductService extends BaseService {
  constructor() {
    super('/products')
  }

  async getAllProducts(params?: ProductFilters): Promise<ProductsApiResponse<Product>> {
    try {
      const queryString = this.buildQueryString(params)
      const url = this.buildUrl(`${queryString ? `?${queryString}` : ''}`)
      
      return await this.httpClient.get<ProductsApiResponse<Product>>(url)
    } catch (error) {
      this.handleServiceError(error)
    }
  }

  async getProductById(id: number): Promise<Product> {
    try {
      return await this.httpClient.get<Product>(this.buildUrl(`/${id}`))
    } catch (error) {
      this.handleServiceError(error)
    }
  }

  async getProductsByCategory(category: string, params?: PaginationParams): Promise<ProductsApiResponse<Product>> {
    try {
      const queryString = this.buildQueryString(params)
      const url = this.buildUrl(`/category/${category}${queryString ? `?${queryString}` : ''}`)
      
      return await this.httpClient.get<ProductsApiResponse<Product>>(url)
    } catch (error) {
      this.handleServiceError(error)
    }
  }

  async searchProducts(query: string, params?: PaginationParams): Promise<ProductsApiResponse<Product>> {
    try {
      const searchParams = { ...params, q: query }
      const queryString = this.buildQueryString(searchParams)
      const url = this.buildUrl(`/search${queryString ? `?${queryString}` : ''}`)
      
      return await this.httpClient.get<ProductsApiResponse<Product>>(url)
    } catch (error) {
      this.handleServiceError(error)
    }
  }

  private buildQueryString(params?: ProductFilters | PaginationParams | Record<string, unknown>): string {
    if (!params) return ''
    
    const searchParams = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        searchParams.append(key, String(value))
      }
    })
    
    return searchParams.toString()
  }
}

export const productService = new ProductService()
