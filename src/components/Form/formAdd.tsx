"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import Button from "../Button";
import { useParams } from "next/navigation";
import { ProductsDetail } from "@/types/types";

const FormItem = ({ data }: { data?: ProductsDetail }) => {
  const schema = yup.object({
    email: yup
      .string()
      .email("Incorrect email format")
      .required("Please enter your email")
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, "This field is invalid"),
    username: yup
      .string()
      .required("Please enter your username")
      .min(6, "Length from 6 - 160 characters"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(6, "This field must be at least 6 characters")
      .max(160, "Length from 6 - 160 characters"),

    firstName: yup
      .string()
      .required("Please enter your first name")
      .min(6, "This field must be at least 6 characters")
      .max(160, "Length from 6 - 160 characters"),
    gender: yup.string().required(),
    check: yup.boolean().required(),
  });

  type FormData = yup.InferType<typeof schema>;
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    if (data)
      Object.keys(data).map((item) =>
        setValue(item as keyof FormData, data[item as keyof typeof data])
      );
  }, [data]);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <div className="dark:bg-dark-300 w-full bg-white dark:shadow-insetLg shadow-light-100 py-[35px] lg:px-[55px] px-4 w-[505px] dark:text-white text-grey-100 ">
        <h2 className="mb-5 text-3xl dark:text-white text-dark-100">
          Form Change
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-primary-100 mt-4 w-full px-4 flex flex-col gap-4"
        >
          <div className="relative mt-4 flex w-full form-group border-r border-">
            <Input
              label="Product name"
              type="text"
              register={register}
              name="product_name"
              watch={watch}
              className="block w-full px-1 py-1 pb-1 text-base bg-transparent bg-center bg-no-repeat border-transparent focus:border-none focus:outline-none "
            />
            <Input
              label="Quantity"
              type="number"
              register={register}
              name="product_stock"
              watch={watch}
              className="block w-full px-1 py-1 pb-1 text-base bg-transparent bg-center bg-no-repeat border-transparent focus:border-none focus:outline-none "
            />
          </div>
          <div className="relative flex w-full form-group border-r border-">
            <Input
              label="Type"
              type="text"
              register={register}
              name="product_type"
              watch={watch}
              className="block w-full px-1 py-1 pb-1 text-base bg-transparent bg-center bg-no-repeat border-transparent focus:border-none focus:outline-none "
            />
            <Input
              label="Price"
              type="number"
              register={register}
              name="product_price"
              watch={watch}
              className="block w-full px-1 py-1 pb-1 text-base bg-transparent bg-center bg-no-repeat border-transparent focus:border-none focus:outline-none "
            />
          </div>
          <hr className="bg-black text-black border-slate-500 opacity-40 border-t-[0.5px] w-full"></hr>
          <Input
            label="Introduce"
            type="text"
            register={register}
            name="introduce"
            watch={watch}
            className="block w-full px-1 py-1 pb-1 text-base bg-transparent truncate bg-center bg-no-repeat border-transparent focus:border-none focus:outline-none "
          />
          <hr className="bg-black text-black border-slate-500 opacity-40 border-t-[0.5px] w-full"></hr>

          <Input
            label="Material"
            type="text"
            register={register}
            name="material"
            watch={watch}
            className="block w-full px-1 py-1 pb-1 text-base bg-transparent bg-center bg-no-repeat border-transparent focus:border-none focus:outline-none "
          />
          <hr className="bg-black text-black border-slate-500 opacity-40 border-t-[0.5px] w-full"></hr>

          <div className="relative flex w-full form-group border-r border-">
            <Input
              label="Size"
              type="text"
              register={register}
              name="size"
              watch={watch}
              className="block w-full px-1 py-1 pb-1 text-base bg-transparent bg-center bg-no-repeat border-transparent focus:border-none focus:outline-none "
            />
            <Input
              label="Contain"
              type="text"
              register={register}
              name="contain"
              watch={watch}
              className="block w-full px-1 py-1 pb-1 text-base bg-transparent bg-center bg-no-repeat border-transparent focus:border-none focus:outline-none "
            />
          </div>
          <Input
            label="Other"
            type="text"
            register={register}
            name="other"
            watch={watch}
            className="block w-full px-1 py-1 pb-1 text-base bg-transparent bg-center bg-no-repeat border-transparent focus:border-none focus:outline-none "
          />
          <hr className="bg-black text-black border-slate-500 opacity-40 border-t-[0.5px] w-full"></hr>

          <div className="flex gap-2 justify-end w-full my-4 ">
            <button
              type="submit"
              className="py-0 mt-3 hover:bg-white-600 hover:text-primary-100 text-white-200 rounded-lg h-10  text-2xl border bg-primary-100 border-none hover:shadow-[3px_3px_5px_0px_rgba(0,0,0,0.35)] cursor-pointer lg:py-2 lg:text-base elative bg-primary px-9 hover:bg-transparent hover:border-grey-200 hover:text-primary"
            >
              Change
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormItem;
