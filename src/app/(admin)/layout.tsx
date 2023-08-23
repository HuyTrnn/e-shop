"use client";
import { getAuth } from "@/apis/auth";
import HeaderAdmin from "@/components/Admin/Header";
import { RootState } from "@/store";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import Sidebar from "@/components/sidebar";
import { useSelector } from "react-redux";

export default function Layoutadmin({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isAdmin = useSelector((state: RootState) => state.login.isAdmin);
  const router = useRouter();
  const pathname = usePathname();
  useLayoutEffect(() => {
    if (isAdmin) {
      router.push("/admin/dashboard");
    } else {
      router.push("/");
    }
  }, []);

  return (
    <div className="">
      <div className="flex h-screen overflow-hidden">
        {isAdmin && <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <main className="">
            {isAdmin && <HeaderAdmin />}
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 h-screen bg-white-600">
              {isAdmin ? (
                children
              ) : (
                // <div className="text-center error-content">
                //   <h1 className="text-[100px] mb-0 capitalize font-bold text-dark-100 ">
                //     Whoops!
                //   </h1>
                //   <p className="inline-block w-full text-base text-center capitalize text-dark-400">
                //     we couldn&apos;t find that page
                //   </p>
                //   <Link
                //     href="/"
                //     className="bg-primary text-light-100 inline-block mt-[30px] py-2 px-8 rounded-md capitalize"
                //   >
                //     go back to home
                //   </Link>
                // </div>
                <></>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
