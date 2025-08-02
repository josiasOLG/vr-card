import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product, PaginatedResponse } from '../../interfaces'

export interface ProductState {
  products: Product[]
  selectedProduct: Product | null
  loading: boolean
  error: string | null
  pagination: {
    total: number
    skip: number
    limit: number
  }
  filters: {
    category?: string
    search?: string
    minPrice?: number
    maxPrice?: number
  }
}

const initialState: ProductState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
  pagination: {
    total: 0,
    skip: 0,
    limit: 30
  },
  filters: {}
}

// Product slice following Redux Toolkit patterns
export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Loading states
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
      if (action.payload) {
        state.error = null
      }
    },

    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.loading = false
    },

    // Product operations
    setProducts: (state, action: PayloadAction<PaginatedResponse<Product>>) => {
      state.products = action.payload.products
      state.pagination = {
        total: action.payload.total,
        skip: action.payload.skip,
        limit: action.payload.limit
      }
      state.loading = false
      state.error = null
    },

    appendProducts: (state, action: PayloadAction<PaginatedResponse<Product>>) => {
      state.products = [...state.products, ...action.payload.products]
      state.pagination = {
        total: action.payload.total,
        skip: action.payload.skip,
        limit: action.payload.limit
      }
      state.loading = false
    },

    setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
      state.selectedProduct = action.payload
    },

    // Filter operations
    setFilters: (state, action: PayloadAction<Partial<ProductState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload }
    },

    clearFilters: (state) => {
      state.filters = {}
    },

    // Reset state
    resetProductState: () => initialState,
  },
})

export const {
  setLoading,
  setError,
  setProducts,
  appendProducts,
  setSelectedProduct,
  setFilters,
  clearFilters,
  resetProductState,
} = productSlice.actions

export default productSlice.reducer
