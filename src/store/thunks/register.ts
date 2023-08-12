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
      "http://blog.test:8080/api/register",
      dataUser,
    );
    return response.data;
  } catch (error:  any) {
    throw Error(error.message);
  }
});

export { register };
