"use client";
import { ProductsDetail } from "@/types/types";
import React, { ReactEventHandler, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import TablePagination from "@mui/material/TablePagination";
import { BsFillTrash3Fill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function TableData({ data }: { data: any }) {
  const [page, setPage] = useState(0);
  const token = useSelector((state: RootState) => state.login.access_token);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedProducts = data.slice(startIndex, endIndex);
  const type = {
    1: "Backpack",

    2: "Wallet",

    3: "Cross",

    4: "Tote",
  };

  const handleChangePage = (event: ReactEventHandler, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = async (id: number) => {
    try {
       const response = await axios.delete(`https://backpack-nu.vercel.app/api/products/${id}`,
       {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: `application/json`,
          ContentType: "application/json",
        },
      });
      response && window.confirm("You will delete this product!")
      window.location.reload();
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full w-full table-fixed text-left text-sm font-light border border-white-500">
              <thead className=" bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" className="px-6 w-[3%] py-4">
                    Id
                  </th>
                  <th scope="col" className="px-6 w-[20%] py-4">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-4 w-[38%]">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Stock
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {displayedProducts.map(
                  (item: ProductsDetail, index: number) => (
                    <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {item.id}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Image
                            alt=""
                            src={item.product_images[1]}
                            width={40}
                            height={40}
                          />
                          {item.product_name}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="truncate">{item.introduce}</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {type[item.product_type as keyof typeof type]}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.product_stock}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.product_price}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex gap-3">
                          <Link href={`/admin/edit/${item.id}`}>
                            <AiOutlineEdit className="cursor-pointer hover:text-hoverColor" />
                          </Link>
                          <BsFillTrash3Fill onClick={() => handleDelete(Number(item.id))} className="cursor-pointer  hover:text-hoverColor" />
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
            <TablePagination
              style={{ fontSize: "16px" }}

              count={data.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
