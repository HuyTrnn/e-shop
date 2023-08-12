import { createSlice } from "@reduxjs/toolkit";
import { register } from "../thunks/register";

type registerState = {loading: boolean, error: any}

const registerSlice = createSlice({
  name: "register",
  initialState: {
    loading: false,
    error: null,
  } as registerState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default registerSlice.reducer;
