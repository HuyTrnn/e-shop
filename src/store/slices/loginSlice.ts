import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loginToken } from "../thunks/login";

interface LoginState {
  loading: boolean;
  error: any;
  access_token: any;
  isAuthenticated: boolean;
  isOpen: boolean,
}

const initialState: LoginState = {
  loading: false,
  error: null,
  access_token: null,
  isAuthenticated: false,
  isOpen: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginToken.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.access_token = null;
      })
      .addCase(loginToken.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.isAuthenticated = true;
        state.access_token = action.payload.token;
      })
      .addCase(loginToken.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.access_token = null;
      });
  },
});


export default loginSlice.reducer;