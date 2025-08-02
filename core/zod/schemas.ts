import { z } from 'zod'

export const ProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  discountPercentage: z.number().optional(),
  rating: z.number(),
  stock: z.number(),
  brand: z.string().optional(),
  category: z.string(),
  thumbnail: z.string(),
  images: z.array(z.string()),
})

export const PaginationParamsSchema = z.object({
  limit: z.number().min(1).max(100).optional(),
  skip: z.number().min(0).optional(),
})

export const PaginatedResponseSchema = <T>(itemSchema: z.ZodSchema<T>) =>
  z.object({
    products: z.array(itemSchema),
    total: z.number(),
    skip: z.number(),
    limit: z.number(),
  })

export const ProductFiltersSchema = PaginationParamsSchema.extend({
  category: z.string().optional(),
  search: z.string().optional(),
  minPrice: z.number().min(0).optional(),
  maxPrice: z.number().min(0).optional(),
})

export type ProductValidation = z.infer<typeof ProductSchema>
export type PaginationParamsValidation = z.infer<typeof PaginationParamsSchema>
export type ProductFiltersValidation = z.infer<typeof ProductFiltersSchema>
