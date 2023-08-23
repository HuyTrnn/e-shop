"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import { removeItem, clearItems } from "../../store/slices/cartSlice";
import { convertToNumber } from "@/utils/convertNumber";
import { RootState, useAppDispatch } from "@/store";
import { fetchCart } from "@/store/thunks/fetchCart";
import { convertVND } from "@/utils/convertToVND";
import axios from "axios";
import Link from "next/link";
// import { convertToNumber } from "../../utils/numberUtils";

function Bill({ toggle, onBill }: { toggle: boolean; onBill: any }) {
  const bill = useSelector((state: RootState) => state.bill.cartData);
  const token = useSelector((state: RootState) => state.login.access_token);
  const dispatch = useAppDispatch();

  function back() {
    onBill(false);
  }

  async function handleDelete(id: number) {
    const response = await axios.delete(
      `http://blog.test:8080/api/delete-item/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: `application/json`,
          ContentType: "application/json",
        },
      }
    );
    dispatch(fetchCart());
  }

  async function handleClear() {}

  const ListItem = () => {
    return (
      <React.Fragment>
        {!bill.items ? (
          <div className="flex justify-center items-center w-[200px]">
            Cart is empty...
          </div>
        ) : (
          bill.items.map((item, index) => (
            <tr
              key={index}
              className="text-sm sm:text-base text-gray-600 text-center"
            >
              <td className="font-primary font-medium px-4 sm:px-6 py-4 flex items-center">
                <img
                  src={item.image}
                  alt="test-text"
                  height="40"
                  width="40"
                  className="hidden sm:inline-flex rounded-md mr-3"
                />
                <a
                  className="pt-1 max-w-[198px] hover:text-palette-dark truncate max-h-[80px]"
                  href="/products/the-unicorn"
                >
                  {item.product_name}
                </a>
              </td>
              <td className="font-primary font-medium px-4 sm:px-6 py-4">
                <span>{convertToNumber(item.quantity)}</span>
              </td>
              <td className="font-primary text-base font-light  sm:px-6 py-4 hidden sm:table-cell">
                <span className="text-lg"> {convertVND(item.total_price)}</span>
              </td>
              <td className="font-primary font-medium px-4 sm:px-6 py-4">
                <button
                  onClick={() => handleDelete(item.cart_detail_id)}
                  className=""
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="times"
                    className="svg-inline--fa fa-times fa-w-11 w-8 h-8 text-palette-primary border border-palette-primary p-1 hover:bg-palette-lighter"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 352 512"
                  >
                    <path
                      fill="currentColor"
                      d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                    ></path>
                  </svg>
                </button>
              </td>
            </tr>
          ))
        )}
      </React.Fragment>
    );
  };

  const Detail = () => {
    return (
      <div
        id="bill"
        className="container flex fixed top-0 right-0   mx-auto mb-20 min-w-[100vw] min-h-screen z-50 transition ease-in-out delay-150"
      >
        <div
          onClick={back}
          className="overlay w-full opacity-50 bg-white-800 z-50 transition ease-in-out delay-150"
        ></div>

        <div className="w-fit max-w-[600px] h-full min-h-[100vh] float-right z-50 bg-white-200 transition ease-in-out delay-150">
          <h1 className="leading-relaxed font-primary font-extrabold text-4xl text-center text-palette-primary mt-4 py-2 sm:py-4">
            Your Cart
          </h1>
          <div className="min-h-80 max-w-2xl my-4 sm:my-8 mx-auto w-full">
            <div className="float-right">
              <button onClick={() => handleClear()}>Clear</button>
            </div>
            <table className="mx-auto">
              <thead>
                <tr className="uppercase text-xs sm:text-sm text-palette-primary border-b border-palette-light">
                  <th className="font-primary font-normal px-6 py-4">
                    Product
                  </th>
                  <th className="font-primary font-normal px-6 py-4">
                    Quantity
                  </th>
                  <th className="font-primary font-normal px-6 py-4 hidden sm:table-cell">
                    Price
                  </th>
                  <th className="font-primary font-normal px-6 py-4">Remove</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-palette-lighter">
                <ListItem />
                <tr className="text-center">
                  <td></td>
                  <td className="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">
                    Subtotal
                  </td>
                  <td className="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
                    <span className="text-xl">
                      {" "}
                      {convertVND(bill.total_price) || "0"}
                    </span>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="max-w-sm mx-auto space-y-4 px-2">
            <Link
              href="/checkout"
              aria-label="checkout-products"
              className="bg-hoverColor text-white text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex  justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-dark rounded-sm"
            >
              Check Out
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-right"
                className="svg-inline--fa fa-arrow-right fa-w-14 w-4 ml-2 inline-flex"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                ></path>
              </svg>
            </Link>
            <button
              onClick={back}
              aria-label="back-to-products"
              className="border border-palette-primary text-palette-primary text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex  justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-lighter rounded-sm"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-left"
                className="svg-inline--fa fa-arrow-left fa-w-14 w-4 mr-2 inline-flex"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
                ></path>
              </svg>
              Back To All Products
            </button>
          </div>
        </div>
      </div>
    );
  };

  return token ? (
    <Detail />
  ) : (
    <div
      id="bill"
      className="container flex fixed top-0 right-0   mx-auto mb-20 min-w-[100vw] min-h-screen z-50 transition ease-in-out delay-150"
    >
      <div
        onClick={back}
        className="overlay w-full opacity-50 bg-white-800 z-50 transition ease-in-out delay-150"
      ></div>

      <div className="w-fit max-w-[600px] h-full min-h-[100vh] float-right z-50 bg-white-200 transition ease-in-out delay-150">
        <Link href="/login">
          <h1 className="leading-relaxed cursor-pointer font-primary font-extrabold text-4xl text-center text-primary-100 mt-4 py-2 sm:py-4">
            Please login to continue...
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default Bill;
