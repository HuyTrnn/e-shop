import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface DataUser {
  email: string;
  password: string;
}

interface LoginResponse {
  token: any;
  access_token: null;

}

const loginToken = createAsyncThunk<LoginResponse, DataUser>(
  "auth/fetch",
  async (dataUser) => {
    try {
      const response = await axios.post(
       "http://blog.test:8080/api/login",
        dataUser,
        
      );
      return response.data;
    } catch (error: any) {
      throw Error(error.message);
    }
  }
);

export { loginToken };
