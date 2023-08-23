export interface ProductsDetail {
      product_name: string;
      id: string;
      product_images: Array<string>;
      title?: string;
      material?:string;
      contain?:string;
      other?: string;
      introduce?: string;
      product_price?: number;
      product_type ?: number;
      product_description?: string;
      product_stock?: number;
      rating?: any;
      size?: string;
}

export interface Bill extends ProductsDetail {
      cart_detail_id: number;
      image: string | undefined;
      total_price : number;
      quantity: number;
}


export interface ResponseOrder {
    data: Array<OrderResponse>;
    loading: boolean;
    error: any;
  }

export interface OrderResponse {
            user_name: string,
            email:  string,
            order_detail: [
                {
                    product_name:  string,
                    quantity: number,
                    unit_price: number
                }
            ],
            receiver_name:  string,
            contact_number: number,
            specific_address:  string,
            total_amount: number,
            receipt_status: number
      
}