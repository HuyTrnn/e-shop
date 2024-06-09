import axios from "axios";
import { GetStaticPropsContext } from "next";

interface Slider {
  // Define the structure of a slider object based on your API response
  id: string;
  imageUrl: string;
  title: string;
  // Add other relevant fields
}

interface GetDataResponse {
  data: Slider[];
}

export async function getData(): Promise<GetDataResponse> {
  try {
    const res = await axios.get<GetDataResponse>('https://backpack-nu.vercel.app/api/sliders');
    if (!res || !res.data) {
      throw new Error('Failed to fetch data');
    }
    return res.data;
  } catch (error: any) {
    console.error('Error fetching data:', error);
    throw new Error(error.message || 'Unknown error occurred');
  }
}
