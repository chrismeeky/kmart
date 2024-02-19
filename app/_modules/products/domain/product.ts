export interface Product {
  id: number;
  name: string;
  description: string;
  imageLocation: string;
  price: number;
  currencyCode: string;
  currencySymbol: string;
  quantity?: number;
  status?: "ACTIVE" | "SOLD";
}
