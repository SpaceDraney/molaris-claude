export interface Product {
  id: number;
  name: string;
  data?: {
    [key: string]: string | number;
  };
}
