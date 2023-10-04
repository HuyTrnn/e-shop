"use client";
import React, { SetStateAction, useState } from "react";
import Image from "next/image";
import FormSetting from "@/components/Form/FormSetting";
import { usePathname } from "next/navigation";
import FormRegister from "@/components/Form/FormRegister";
export default function AddPage() {
 const pathname = usePathname()
  return (
    <div className="bg-white-400 h-full flex justify-center items-center">
      {pathname === '/admin/add/account' ? <FormRegister/> :  <FormSetting/>}
    </div>
  );
}
