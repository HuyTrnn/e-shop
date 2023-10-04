import { RootState } from "@/store";
import { User } from "@/store/thunks/user";
import { UserDetail } from "@/types/types";
import { TablePagination } from "@mui/material";
import Link from "next/link";
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useSelector } from "react-redux";

export default function TablaUser() {
  const users = useSelector((state: RootState) => state.customer.data)
  const customers = [
    {
      id: "1",
      name: "Huy Trần",
      age: 18,
      address: "123 Hoàng Hoa Thám",
      phone_number: "09123435",
    },
    {
      id: "2",
      name: "Lê Khương",
      age: 18,
      address: "123 Hoàng Hoa Thám",
      phone_number: "09123435",
    },
  ];

  console.log(users);
  

  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold mb-10">List users</h2>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light border border-white-500">
              <thead className=" bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Address
                  </th>
                  {/* <th scope="col" className="px-6 py-4">
                    Age
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Phone number
                  </th> */}
                  <th scope="col" className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {!customers ? (
                  <span>Loading...</span>
                ) : (
                  users?.map((customer: UserDetail, index: number) => (
                    <tr
                      key={customer.id}
                      className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {customer.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span className="truncate">{customer.email}</span>
                      </td>
                      {/* <td className="whitespace-nowrap px-6 py-4">
                        {customer.age}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {customer.phone_number}
                      </td> */}

                      <td className="whitespace-nowrap px-6 py-4">
                        <span className="flex gap-3">
                          <AiOutlineEdit className="cursor-pointer" />{" "}
                          {/* <Link > */}
                          <BsFillTrash3Fill className="cursor-pointer" />
                          {/* </Link> */}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            {/* <TablePagination
            style={{ fontSize: "16px" }}
            component="div"
            count={customers.length}
            page={1}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
