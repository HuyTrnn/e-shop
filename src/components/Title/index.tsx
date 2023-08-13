import { usePathname } from 'next/navigation'
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Title({title} : {title: string}) {
    const pathname = usePathname()
    const { t } = useTranslation();

    const mockupData = [
      {
        name: t("productType.Backpacks"),
      },
      {
        name: t("productType.Wallet"),
      },
      {
        name: t("productType.Tote"),
      },
      {
        name: t("productType.Bag"),
      },
    ];
    
  return (
    <div className="relative flex items-center">
    <h2 className="text-4xl my-8 mr-4 min-w-[190px] uppercase">{t(title)}</h2>
    {pathname == "/" && <div className="w-full line h-0.5 bg-primary-800"></div>}
  </div>
  )
}
