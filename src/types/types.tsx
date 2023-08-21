export interface ProductsDetail {
      data: any;  
      product_name: string;
      id: string;
      product_images?: Array<string>;
      title?: string;
      material?:string;
      contain?:string;
      other?: string;
      introduce?: string;
      product_price?: number;
      product_description: string;
      product_stock: number;
      rating: any;
      size: string;
}

export interface Bill extends ProductsDetail {
      image: string | undefined;
      total_price : number;
      quantity: number;
}