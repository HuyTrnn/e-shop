'use client'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetail } from "../../store/thunks/fetchProductDetail";
import { addItems } from "../../store/slices/cartSlice";
import Slider from "../../components/Slider";

function CartPage() {
  const [quantity, setQuantity] = useState(1);
//   const detail = useSelector((state) => state.detail);
//   const { isAuthenticated } = useSelector((state) => state.login);
//   const loading = useSelector((state) => state.detail.loading);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { id } = useParams();

//   useEffect(() => {
//     dispatch(fetchProductDetail(id));
//   }, [dispatch, id]);

//   const addToCart = () => {
//     if (!isAuthenticated) {
//       navigate("/login");
//     } else {
//       dispatch(addItems({ ...detail.data, quantity }));
//     }
//   };

    const loading = true

  const ItemHeading = () => {
    return (
      <>
        <div className=" h-[60px] border-b border-b-main h-fit">
          <h2 className="font-semibold text-4xl whitespace-wrap uppercase">
            {/* {detail.data.title} */}
            Test
          </h2>
        </div>
        <div className="py-5 flex text-2xl">
          <span>
            {/* {detail.data.price} */}
                    Test$
          </span>
        </div>
      </>
    );
  };

  const ItemInfo = () => {
    return (
      <ul className="text-left list-disc ml-6">
        <li>Kích thước: 42cm x 28cm x 15cm</li>
        <li>Chất liệu: High Quality Oxford chống nước</li>
        <li>Bao gồm 7 ngăn: 1 ngăn chính, 1 ngăn chống sốc, 2</li>
        <li>Ngăn chống sốc đựng vừa laptop 14 inch</li>
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
            //   onChange={(e) => setQuantity(e.target.value)}
              type="number"
              value={quantity}
              min="1"
            />
          </div>
        </div>

        <button
        //   onClick={addToCart}
          type="button"
          className="h-14 px-6 py-2 font-semibold rounded-xl bg-main hover:opacity-70 text-primary-50"
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
            <Slider props={"imageValue"} />
          </div>
          <div className="mx-[24px]">
            <ItemHeading />
            <div>
              <div className="text-left border-b border-b-main pb-3">
                {/* <span>{detail.data.description}</span> */}
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
}

export default CartPage;
