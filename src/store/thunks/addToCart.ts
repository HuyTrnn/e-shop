import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";

interface Items {
    quantity?: string;
    productId?: number;
}

interface Response {
  message: string;
}

const addToCart = createAsyncThunk<Response, Items>(
  "addcart/cart",
  async (detail, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const { access_token } = state.login;
    try {
      const response = await axios.post(
        "http://blog.test:8080/api/add-to-cart",
        detail,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            Accept: `application/json`,
            ContentType: "application/json",
          },
        }
      );
      return response.data;
    } catch (error: any) {
      throw Error(error.message);
    }
  }
);

export { addToCart };
