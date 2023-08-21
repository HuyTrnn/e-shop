import React from "react";
import { FiSearch } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const ButtonSearch = function ({className} : {className?: string}) {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <input
        className={`h-10 w-48 rounded px-2.5 py-2.5 ${className}`}
        type="text"
        placeholder={t("header.searchPlaceholder")}
      />
      <button className="bg-primary-100 w-10 h-10 rounded">
        <FiSearch className="mx-auto text-white-200 text-lg" />
      </button>
    </React.Fragment>
  );
};

export default ButtonSearch;
