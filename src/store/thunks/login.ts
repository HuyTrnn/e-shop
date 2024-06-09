import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface DataUser {
  email: string;
  password: string;
}

interface LoginResponse {
  token: any;
  access_token: null;
  is_admin: boolean;
}

const loginToken = createAsyncThunk<LoginResponse, DataUser>(
  "auth/fetch",
  async (dataUser) => {
    try {
      const response = await axios.post(
       "https://backpack-nu.vercel.app/api/login",
        dataUser,
        
      );
      return response.data;
    } catch (error: any) {
      throw Error(error.message);
    }
  }
);

export { loginToken };
