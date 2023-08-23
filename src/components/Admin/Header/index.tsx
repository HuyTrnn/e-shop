import React from "react";
import Image from "next/image";
import img from "@/assets/imgs/img_instagram3.jpg";
import Input from "@/components/Input";
import ButtonSearch from "@/components/Button";
import { usePathname, useRouter } from "next/navigation";
export default function HeaderAdmin() {
  const pathname = usePathname();
  const router = useRouter()
  const parts = pathname.split("/"); // Split the string at each '/'
  const resourceName = parts[parts.length - 1];
  const title = resourceName.charAt(0).toUpperCase() + resourceName.slice(1);

  function logout() {
    try {
        localStorage.clear();
        router.push('/')
        return true; // Indicate success
    } catch (error) {
        console.error("Error clearing localStorage:", error);
        return false; // Indicate failure
    }
}

  return (
    <div className="bg-white-600 h-[60px] ">
      <div className="px-8 flex justify-between h-full items-center">
        <div>
          <span className="text-primary-100 ">{title}</span>
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
              <span onClick={logout} className="text-xs text-primary-200 cursor-pointer hover:hoverColor">Log Out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
