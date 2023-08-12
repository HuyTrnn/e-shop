import { RootState, useAppDispatch } from '@/store';
import { fetchCollection } from '@/store/thunks/collectionByType';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { BsBagHeart } from "react-icons/bs";
import { GiLightBackpack, GiWallet, GiHandBag } from "react-icons/gi";
import { useSelector } from 'react-redux';

const HeaderCollection = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const router = useRouter()
    const collection = useSelector((state: RootState) => state.collections)
    const productType = {
        Backpacks: t("productType.Backpacks"),
        Wallet: t("productType.Wallet"),
        Tote: t("productType.Tote"),
        Bag: t("productType.Bag"),
      };

      function getCollectionByType(type: string) {
        dispatch(fetchCollection(type))
        router.push(`/collections/${type}`)
      }

    return (
      <ul className="flex justify-center">
        <li onClick={() => getCollectionByType("backpack")} className="flex flex-col items-center w-48 border-r border-r-primary-80 hover:text-hoverColor transition duration-300 ease-out cursor-pointer">
          <GiLightBackpack className="text-6xl" />
          {productType.Backpacks}
        </li>
        <li onClick={() => getCollectionByType("wallet")} className="flex flex-col items-center w-48 border-r border-r-primary-80 hover:text-hoverColor transition duration-300 ease-out cursor-pointer">
          <GiWallet className="text-6xl" />
          {productType.Wallet}
        </li>
        <li onClick={() => getCollectionByType("tote")} className="flex flex-col items-center w-48 border-r border-r-primary-80 hover:text-hoverColor transition duration-300 ease-out cursor-pointer">
          <BsBagHeart className="text-6xl" />
          {productType.Tote}
        </li>
        <li onClick={() => getCollectionByType("crossbody")} className="flex flex-col items-center w-48 hover:text-hoverColor transition duration-300 ease-out cursor-pointer" >
          <GiHandBag className="text-6xl" />
          {productType.Bag}
        </li>
      </ul>
    );
  };

  export default HeaderCollection
