import api from '@/lib/api';
import { Product, ApiResponse } from '@/types/api';

export const productService = {
  async getProducts(): Promise<ApiResponse<Product[]>> {
    const response = await api.get('/catalogue/products/');
    return response.data;
  },

  async getProduct(id: number): Promise<ApiResponse<Product>> {
    const response = await api.get(`/catalogue/products/${id}/`);
    return response.data;
  }
};