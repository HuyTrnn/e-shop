import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchProducts = createAsyncThunk<any, void>("collections/fetch", async () => {
  try {
    const response = await axios.get(
      "https://backpack-nu.vercel.app/api/products",
      {
        headers: {
        // Authorization: 'Bearer' + '15|Zac6nOdmQ7JolkTvWiDkUWDrMIT7QvnZ06xjz8JY',
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
      }
    );
    return response.data;
  } catch (error : any) {
    return error.message;
  }
});

export { fetchProducts };
