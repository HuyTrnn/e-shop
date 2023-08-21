"use client";

import { FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  children?: React.ReactNode;
  label?: string;
  name: string;
  className?: string;
  value?: string;
  register: any;
  type?: string;
  id?: string;
  visibleLine?: boolean;
  watch?: UseFormRegister<FieldValues>;
}

const Input: React.FC<Props> = function ({
  children,
  label,
  className,
  register,
  type,
  name,
  id,
  value,
  watch,
  visibleLine = true,
}) {
  return (
    <div className="relative p-2 mt-2 w-full cursor-pointer ">
      <input
        id={id}
        type={type || "text"}
        autoComplete="on"
        defaultValue=""
        value={value}
        {...register(name)}
        className={`block w-full px-1 py-1 pb-1 text-base text-black bg-transparent bg-center bg-no-repeat border-transparent dark:text-light-100  focus:border-none focus:outline-none ${className}`}
      />

      {visibleLine && <i className="mtrl-select"></i>}

      <label
        className={`absolute control-label font-normal delay-100 transition-all pointer-events-none text-primary-200  ${
          watch && watch(name)
            ? "top-[-1rem] text-[14px] transition-all text-primary-100 pl-[1px]"
            : "text-[18px] top-[2px] pl-2"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
