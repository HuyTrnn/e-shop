"use client";
import FormRegister from "@/components/Form/FormRegister";
import React, { useState } from "react";

function RegisterPage() {
  return (
    <div className="bg-white shadow rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0 h-[100vh] mx-auto">
      <div className="p-6 w-full sm:p-8 lg:p-16 space-y-8 flex flex-col align-center texts-center justify-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Sign in to CAMELIA
        </h2>
        <FormRegister />
      </div>
    </div>
  );
}

export default RegisterPage;
