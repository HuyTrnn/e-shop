import { createSlice } from "@reduxjs/toolkit";
import { fetchImgSlider } from "../thunks/fetchImage";
import { addOrder } from "../thunks/order";
import { fetchOrders } from "../thunks/fetchOrder";
import { ResponseOrder } from "@/types/types";

const initialState: ResponseOrder = {
    data: [],
    loading: false,
    error: null,
}

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addOrder.fulfilled, (state, action) => {
      return action.payload;
    });

    builder
    .addCase(fetchOrders.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    })
    .addCase(fetchOrders.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    });
  },
});

export default orderSlice.reducer;
