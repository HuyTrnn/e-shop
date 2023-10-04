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
    detail: OrderResponse | null;
  }

export interface OrderResponse {
            receipt_id: number;
            id: any;
            user_name: string,
            email:  string,
            order_detail: [
                {
                    image: string ;
                    receipt_id: number | null | undefined;
                    product_name:  string,
                    quantity: number | string,
                    unit_price: number
                }
            ],
            receiver_name:  string,
            user_id: number,
            contact_number: number,
            specific_address:  string,
            total_amount: number,
            receipt_status: number
}

export interface CustomerResponse {
    message: string;
    data?: Array<UserDetail>;
  detail? : UserDetail;

  }


  export interface UserDetail {
    id: string,
    name: string,
    phone?: number,
    address?: string,
    email?: string,
    is_admin?: number,
    created_at?: string,
    updated_at?: string
  }
  