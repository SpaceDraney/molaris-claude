export interface Product {
  id: number;
  name: string;
  data?: {
    [key: string]: unknown;
  };
}
