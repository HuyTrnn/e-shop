import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchCollection = createAsyncThunk(
  "colectionDetail/fetchColection",
  async (types : string) => {
    try {
      const response = await axios.get(
        `https://backpack-nu.vercel.app/api/types/${types}`
      );
      return response.data;
    } catch (error: any) {
      throw Error(error.message);
    }
  }
);

export { fetchCollection };
