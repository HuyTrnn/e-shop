"use client";
import TableData from "@/components/Admin/Table";
import ButtonSearch from "@/components/Button";
import CardDataStats from "@/components/Card/CardDataStat";
import React from "react";

export default function ProductsAdmin() {
  return (
    <div className="bg-white-600 h-full">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold ">List products</h2>
        <div className="flex gap-6">
          <button className="bg-primary-100 hover:bg-hoverColor rounded-lg text-white-200 h-12 w-[200px]">
            Thao tác
          </button>
          <button className="bg-primary-100 hover:bg-hoverColor rounded-lg text-white-200 h-12 w-[200px]">
            Thêm sản phẩm
          </button>
        </div>
      </div>
      <div className="bg-white-400 mt-10 py-8">
        <div className="flex items-center w-full px-8 mb-6">
          <ButtonSearch className="w-full" />
        </div>
        <div className="border">
          <TableData />
        </div>
      </div>
    </div>
  );
}
