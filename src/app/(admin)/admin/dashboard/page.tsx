"use client";
import Linechart from "@/components/Admin/Chart/Linechart";
import { RootState, useAppDispatch } from "@/store";
import { fetchOrders } from "@/store/thunks/fetchOrder";
import { convertVND } from "@/utils/convertToVND";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function DashboardPage() {
  const orders = useSelector((state: RootState) => state.orders.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOrders());
  }, []);
  console.log(orders);
  
  
function calculateTotal() {
  let totalAmount = 0;
  let totalReceiptStatus = 0;
  let totalQuantity = 0;
  let totalPaid = 0;
  let amountPaid = 0;

  for (const entry of orders) {
    totalAmount += entry.total_amount;
    if(entry.receipt_status === 1) {
      totalPaid += 1;
      amountPaid += entry.total_amount
    }
    totalReceiptStatus += entry.receipt_status;
  }

  return {
    totalAmount,
    totalReceiptStatus,
    totalQuantity,
    totalPaid,
    amountPaid
  };
}

const totals = calculateTotal();

  return (
    <div>
      {orders ? (
        <div className="flex w-full justify-around">
          <div className="bg-white-400 rounded-lg p-4 min-w-[400px] flex flex-col gap-4">
            <p className="text-3xl text-primary-100 text-bold">Orders</p>
            <span className="text-primary-200 text-xl">
              Total: {orders.length}
            </span>
            <span>Amount: {convertVND(totals.totalAmount)}</span>
          </div>

          <div className="bg-white-400 rounded-lg p-4 min-w-[400px] flex flex-col gap-4">
            <p className="text-3xl text-primary-100 text-bold">Income</p>
            <span className="text-primary-200 text-xl">Total: {convertVND(totals.totalAmount)}</span>
            <ul className="flex justify-between text-primary-200">
              <li className="flex flex-col"><span>Paid: {totals.totalPaid}</span> <span>Total: {convertVND(totals.amountPaid)}</span></li>
              <li className="flex flex-col"><span>Unpaid: {orders.length - totals.totalPaid}</span> <span>Total: {convertVND(totals.totalAmount - totals.amountPaid)}</span></li>
            </ul>
          </div>
        </div>
      ) : (
        <div> Loading...</div>
      )}
      <Linechart />
    </div>
  );
}
