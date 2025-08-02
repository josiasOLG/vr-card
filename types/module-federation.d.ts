declare module "host/useCart" {
  export interface CartItem {
    id: number;
    title: string;
    price: number;
    discountPercentage?: number;
    thumbnail: string;
    category: string;
    quantity: number;
    rating: number;
  }

  export const useCart: () => {
    items: CartItem[];
    isOpen: boolean;
    total: number;
    itemCount: number;
    addToCart: (product: any) => void;
    removeItem: (id: number) => void;
    updateItemQuantity: (id: number, quantity: number) => void;
    clearAllItems: () => void;
    toggleCartModal: () => void;
    openCartModal: () => void;
    closeCartModal: () => void;
  };
  export default useCart;
}
