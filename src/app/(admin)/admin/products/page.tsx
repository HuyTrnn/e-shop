"use client";
import TableData from "@/components/Admin/Table";
import ButtonSearch from "@/components/Button";
import CardDataStats from "@/components/Card/CardDataStat";
import { RootState, useAppDispatch } from "@/store";
import { fetchProducts } from "@/store/thunks/fetchProducts";
import Link from "next/link";
import React, { useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";

export default function ProductsAdmin() {
  const dispatch = useAppDispatch();
  const data = useSelector((state: RootState) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="bg-white-600 h-full">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold ">List products</h2>
        <div className="flex gap-6">
          <button className="bg-primary-100 hover:bg-hoverColor rounded-lg text-white-200 h-12 w-[200px]">
            Thao tác
          </button>
          <button className="bg-primary-100 hover:bg-hoverColor rounded-lg text-white-200 h-12 w-[200px]">
            <Link href="/admin/add/product">Thêm sản phẩm</Link>
          </button>
        </div>
      </div>
      <div className="bg-white-400 mt-10 py-8">
        <div className="flex items-center w-full px-8 mb-6">
          <input
            className={`h-10 w-48 rounded px-2.5 py-2.5 w-full`}
            type="text"
            placeholder="Type name of product"
          />
          <button className="bg-primary-100 w-10 h-10 rounded">
            <FiSearch className="mx-auto text-white-200 text-lg" />
          </button>
        </div>
        <div className="border">
          <TableData data={data} />
        </div>
      </div>
    </div>
  );
}
