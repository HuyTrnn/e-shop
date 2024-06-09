import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchImgSlider = createAsyncThunk("slider/fetch", async () => {
  try {
    const response = await axios.get(
      "https://backpack-nu.vercel.app/api/sliders"
    );
    return response.data;
  } catch (error : any) {
    return error.message;
  }
});

export { fetchImgSlider };
