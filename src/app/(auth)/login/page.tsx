"use client";
import { RootState, useAppDispatch } from "@/store";
import { loginToken } from "@/store/thunks/login";
import Link from "next/link";
import React, { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

type Inputs = {
  email: string;
  password: string;
};
function LoginPage() {
  const dispatch = useAppDispatch();
  const isAdmin = useSelector((state: RootState) => state.login.isAdmin);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const { push } = useRouter();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    try {
      dispatch(loginToken(data)).then(() => {
        if (isAdmin) {
          toast.success("Login admin success!");
          router.push("/admin/dashboard");
        } else {
          toast.success("Login success!");
          router.push("/");
        }
      });
    } catch (err) {
      toast.error("Login fail! Please try again later.");
      window.location.reload();
    }
  };
  const navigate = () => {};

  return (
    <div className="bg-white shadow rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0 h-[100vh] mx-auto">
      <div className="p-6 w-full sm:p-8 lg:p-16 space-y-8 flex flex-col align-center texts-center justify-center">
        <h2
          className="text-2xl lg:text-3xl font-bold text-gray-900 "
          onClick={navigate}
        >
          Sign in to CAMELIA
        </h2>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="text-sm font-medium text-gray-900 block mb-2">
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={watch("email")}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              placeholder="eve.holt@reqres.in"
              // required
              {...register("email")}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-900 block mb-2">
              Your password
            </label>
            <input
              type="password"
              id="password"
              autoComplete="on"
              placeholder="cityslicka"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              required
              {...register("password", { required: true })}
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                name="remember"
                type="checkbox"
                className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded"
              />
            </div>
            <div className="text-sm ml-3">
              <label className="font-medium text-gray-900">Remember me</label>
            </div>
            <a
              href="/"
              className="text-sm text-teal-500 hover:underline ml-auto"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-primary-100 text-white-200 hover:opacity-90 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center"
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500">
            Not registered?{" "}
            <Link href="/register">
              <span className="text-teal-500 hover:underline">
                Create account
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
