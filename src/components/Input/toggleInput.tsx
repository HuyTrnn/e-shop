"use client";
import React, { useRef, useState } from "react";
import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import Input from ".";


export default function ToggleButton({
  data,
  type,
  register,
  watch,
  setValue,
}: {
  data: Array<string>;
  type: string;
  register: UseFormRegister<FieldValues>;
  watch: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}) {
  const [searchText, setSearchText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>(data);
  const [value, setTextValue] = useState<string>();
  const [toggle, setToggle] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value.toLowerCase();
    const filteredProducts = data.filter((item) =>
      item.toLowerCase().includes(searchText)
    );
    setSearchText(searchText);
    setSearchResults(filteredProducts);
  };

  return (
    <div
      onClick={(e) => {
        if (ref.current?.contains(e.target as Node)) {
          return;
        }
        setToggle(!toggle);
      }}
      className={`w-full relative ${toggle && "border"}`}
    >
      <div>
        <Input
          type="text"
          name={type}
          label={value || type}
          watch={watch}
          register={register}
          className="w-full text-base dark:text-light-100 pointer-events-none from-cyan-500 to-blue-500"
        />
        {toggle && (
          <div className=" max-h-[250px] absolute z-10 bg-white-200 p-1.5 border border-t-transparent overflow-auto top-[40px] w-full left-[-1px]">
            <input
              type="text"
              className="border"
              ref={ref}
              onChange={handleSearch}
            />
            <div className="flex flex-col overflow-auto">
              <p
                className="cursor-pointer"
                onClick={() => setValue(type, null)}
              >
                {type}
              </p>
              {searchResults.length > 0 ? (
                searchResults.map((item, index) => (
                  <span
                    key={index}
                    onClick={() => setValue(type, item)}
                    className=" w-full hover:text-primary-200 hover:bg-primary-100"
                  >
                    {item}
                  </span>
                ))
              ) : (
                <p>Invalid</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
