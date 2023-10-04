'use client'
import { useEffect, useState } from "react";
import React from "react";
import TableUser from "@/components/Admin/TableUser";
import { useAppDispatch } from "@/store";
import { fetchCustomer } from "@/store/thunks/user";



function Customers() {
  const dispatch = useAppDispatch()
    useEffect(() => {
      dispatch(fetchCustomer())
    }, [])

  return (
    <div>
        <TableUser />
    </div>
  )
}

export default Customers;
