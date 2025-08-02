import { render } from '@testing-library/react'
import App from '../components/App'

jest.mock('host/useCart', () => ({
  useCart: () => ({
    addToCart: jest.fn(),
    openCartModal: jest.fn(),
  }),
}))

describe('Card App', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />)
    expect(container).toBeTruthy()
  })
})
