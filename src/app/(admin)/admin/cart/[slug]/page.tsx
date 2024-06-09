"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import img from "@/assets/imgs/img_instagram2.jpg";
import Image from "next/image";
import { AiOutlineEdit } from "react-icons/ai";
import { RootState, useAppDispatch } from "@/store";
import { fetchOrderDetail } from "@/store/thunks/orderDetail";
import { useSelector } from "react-redux";
import { convertVND } from "@/utils/convertToVND";
import { fetchDetailCustomer } from "@/store/thunks/user";
import { toast } from "react-toastify";
import Modal from "@/components/Modal";
export default function CartDetail({ params }: { params: { slug: number } }) {
  const dispatch = useAppDispatch();
  const [expand, setExpand] = useState(false)
  const detail = useSelector((state: RootState) => state.orders.detail);
  const users = useSelector((state: RootState) => state.customer.detail);
  const token = useSelector((state: RootState) => state.login.access_token);
  const [toggle, setToggle] = useState<boolean>(false)
  useEffect(() => {
    const getOrder = async () => {
      const res = await dispatch(fetchOrderDetail(params.slug))
        .unwrap()
        .then(() => {
          dispatch(fetchDetailCustomer(detail.user_id));
        });
    };
    getOrder();
  }, [dispatch, ]);

  const updateStatus = async (props: number) => {
    const res = await axios.put(
      `https://backpack-nu.vercel.app/api/receipts/${params.slug}`,
        props
      ,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: `application/json`,
          ContentType: "application/json",
        },
      }
    );
    res && toast.success("Update status success!")
  };


  const updateTest = async (props: number) => {
    const res = await axios.put(
      `https://backpack-nu.vercel.app/api/update-status/${params.slug}`,
        props
      ,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: `application/json`,
          ContentType: "application/json",
        },
      }
    );
    res && toast.success("Update status success!")
  };

  const deleteOrder = async () => {
    const res = await axios.delete(
      `https://backpack-nu.vercel.app/api/receipts/${params.slug}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: `application/json`,
          ContentType: "application/json",
        },
      }
    );
    res && toast.success("Delete status success!")
  };

  const handleToggle = (isOpen : boolean) => {
    setExpand(isOpen);
  }

  const show = () => {
    if(detail) {
      dispatch(fetchDetailCustomer(detail.user_id));
    }
  }


  return !detail ? (
    <div>Loading...</div>
  ) : (
    <>
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex gap-6">
            <div className="flex flex-col p-3  border-r border-primary-100">
              <p className="uppercase text-primary-200">ID:</p>
              <span
                className="text-primary-100"
                onClick={show}
              >{`#${detail.receipt_id}`}</span>
            </div>
            <div className="flex flex-col p-3  border-r border-primary-100">
              <p className="uppercase text-primary-200">Payment:</p>
              <span className="text-primary-100">{detail.receipt_status == 1 ? "Paid" : "UnPaid"}</span>
            </div>
            <div className="flex flex-col p-3  ">
              <p className="uppercase text-primary-200">Status:</p>
              <span className="text-primary-100">finish</span>
            </div>
          </div>
          <span className="text-sm text-primary-100">15/07/2022 07:46 CH</span>
        </div>
        <div>
          <div className="flex gap-5">
            <div className="relative">
              <button onClick={() => setToggle(!toggle)} className="p-3 bg-primary-100 rounded text-white-200 w-[120px] mt-5 float-right border border-primary-200 hover:bg-white-200 hover:text-primary-100">
                Status
              </button>
              {
                toggle && <ul className="absolute bottom-[-100px]">
                <li onClick={() => updateTest(1)}>
                  <button className="p-3 bg-primary-100 rounded text-white-200 w-[80px] float-right border border-primary-200 hover:bg-white-200 hover:text-primary-100">
                    Paid
                  </button>
                </li>
                <li onClick={() => updateTest(0)}>
                  <button className="p-3 bg-primary-100 rounded text-white-200 w-[80px] float-right border border-primary-200 hover:bg-white-200 hover:text-primary-100">
                    UnPaid
                  </button>
                </li>
              </ul>
              }
            </div>

            <button onClick={deleteOrder} className="p-3 bg-primary-100 rounded text-white-200 w-[120px] mt-5 float-right border border-primary-200 hover:bg-white-200 hover:text-primary-100">
              Delete
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-12">
        <div className="flex flex-col w-[75%] bg-white-200 p-4">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Products
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Totals
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {detail.order_detail.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700"
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-medium flex items-center gap-3">
                          <Image
                            alt="img"
                            src={item.image}
                            width={40}
                            height={40}
                          />
                          <span>{item.product_name}</span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.quantity}
                        </td>

                        <td className="whitespace-nowrap px-6 py-4">
                          {item.unit_price}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {convertVND(
                            (item.quantity as number) * item.unit_price
                          )}
                        </td>
                      </tr>
                    ))}

                    <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                      <td
                        colSpan={3}
                        className="whitespace-nowrap px-6 py-4 text-center"
                      >
                        Totals:
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {convertVND(detail.total_amount)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="basis-1/2">
              <input
                type="text"
                className="bg-white-600 p-5 rounded w-full"
                placeholder="note for bill..."
              />
              <button className="p-3 bg-primary-100 rounded text-white-200 w-[120px] mt-5 float-right border border-primary-200 hover:bg-white-200 hover:text-primary-100">
                Update
              </button>
            </div>
            <address className="basis-1/2 max-w-[50%] bg-white-600 p-5 rounded">
              <div className="flex justify-between text-primary-100">
                <h4 className="font-bold text-xl text-primary-100">
                  {" "}
                  Delivery information{" "}
                </h4>
                <button
                onClick={(e) => setExpand(true)}
                >
                  <AiOutlineEdit />
                </button>
              </div>

              <div className="text-primary-100 not-italic">
                <div>
                  <span>Receiver name : </span>
                  {detail.receiver_name}
                </div>
                <div>
                  <span>Phone number: </span>
                  <span>{detail.contact_number}</span>
                </div>
              </div>

              <div className="text-primary-100">
                <span>Delivery address:</span>
                <p className="text-primary-100 line-clamp-2">
                  {detail.specific_address}
                </p>
              </div>
            </address>
          </div>
        </div>
        <div className="w-[25%] bg-white-200 p-4 text-primary-100">
          {!users ? (
            <div>Loading...</div>
          ) : (
            <div className="">
              <div className="">
                <h3 className="font-bold text-black ">
                  {" "}
                  Ordering information{" "}
                </h3>
              </div>
              <hr className="w-full border border-primary-200/30 my-3"></hr>
              <div className="">
                <p> {users.name} </p>
                <p className="text-sm text-primary-200"> {users.email} </p>
                <div className="flex justify-between">
                  <span className="text-sm"> Đã đặt </span> <b> 3 đơn hàng </b>
                </div>
              </div>
              <hr className="w-full border border-primary-200/30 my-3"></hr>

              <div className="">
                <address>
                  <div className="flex justify-between">
                    <h4> Order information </h4>
                  </div>

                  <div className="">
                    <div> {users.name} </div>
                    <div> {users.phone} </div>
                  </div>
                  <div className="">
                    <h4> Địa chỉ giao hàng </h4>
                    <p> {users.address} </p>
                  </div>
                </address>
              </div>
              <hr className="w-full border border-primary-200/30 my-3"></hr>

              <div className="">
                <h4> Ghi chú về khách hàng </h4> <div> Giao đúng hẹn </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {expand && <Modal onToggle={handleToggle} detail={detail}/>}
    </>
  );
}
