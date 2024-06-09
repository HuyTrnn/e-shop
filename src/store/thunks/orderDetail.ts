import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";

const fetchOrderDetail = createAsyncThunk<any, number>(
  "orders/order-detail",
  async (id : number, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const { access_token } = state.login;
    try {
      const response = await axios.get(
        `https://backpack-nu.vercel.app/api/receipts/${id}`,
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

export { fetchOrderDetail };
