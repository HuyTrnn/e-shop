import { createSlice } from "@reduxjs/toolkit";
import { fetchImgSlider } from "../thunks/fetchImage";

const sliderSlice = createSlice({
  name: "slider",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchImgSlider.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default sliderSlice.reducer;
