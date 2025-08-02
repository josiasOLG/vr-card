import { ProductSchema, PaginationParamsSchema, ProductFiltersSchema } from './schemas'

export class ValidationService {
  static validateProduct(data: unknown) {
    return ProductSchema.safeParse(data)
  }

  static validatePaginationParams(data: unknown) {
    return PaginationParamsSchema.safeParse(data)
  }

  static validateProductFilters(data: unknown) {
    return ProductFiltersSchema.safeParse(data)
  }

  static parseProduct(data: unknown) {
    return ProductSchema.parse(data)
  }

  static parsePaginationParams(data: unknown) {
    return PaginationParamsSchema.parse(data)
  }

  static parseProductFilters(data: unknown) {
    return ProductFiltersSchema.parse(data)
  }
}

export * from './schemas'
