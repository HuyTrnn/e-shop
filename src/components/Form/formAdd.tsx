"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import Button from "../Button";
import { useParams } from "next/navigation";
import { ProductsDetail } from "@/types/types";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const FormItem = ({ data }: { data?: ProductsDetail }) => {
  const token = useSelector((state: RootState) => state.login.access_token);
  const [file, setFile] = useState<any>();
  const onImageChange = (e: any) => {
    const [file] = e.target.files;
    setFile(URL.createObjectURL(file));
  };
  // type FormData = yup.InferType<typeof schema>;
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    // resolver: yupResolver(schema),
    mode: "onChange",
  });

  const type = {
    1: "Backpack",

    2: "Wallet",

    3: "Cross",

    4: "Tote",
  };

  useEffect(() => {
    if (data)
      Object.keys(data).map((item) =>
        setValue(item as keyof FormData, data[item as keyof typeof data])
      );
  }, [data]);

  const onSubmit = async (result: any) => {
    if (data) {
      await axios.put(`https://backpack-nu.vercel.app/api/products/${data.id}`, result, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: `application/json`,
          ContentType: "application/json",
        },
      });
    } else {
      await axios.post(`https://backpack-nu.vercel.app/api/products/`, result, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: `application/json`,
          ContentType: "application/json",
        },
      });
    }
  };

  return (
    <>
      <div className="basis-1/2 h-full">
        {!data ? (
          !file && (
            <>
              <input {...register("thumbnails")} type="file" />
              <img src={file} alt="" className="w-full block h-full" />
            </>
          )
        ) : (
          <img
            src={data?.product_images[0] || " "}
            alt=""
            className="w-full block h-[92%]"
          />
        )}
      </div>
      <div className="basis-1/2 flex justify-center items-center">
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
      </div>
    </>
  );
};

export default FormItem;
