"use client";
import React, { useState } from "react";
import FormItem from "./formAdd";
import { ProductsDetail } from "@/types/types";

export default function FormSetting({ data }: { data?: ProductsDetail }) {
  
 
  return (
    <>
      
        <FormItem data={data} />

    </>
  );
}
