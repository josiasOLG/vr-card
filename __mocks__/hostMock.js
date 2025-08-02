const useCart = () => ({
  items: [],
  total: 0,
  itemCount: 0,
  addToCart: jest.fn(),
  removeFromCart: jest.fn(),
  updateQuantity: jest.fn(),
  clearCart: jest.fn(),
  openCartModal: jest.fn(),
  closeCartModal: jest.fn(),
  isCartModalOpen: false,
})

const hostMock = { useCart }

module.exports = hostMock
