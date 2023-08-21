import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchCart } from "../thunks/fetchCart";
import { Bill } from "@/types/types";

interface CartItem {
  id: number;
  user_id: number;
  total_price: number;
  items: Array<Bill>;
  created_at: any;
  updated_at: string;
}

interface CartState {
  cartData: CartItem;
  loading: boolean;
  error: any;
}

const initialState: CartState = {
  cartData: {
    id: 0,
    user_id: 0,
    total_price: 0,
    items: [],
    created_at: "",
   updated_at: "",
  },
  loading: false,
  error: null,
};

const billSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartData = action.payload;
        state.error = null;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default billSlice.reducer;
