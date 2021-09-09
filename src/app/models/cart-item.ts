import { Product } from "./product";

export interface CartItem {
  id: number;
  quantity: number|null;
  user: object|null;
  product: Product|number;
}
