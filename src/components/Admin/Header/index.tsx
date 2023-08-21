import React from "react";
import Image from "next/image";
import img from "@/assets/imgs/img_instagram3.jpg";
import Input from "@/components/Input";
import ButtonSearch from "@/components/Button";
export default function HeaderAdmin() {
  return (
    <div className="bg-white-600 h-[60px] ">
      <div className="px-8 flex justify-between h-full items-center">
        <div>
          <span className="text-primary-100 ">Products</span>
        </div>

        <div className="flex justify-center items-center">
          <ButtonSearch className="rounded-lg w-[200px]" />
          <div className="flex gap-2 ml-4">
            <Image
              alt="admin"
              src={img}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-primary-200">Admin name</span>
              <span className="text-xs text-primary-200">Admin id</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
