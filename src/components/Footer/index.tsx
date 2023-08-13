'use client'
import { GiPositionMarker } from "react-icons/gi";
import { FaPhone } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import ButtonSearch from "../Button";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="footer" className="bg-white-800 pb-16 flex justify-center">
      <div className="container p-8">
        <div className="flex justify-around">
          <ul className="flex flex-col items-start text-white-500">
            <li className=" text-primary-100 text-base white text-footer  font-semibold text-2xl py-1">
              {t("footer.companyName")}
            </li>
            <li className=" text-white-500 flex items-center justify-center py-1 cursor-pointer hover:opacity-90">
              <span>
                <GiPositionMarker className="text-footer mr-3 opacity-100" />
              </span>
              {t("footer.store1")}
            </li>
            <li className=" text-white-500 flex items-center justify-center py-1 cursor-pointer hover:opacity-90">
              <span>
                <GiPositionMarker className="text-footer mr-3 opacity-100" />
              </span>
              {t("footer.store2")}
            </li>
            <li className=" text-white-500 flex items-center justify-center py-1 cursor-pointer hover:opacity-90">
              <span>
                <FaPhone className="text-footer mr-3 opacity-100" />
              </span>
              {t("footer.hotline")}
            </li>
            <li className=" text-white-500 flex items-center justify-center py-1 cursor-pointer hover:opacity-90">
              <span>
                <TbMailFilled className="text-footer mr-3 opacity-100" />
              </span>
              {t("footer.email")}
            </li>
          </ul>
          <ul className="white">
            <li className=" !text-primary-100 text-base white text-footer font-semibold text-2xl">
              {t("footer.subscribeTitle")}
            </li>
            <li className=" text-white-500 py-3">{t("footer.subscribeDescription")}</li>
            <li className=" text-white-500 flex justify-center">
              <ButtonSearch />
            </li>
          </ul>
          <ul className="flex flex-col items-left text-left">
            <li className=" text-primary-100 text-base white text-footer font-semibold text-2xl">
              {t("footer.shouldSee")}
            </li>
            <li className=" text-white-500 py-1 cursor-pointer hover:opacity-90">
              {t("footer.introduction")}
            </li>
            <li className=" text-white-500 py-1 cursor-pointer hover:opacity-90">
              {t("footer.paymentMethods")}
            </li>
            <li className=" text-white-500 py-1 cursor-pointer hover:opacity-90">
              {t("footer.returnPolicy")}
            </li>
            <li className=" text-white-500 py-1 cursor-pointer hover:opacity-90">
              {t("footer.purchasePolicy")}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
