import { createSlice } from "@reduxjs/toolkit";
import { addToCart } from "../thunks/addToCart";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        // state.items.push(action.payload);
      })
      .addCase(addToCart.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default cartSlice.reducer;
