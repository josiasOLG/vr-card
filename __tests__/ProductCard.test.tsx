import { render, screen } from '@testing-library/react'
import ProductCard from '../components/molecules/ProductCard'
import { Product } from '../core/interfaces'

const mockProduct: Product = {
  id: 1,
  title: 'Test Product',
  price: 99.99,
  description: 'Test product description',
  category: 'test',
  thumbnail: 'test-image.jpg',
  images: ['test-image.jpg'],
  rating: 4.5,
  discountPercentage: 0,
  stock: 10,
  brand: 'Test Brand'
}

jest.mock('host/useCart', () => ({
  useCart: () => ({
    addToCart: jest.fn(),
    openCartModal: jest.fn(),
  }),
}))

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} />)
    
    expect(screen.getByText('Test Product')).toBeTruthy()
    expect(screen.getByText('$99.99')).toBeTruthy()
    expect(screen.getByText('Test product description')).toBeTruthy()
  })

  it('displays product rating', () => {
    render(<ProductCard product={mockProduct} />)
    
    expect(screen.getByText('(4.5)')).toBeTruthy()
  })

  it('has add to cart functionality', () => {
    render(<ProductCard product={mockProduct} />)
    
    const addToCartButton = screen.getByRole('button', { name: /adicionar ao carrinho/i })
    expect(addToCartButton).toBeTruthy()
  })
})
