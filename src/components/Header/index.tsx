'use client'
import React from "react";

// import { logo } from "../../constant/constant";
import LanguageSwitcher from "../Button/LanguageButton";
import { useTranslation } from "react-i18next";
import ButtonSearch from "../Button";
import HeaderCollection from "./HeaderCollection";
import HeaderTop from "./HeaderTop";

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
        <div className="header-top sticky h-12 bg-primary-80 py-1 bg-primary-100">
          <HeaderTop />
        </div>

        <div className="header-bottom bg-white">
          <div className="py-1.5">
            <div className="h-full px-7 mx-36 border-b border-b-primary-80">
              <div className="mb-3.5 w-full flex justify-between items-center ">
                <div className="flex-1 flex ">
                  <ul className="block lg:flex justify-between w-full">
                    <li className="flex-1 cursor-pointer">
                      {t("header.about")}
                    </li>
                    <li className="flex-1 cursor-pointer">
                      {t("header.address")}
                    </li>
                  </ul>
                </div>

                <div className="flex-1">
                  <a href="/" className="cursor-pointer">
                    {/* <img alt="" className="w-36 mx-auto" src={logo.url} /> */}
                  </a>
                </div>

                <div className=" flex flex-1">
                  <ul className=" block lg:flex justify-between w-full">
                    <li className="flex-1 cursor-pointer">
                      {t("header.blog")}
                    </li>
                    <li className="flex-1 cursor-pointer">
                      {t("header.membership")}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-navbar p-1.5 border-t border-t-primary-80">
                <HeaderCollection/>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
