import { createSlice } from "@reduxjs/toolkit";
import { fetchImgSlider } from "../thunks/fetchImage";
import { addOrder } from "../thunks/order";
import { fetchOrders, fetchUserOrders } from "../thunks/fetchOrder";
import { ResponseOrder } from "@/types/types";
import { fetchOrderDetail } from "../thunks/orderDetail";

const initialState: ResponseOrder = {
    data: [],
    loading: false,
    error: null,
    detail: null,
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
    .addCase(fetchOrders.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

    builder
    .addCase(fetchOrderDetail.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchOrderDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.detail = action.payload;
      state.error = null;
    })
    .addCase(fetchOrderDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder
    .addCase(fetchUserOrders.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchUserOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    })
    .addCase(fetchUserOrders.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default orderSlice.reducer;
