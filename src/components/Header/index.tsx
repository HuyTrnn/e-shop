"use client";
import React from "react";

// import { logo } from "../../constant/constant";
import LanguageSwitcher from "../Button/LanguageButton";
import { useTranslation } from "react-i18next";
import ButtonSearch from "../Button";
import HeaderCollection from "./HeaderCollection";
import HeaderTop from "./HeaderTop";
import Link from "next/link";
import logo from "@/assets/imgs/mainlogo.png";
import Image from "next/image";
function Header() {
  // const quantity = useSelector((state: RootState) => state.cart.data);
  const { t } = useTranslation();

  // const totalQuantity = quantity.reduce(
  //   (total, product) => total + product.quantity,
  //   0
  // );

  return (
    <React.Fragment>
      <header id="header" className="w-full">
        <div className="header-top sticky top-0  h-12 bg-white-600 py-1 bg-white-600">
          <HeaderTop />
        </div>

        <div className="header-bottom bg-white-200">
          <div className="py-1.5 m-auto flex justify-center items-center max-w-[1200px]">
            <div className="h-full px-7 mx-36 border-b border-b-white-400 w-full m-auto">
              <div className="mb-3.5 w-full flex justify-between items-center max-w-[1200px]">
                <div className="flex-1 flex ">
                  <ul className="block lg:flex justify-between w-full">
                    <Link href="/about">
                      <li className="cursor-pointer">{t("header.about")}</li>
                    </Link>
                    <Link href="/membership">
                      <li className="cursor-pointer">{t("header.address")}</li>
                    </Link>
                  </ul>
                </div>

                <div className="flex-1 flex justify-center items-center">
                  <a href="/" className="cursor-pointer">
                    <Image src={logo} alt="logo" width={150} height={58} />
                  </a>
                </div>

                <div className=" flex flex-1">
                  <ul className=" block lg:flex justify-between w-full">
                    <Link href="/blog">
                      <li className="cursor-pointer">{t("header.blog")}</li>
                    </Link>
                    <Link href="/membership">
                      <li className="cursor-pointer">
                        {t("header.membership")}
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="header-navbar p-1.5 border-t border-t-primary-80 bg-white-200">
                <HeaderCollection />
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
