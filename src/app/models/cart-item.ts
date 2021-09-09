import { Product } from "./product";

export interface CartItem {
  id: number;
  quantity: number;
  user: object;
  product: Product|number;
}
