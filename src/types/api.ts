export interface Product {
    id: number;
    title: string;
    description: string;
    price: string;
    images: string[];
    categories: string[];
  }
  
  export interface Category {
    id: number;
    name: string;
    slug: string;
  }
  
  export interface ApiResponse<T> {
    data: T;
    status: number;
    message?: string;
  }