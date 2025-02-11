export interface Product {
  id: number;
  name: string;
  data: {
    year?: string;
    price?: string;
    color?: number;
    capacity?: string;
    generation?: string;
    cpu_model?: string;
    hard_disk_size?: string;
  };
}
