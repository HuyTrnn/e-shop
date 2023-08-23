"use client";
import React, { useState } from "react";
import FormItem from "./formAdd";
import { ProductsDetail } from "@/types/types";

export default function FormSetting({ data }: { data?: ProductsDetail }) {
  const [file, setFile] = useState<any>();
  const onImageChange = (e: any) => {
    const [file] = e.target.files;
    setFile(URL.createObjectURL(file));
  };
  return (
    <>
      <div className="basis-1/2 h-full">
        {!data ? (
          !file && (
            <>
              <input onChange={onImageChange} type="file" />
              <img src={file} alt="" className="w-full block h-full" />
            </>
          )
        ) : (
          <img src={data?.product_images[0] || " "} alt="" className="w-full block h-[92%]" />
        )}
      </div>
      <div className="basis-1/2 flex justify-center items-center">
        <FormItem data={data} />
      </div>
    </>
  );
}
