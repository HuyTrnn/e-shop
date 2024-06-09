import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface DataUser {
  email: string;
  password: string;
  name: string;
}


const register = createAsyncThunk("register", async (dataUser : DataUser) => {
  try {
    const response = await axios.post(
      "https://backpack-nu.vercel.app/api/register-customer",
      dataUser,
    );
    return response.data;
  } catch (error:  any) {
    throw Error(error.message);
  }
});

export { register };
