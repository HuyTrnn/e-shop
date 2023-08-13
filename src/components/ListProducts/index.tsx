'use client'
import React, { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState, useAppDispatch } from "@/store";
import ProductTag from "../ProductTag/ProductTag";
import Title from "../Title";
import { usePathname } from "next/navigation";
interface Products {
  id: string;
  product_name: string;
  product_image: Array<string>;
  title: string;
  product_description: string;
  product_price: number;
  rating: any;
}

function ListItem({name} : {name: string}) {
  const { t } = useTranslation();

  const collection = useSelector((state: RootState) => state.collections)
  const dispatch = useAppDispatch();
  const pathname = usePathname()

  return (
    <div className={`w-full  px-20 ${pathname == "/" && "pt-12"}`}>
      <div className="w-full mb-8">
        <Title title={name}/>
        {!collection.length  ? (
          <div>Loading...</div>
        ) : (
          <div className="item-list grid px-7">
            <div className="item-list__product grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-7 gap-y-12">
              {collection.map((item : Products, index) => (
                <ProductTag key={index} item={item}  />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListItem;
