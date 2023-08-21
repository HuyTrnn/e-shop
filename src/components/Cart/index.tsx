"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchProductDetail } from "../../store/thunks/fetchProductDetail";
import Slider from "../../components/Slider";
import { ProductsDetail } from "@/types/types";
import { addToCart } from "@/store/thunks/addToCart";
import { RootState, useAppDispatch } from "@/store";
import axios from "axios";

const CartPage = function ({ data }: { data: ProductsDetail }) {
  const [quantity, setQuantity] = useState<string>();
  const detail = useSelector((state: RootState) => state.productDetail.data);
  const token = useSelector((state: RootState) => state.login.access_token)
  const dispatch = useAppDispatch();
  const cart = useSelector((state: RootState) => state.addToCart)
  const addItem = () => {
    let itemData = {
      quantity: quantity,
      productId: detail.id,
    };
    dispatch(addToCart(itemData))
  };

  const loading = true;

  const ItemHeading = () => {
    return (
      <>
        <div className=" h-[60px] border-b border-b-white-800 h-fit">
          <h2 className="font-semibold text-4xl whitespace-wrap uppercase">
            {detail.product_name}
          </h2>
        </div>
        <div className="py-5 flex text-2xl font-bold text-hoverColor">
          <span>{detail.product_price}đ</span>
        </div>
      </>
    );
  };

  const ItemInfo = () => {
    return (
      <ul className="text-left list-disc ml-6">
        <li>{detail.size}</li>
        <li>{detail.material}</li>
        <li>{detail.contain}</li>
        <li>{detail.other}</li>
        <li>Nhiều ngăn nhỏ tiện lợi phía trong balo</li>
      </ul>
    );
  };

  const AddBTn = () => {
    return (
      <div className="flex py-4 space-x-4">
        <div className="relative">
          <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
            Qty
          </div>

          <div>
            <input
              className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1"
              onChange={(e) => setQuantity(e.target.value)}
              type="number"
              value={quantity}
              min="1"
            />
          </div>
        </div>

        <button
          onClick={addItem}
          type="button"
          className="h-14 px-6 py-2 font-semibold rounded-xl bg-primary-800 text-white-200 bg-hoverColor hover:text-hoverColor hover:bg-white-200"
        >
          Add to Cart
        </button>
      </div>
    );
  };

  return loading ? (
    <div className="py-6">
      {true && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex flex-col lg:flex-row">
          <div className="min-w-[60%]">
            <Slider props={"imageValue"} data={detail.product_images} />
          </div>
          <div className="mx-[24px]">
            <ItemHeading />
            <div>
              <div className="text-left border-b border-b-white-800 pb-3">
                {/* <span>{detail.data.description}</span> */}
                Chẳng ai muốn phải lục tìm món đồ mình cần trong một chiếc balo.
                Để chuẩn bị cho hành trang gọn gàng, sắp xếp mọi thứ tối ưu hơn
                thì bạn không thể bỏ lỡ Slash Backpack. Rung động trong thiết kế
                ngăn đa dạng và thể tích chứa lớn, sẵn sàng giúp bạn tự tin gói
                gọn nhiều món đồ cần mang theo.
              </div>
              <div>
                <h3 className="py-3 text-2xl flex uppercase">
                  Thông tin sản phẩm
                </h3>
                <ItemInfo />
              </div>
            </div>
            <AddBTn />
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className="h-[60vh] text-5xl">loading...</div>
  );
};

export default CartPage;
