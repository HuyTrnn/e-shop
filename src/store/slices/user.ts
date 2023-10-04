import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../thunks/fetchProducts";
import {
  fetchCustomer,
  fetchDetailCustomer,
  updateDetailCustomer,
} from "../thunks/user";
import { CustomerResponse } from "@/types/types";

const initialState: CustomerResponse = {
  message: "",
  data: [
    {
      id: "",
      name: "",
      phone: 0,
      address: "",
      email: "",
      is_admin: 0,
      created_at: "",
      updated_at: "",
    },
  ],
  detail : {
    id: "",
    name: "",
    phone: 0,
    address: "",
    email: "",
    is_admin: 0,
    created_at: "",
    updated_at: "",
  },
};

const CustomerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCustomer.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(fetchDetailCustomer.fulfilled, (state, action) => {
      state.detail = action.payload;
    });

    builder.addCase(updateDetailCustomer.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default CustomerSlice.reducer;
