export interface CartItem {
    cart_wine_id: number;
    image: string;
    name: string;
    origin_country: string;
    price: number;
    quantity: number;
    wine_id: number;
  }
  
  export interface Cart {
    id: number;
    is_order: number;
    user_id: number;
    content: CartItem[];
  }