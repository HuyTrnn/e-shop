import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";

const fetchCart = createAsyncThunk(
  "bill/Cart",
  async (_ , thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const { access_token } = state.login;
    try {
      const response = await axios.get(
        `http://blog.test:8080/api/cart`,
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

export { fetchCart  };
