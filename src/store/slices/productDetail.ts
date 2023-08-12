import { createSlice } from "@reduxjs/toolkit";
import { fetchProductDetail } from "../thunks/fetchProductDetail";

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductDetail.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProductDetail.pending, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchProductDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default productDetailSlice.reducer;
