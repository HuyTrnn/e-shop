"use client";
import React, { SetStateAction, useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import FormSetting from "@/components/Form/FormSetting";
import { RootState, useAppDispatch } from "@/store";
import { fetchProductDetail } from "@/store/thunks/fetchProductDetail";
import { useSelector } from "react-redux";

export default function EditPage({ params }: { params: { slug: string } }) {
    const dispatch = useAppDispatch()
    const detail = useSelector((state: RootState) => state.productDetail.data)
    useLayoutEffect(() => {
        dispatch(fetchProductDetail(params.slug))
    }, [])

  return (
    <div className="bg-white-400 h-full flex justify-center items-center">
      <FormSetting data={detail}/>
    </div>
  );
}
