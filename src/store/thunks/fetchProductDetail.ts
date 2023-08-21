import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchProductDetail = createAsyncThunk(
  "productDetail/fetchProductDetail",
  async (id: string) => {
    try {
      const response = await axios.get(
        `http://blog.test:8080/api/products/${id}`
      );
      return response.data;
    } catch (error: any) {
      throw Error(error.message);
    }
  }
);

export { fetchProductDetail };
