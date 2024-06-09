import axios from "axios";

interface Product {
  // Define the structure of a product here based on your API response
  id: string;
  name: string;
  price: number;
  // Add other relevant fields
}

interface GetAllProductResponse {
  data: Product[];
}

export async function getAllProduct(): Promise<GetAllProductResponse> {
  try {
    const res = await axios.get<GetAllProductResponse>('https://backpack-nu.vercel.app/api/products');
    if (!res || !res.data) {
      throw new Error('Failed to fetch data');
    }
    return res.data;
  } catch (error: any) {
    console.error('Error fetching data:', error);
    throw new Error(error.message || 'Unknown error occurred');
  }
}
