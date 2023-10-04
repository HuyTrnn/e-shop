"use client";
import { RootState, useAppDispatch } from "@/store";
import { useRouter } from "next/navigation";
import React, { ReactEventHandler, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import img1 from "@/assets/imgs/img_instagram2.jpg";
import Link from "next/link";
import Input from "@/components/Input";
import ToggleButton from "@/components/Input/toggleInput";
import { province } from "@/components/Constants/arrayProvince";
import { useSelector } from "react-redux";
import Image from "next/image";
import { fetchCart } from "@/store/thunks/fetchCart";
import { convertVND } from "@/utils/convertToVND";
import { addOrder } from "@/store/thunks/order";
import { toast } from "react-toastify";
import { fetchUserOrders } from "@/store/thunks/fetchOrder";
import { OrderResponse } from "@/types/types";
import { fetchOrderDetail } from "@/store/thunks/orderDetail";
import { TablePagination } from "@mui/material";

export default function OrderHistory() {
  const dispatch = useAppDispatch();
  const bill = useSelector((state: RootState) => state.orders.data);
  const token = useSelector((state: RootState) => state.login.access_token);
  const router = useRouter();
  useEffect(() => {
    dispatch(fetchUserOrders());
  }, [dispatch]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedProducts = bill.slice(startIndex, endIndex);
  const type = {
    1: "Đã Thanh toán",

    0: "Chưa thanh toán",
  };
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
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };

  return (
    <div className="m-auto flex max-w-[1200px] bg-white-200 h-fit">
      {token ? <div></div> : <div>Login to continue</div>}
      <div className="px-6 flex flex-col gap-4 ">
        <div>
          <h2 className="text-[32px] text-primary-100 uppercase mt-5 mb-[15px]">
            Orders history
          </h2>
        </div>
        <div className="flex flex-col gap-5">
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
                  Receiver
                </th>

                <th scope="col" className="px-6 py-4">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {!bill ? (
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
                      <span className="truncate">{order.specific_address}</span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {order.receiver_name}
                    </td>

                    <td className="whitespace-nowrap px-6 py-4">
                      {convertVND(order.total_amount)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <TablePagination
            style={{ fontSize: "16px" }}
            component="div"
            count={bill.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
    </div>
  );
}
