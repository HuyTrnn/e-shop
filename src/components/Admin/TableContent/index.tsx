"use client";
import { RootState, useAppDispatch } from "@/store";
import { fetchOrders } from "@/store/thunks/fetchOrder";
import { fetchOrderDetail } from "@/store/thunks/orderDetail";
import { fetchDetailCustomer } from "@/store/thunks/user";
import { OrderResponse } from "@/types/types";
import { convertVND } from "@/utils/convertToVND";
import TablePagination from "@mui/material/TablePagination";
import { log } from "console";
import Link from "next/link";
import React, { ReactEventHandler, useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useSelector } from "react-redux";

export default function TableContent() {
  const orders = useSelector((state: RootState) => state.orders.data);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedProducts = orders.slice(startIndex, endIndex);
  const type = {
    1: "Đã Thanh toán",

    0: "Chưa thanh toán",
  };

  useEffect(() => {
    const fetchCart = async () => {
      await dispatch(fetchOrders());
    };
    fetchCart();
  }, [dispatch]);

 const getUsers = async (id:number) => {
  await dispatch(fetchOrderDetail(id));
 }
  

  function getTotalQuantity(orderDetails: any) {
    let totalQuantity = 0;

    for (const order of orderDetails) {
      totalQuantity += order.quantity;
    }

    return totalQuantity;
  }
  const handleChangePage = (event: ReactEventHandler, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light border border-white-500">
              <thead className=" bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Customer
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Products
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {!orders ? (
                  <span>Loading...</span>
                ) : (
                  displayedProducts.map((order: OrderResponse, index: number) => (
                    <tr
                      key={index}
                      className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span className="truncate">
                          {order.specific_address}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {order.receiver_name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {type[order.receipt_status as keyof typeof type]}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 flex items-center justify-center">
                        {getTotalQuantity(order.order_detail)}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {convertVND(order.total_amount)}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span className="flex gap-3">
                          <Link onClick={() =>fetchOrderDetail(order.receipt_id)} href={`/admin/cart/${order.receipt_id}`}><AiOutlineEdit className="cursor-pointer" /></Link>
                          <Link href={`/admin/cart/${order.id}`}>
                           <BsFillTrash3Fill className="cursor-pointer" />
                          </Link>
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <TablePagination
              style={{ fontSize: "16px" }}
              component="div"
              count={orders.length}
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
