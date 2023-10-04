"use client";
import React from "react";
import Input from "../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { toast } from "react-toastify";

type Inputs = {
  receiver_name: string;
  contact_number: string;
  specific_address: string;
};
export default function Modal({ detail, onToggle }: { detail?: any, onToggle: any }) {
  const token = useSelector((state: RootState) => state.login.access_token);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await axios.put(
        `http://blog.test:8080/api/receipts/${detail.receipt_id}`,
        data
        ,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: `application/json`,
            ContentType: "application/json",
          },
        }
      );
      res && toast.success("Update status success!")
  };

  const handleClose = () => {
    onToggle(false);
  }
  return (
    <div className="relative">
      <div className="bg-black/30 fixed top-0 bottom-0 right-0 left-0">
        <div className="absolute min-h-[400px] top-[27%] left-[50%] rounded w-[400px] bg-white-200 z-50">
          <div className="p-5">
            <div className="flex justify-between  mb-8">
            <h2 className="text-primary-100 text-xl font-bold">
              Change Delivery Info
            </h2>
            <span className="cursor-pointer" onClick={handleClose}>X</span>
            </div>
            <form
              className="flex flex-col gap-5"
              onSubmit={handleSubmit(onSubmit)}
            >
             <div className="flex flex-col">
                <label className="text-primary-100">Receiver name</label>
                <input
                type="text"
                className="bg-white-600 p-2 rounded-lg"
                defaultValue={`${detail.receiver_name}`}
                {...register("receiver_name")}
              />
             </div>
             <div className="flex flex-col">
                <label className="text-primary-100">Phone number</label>
                <input
                type="text"
                className="bg-white-600 p-2 rounded-lg"
                defaultValue={`${detail.contact_number}`}
                {...register("contact_number")}
              />
             </div>
             <div className="flex flex-col">
                <label className="text-primary-100">Address</label>
                <textarea
                className="bg-white-600 p-2 rounded-lg"
                defaultValue={`${detail.specific_address}`}
                {...register("specific_address")}
              />
             </div>
               
               
              <button className="p-3 bg-primary-100 float-right self-end  rounded text-white-200 w-[120px] float-right border border-primary-200 hover:bg-white-200 hover:text-primary-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
