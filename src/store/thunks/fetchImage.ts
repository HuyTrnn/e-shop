import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchImgSlider = createAsyncThunk("slider/fetch", async () => {
  try {
    const response = await axios.get(
      "http://blog.test:8080/api/sliders"
    );
    return response.data;
  } catch (error : any) {
    return error.message;
  }
});

export { fetchImgSlider };
