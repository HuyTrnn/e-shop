import { createSlice } from "@reduxjs/toolkit";
import { fetchProductDetail } from "../thunks/fetchProductDetail";
import { ProductsDetail } from "@/types/types";

interface DetailTypes {
  data: ProductsDetail;
  loading: boolean;
  error: any;
}

export const initialState: DetailTypes = {
  data: {
    product_name: "",
    id: "",
    product_images: [],
    title: "",
    contain: '',
    other: '',
    introduce: "",
    product_stock: 0,
    product_price: 0,
    size : "",
    material: '',
    product_description: "",
    rating: "",
  },
  loading:  false,
  error: null,
};

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
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
