import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import axios from "axios";
import { CustomerResponse, UserDetail } from "@/types/types";

 export interface User {
    id?: number;
    name: string;
    email: string;
    phone?: string;
}


const updateDetailCustomer = createAsyncThunk<any, {detail : User}>(
  "customer/update-customer",
  async ({detail}, thunkAPI) => {
    const { id, ...requestBody } = detail;
    const state = thunkAPI.getState() as RootState;
    const { access_token } = state.login;
    try {
      const response = await axios.put(
        `http://blog.test:8080/api/users/${detail.id}`,
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            Accept: `application/json`,
            ContentType: "application/json",
          },
        }
      );
      return response.data;
    } catch (error: any) {
      throw Error(error.message);
    }
  }
);

const fetchDetailCustomer = createAsyncThunk<UserDetail, number>(
  "customer/detail-customer",
  async (id: number, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const { access_token } = state.login;
    try {
      const response = await axios.get(
        `http://blog.test:8080/api/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            Accept: `application/json`,
            ContentType: "application/json",
          },
        }
      );
      return response.data;
    } catch (error: any) {
      throw Error(error.message);
    }
  }
);


const fetchCustomer = createAsyncThunk(
    "customer/fetch-customer",
    async (_, thunkAPI) => {
      const state = thunkAPI.getState() as RootState;
      const { access_token } = state.login;
      try {
        const response = await axios.get(
          "http://blog.test:8080/api/users",
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
              Accept: `application/json`,
              ContentType: "application/json",
            },
          }
        );
        return response.data;
      } catch (error: any) {
        throw Error(error.message);
      }
    }
  );

  export {fetchCustomer, fetchDetailCustomer, updateDetailCustomer}