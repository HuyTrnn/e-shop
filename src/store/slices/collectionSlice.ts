import { createSlice } from "@reduxjs/toolkit";
import { fetchCollection } from "../thunks/collectionByType";

const collectionSlice = createSlice({
  name: "colection",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCollection.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default collectionSlice.reducer;
