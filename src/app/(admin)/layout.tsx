"use client";
import HeaderAdmin from "@/components/Admin/Header";
import Sidebar from "@/components/sidebar";
import React, { useState } from "react";

export default function Layoutadmin({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="">
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">

          <main className="">
            <HeaderAdmin/>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 h-screen bg-white-600">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
