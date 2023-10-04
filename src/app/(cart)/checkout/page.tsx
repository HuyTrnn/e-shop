"use client";
import { RootState, useAppDispatch } from "@/store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
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

export default function Checkout() {
  const { prefetch } = useRouter();
  const dispatch = useAppDispatch();
  const bill = useSelector((state: RootState) => state.bill.cartData);
  const [check, setCheck] = useState();
  const router = useRouter();
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data: any) => {
    const detail = {
      cart_id: bill.id,
      user_id: bill.user_id,
      receiver_name: getValues("name"),
      contact_number: getValues("phone"),
      specific_address: `${
        getValues("address") +
        " " +
        "phường" +
        " " +
        getValues("district") +
        " " +
        getValues("city") +
        " " +
        getValues("province")
      }`,
    };
    dispatch(addOrder(detail)).then(() => {
      toast.success("Order Success!");
      router.push("/");
    });
  };

  return (
    <div className="m-auto flex max-w-[1200px] bg-white-200 h-screen">
      <div className="px-8 flex flex-col border-r-2 h-full basis-1/2">
        <div>
          <h2 className="text-[32px] uppercase mt-5 mb-[15px]">Checkout</h2>
        </div>
        <div className="flex flex-col gap-6">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="flex flex-col text-dark-200 form-group">
              <Input
                label="Your name"
                type="text"
                register={register}
                name="name"
                watch={watch}
                className="block w-full px-1 py-1 pb-1 text-base bg-transparent bg-center bg-no-repeat border-transparent text-dark-200 focus:border-none focus:outline-none "
              />
              {/* <p className="pl-2 my-0 mb-2 text-red-500">
                {errors.email?.message}
              </p> */}
            </div>
            <div className="flex mt-[15px] text-dark-200 form-group">
              <Input
                label="Email(not required)"
                register={register}
                name="email"
                type="text"
                watch={watch}
                className="block w-full px-1 py-1 pb-1 text-base bg-transparent bg-center bg-no-repeat border-transparent text-dark-200 focus:border-none focus:outline-none "
              />
              {/* <p className="pl-2 my-0 mb-2 text-red-500">
                {errors.password?.message}
              </p> */}
              <Input
                label="Phone number"
                register={register}
                name="phone"
                type="number"
                watch={watch}
                className="block w-full px-1 py-1 pb-1 text-base bg-transparent bg-center bg-no-repeat border-transparent text-dark-200 focus:border-none focus:outline-none "
              />
            </div>

            <div className="flex flex-col mt-[15px] text-dark-200 form-group">
              <Input
                label="Your Address"
                register={register}
                name="address"
                type="text"
                watch={watch}
                className="block w-full px-1 py-1 pb-1 text-base bg-transparent bg-center bg-no-repeat border-transparent text-dark-200 focus:border-none focus:outline-none "
              />
            </div>

            <div className="flex flex-col mt-4 gap-4">
              <div className="flex">
                <Input
                  label="City..."
                  register={register}
                  name="city"
                  type="text"
                  watch={watch}
                  className="block w-full px-1 py-1 pb-1 text-base bg-transparent bg-center bg-no-repeat border-transparent text-dark-200 focus:border-none focus:outline-none "
                />
                <Input
                  label="District..."
                  register={register}
                  name="district"
                  type="text"
                  watch={watch}
                  className="block w-full px-1 py-1 pb-1 text-base bg-transparent bg-center bg-no-repeat border-transparent text-dark-200 focus:border-none focus:outline-none "
                />
              </div>
              <ToggleButton
                type="province"
                data={province}
                register={register}
                watch={watch}
                setValue={setValue}
              />
            </div>

            <div className="flex gap-3 justify-between mt-10">
              <Link href="/">
                <span className="text-sm text-primary-100 hover:underline cursor-pointer">
                  Continue buy
                </span>
              </Link>
              <button
                type="submit"
                className="py-0 text-xl h-14 rounded-lg border bg-primary-100 flex justify-center items-center border-none hover:shadow-[3px_3px_5px_0px_rgba(0,0,0,0.35)] cursor-pointer lg:py-2 lg:text-base elative px-9 hover:bg-white-200 hover:border-primary-100 hover:text-primary-100"
              >
                Purchase
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="basis-1/2 px-6 flex flex-col gap-4 ">
        <div>
          <h2 className="text-[32px] uppercase mt-5 mb-[15px]">Detail</h2>
        </div>
        {!bill ? (
          <div className="flex justify-center items-center w-[200px]">
            Không có sản phẩm nào
          </div>
        ) : (
          bill.items.map((item, index) => (
            <>
              <div key={item.cart_detail_id}>
                <div key={index} className="flex justify-between">
                  <div className="flex gap-4">
                    <Image
                      alt="product-img"
                      src={item.image}
                      width={64}
                      height={64}
                    />
                    <div className="flex flex-col">
                      <span className="text-black">{item.product_name}</span>
                      <span className="text-primary-200">
                        Quantity: {item.quantity}
                      </span>
                    </div>
                  </div>
                  <span>{convertVND(item.total_price)}</span>
                </div>
              </div>
            </>
          ))
        )}
        <i className="mtrl-select"></i>
        <div className="self-start w-full text-primary-200">
          <div className="flex justify-between mt-[14px]">
            <span>Bill</span>
            <span>{convertVND(bill.total_price)}</span>
          </div>
          <div className="flex justify-between mt-[14px]">
            <span>Ship fee</span>
            <span>0đ</span>
          </div>
        </div>
        <i className="mtrl-select"></i>
        <div className="flex justify-between">
          <span className="text-base text-black">Total:</span>
          <div className="flex justify-center">
            <span className="text-primary-200 opacity-80 flex mr-2 justify-center items-center text-sm">
              VND
            </span>
            <span className="text-xl text-bold">
              {convertVND(bill.total_price)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
