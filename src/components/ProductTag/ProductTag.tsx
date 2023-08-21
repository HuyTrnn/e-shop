"use client";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
interface Products {
  item: {
    product_name: string;
    id: string;
    product_images: Array<string>;
    title: string;
    introduce: string;
    product_price: number;
    product_description: string;
    rating: any;
  };
}

const ProductTag: React.FC<Products> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div
      key={item.id}
      className="item-list__product--info p-1.5 mx-7 max-h-[380px] flex justify-center items-center flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="rounded-xl bg-white-200 p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 w-[250px] h-fit">
        <Link href={`/products/${item.id}`}>
          <div className="relative flex items-end overflow-hidden rounded-xl max-h-[260px] object-contain">
            <Image
              className="object-cover min-h-[240px] w-full"
              src={!isHovered ? item.product_images[0] : item.product_images[1]}
              alt="Hotel"
              quality={100}
              width={120}
              height={200}
            />
            <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg- p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="ml-1 text-sm text-slate-400">
                {/* {item.rate} */}
              </span>
            </div>
          </div>

          <div className="mt-1 p-2">
            <h2 className="text-slate-700  max-h-[60px]">
              <span className="line-clamp-2 font-semibold">
                {item.product_name}
              </span>
            </h2>
            <p className="mt-1 text-[12px] text-slate-400 line-clamp-2">
              {/* {t("description.product")} */}
              {item.introduce}
            </p>

            <div className="mt-3 flex items-end justify-between">
              <p className="text-lg font-bold text-blue-500">
                {Number(item.product_price)}đ
              </p>

              <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 text-white-200 duration-100 ">
                <button className="bg-primary-100 w-[120px] rounded-lg hover:bg-hoverColor">
                  {t("detailBtn.detail")}
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductTag;
