import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import axios from "axios";

interface Order {
    cart_id: number;
    contact_number: string;
    receiver_name: string;
    specific_address: string;
    user_id: number;
}


const addOrder = createAsyncThunk<any, Order>(
    "addcart/cart",
    async (detail, thunkAPI) => {
      const state = thunkAPI.getState() as RootState;
      const { access_token } = state.login;
      try {
        const response = await axios.post(
          "https://backpack-nu.vercel.app/api/receipts",
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

  export {addOrder}