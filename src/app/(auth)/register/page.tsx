"use client";
import { useAppDispatch } from "@/store";
import { register } from "@/store/thunks/register";
import Link from "next/link";
import React, { useState } from "react";
import { BsFacebook, BsGoogle } from "react-icons/bs";

function RegisterPage() {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser = {
      name: "admin",
      email: userName,
      password: password,
    };

    if (!confirmPassword()) {
      return;
    }

    dispatch(register(newUser));
  };

  const confirmPassword = () => {
    if (checkPassword !== password) {
      alert("Passwords don't match");
      return false;
    }
    return true;
  };

  return (
    <div className="bg-white shadow rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0 h-[100vh] mx-auto">
      <div className="p-6 w-full sm:p-8 lg:p-16 space-y-8 flex flex-col align-center texts-center justify-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Sign in to CAMELIA
        </h2>

        <form className="mt-8 space-y-6" action="#" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium text-gray-900 block mb-2">
              Your Name
            </label>
            <input
              autoComplete="on"
              type="text"
              name="email"
              value={userName}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              placeholder="name@company.com"
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-900 block mb-2">
              Your Email
            </label>
            <input
              autoComplete="on"
              type="email"
              name="email"
              id="email"
              value={email}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              placeholder="name@company.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-900 block mb-2">
              Your password
            </label>
            <input
              autoComplete="on"
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-900 block mb-2">
              Confirm your password
            </label>
            <input
              autoComplete="on"
              type="password"
              name="checkPassword"
              id="checkPassword"
              value={checkPassword}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              required
              onChange={(e) => setCheckPassword(e.target.value)}
            />
          </div>
          <div className="flex items-start">
            <Link href="/login">
              <span className="text-sm text-teal-500 hover:underline ml-auto">
                Already have an account?
              </span>
            </Link>
          </div>
          <button
            type="submit"
            className="bg-primary-100 text-white-200 hover:opacity-90 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center"
          >
            Register
          </button>
          <div className="text-sm font-medium text-gray-500 flex justify-center">
            Login with
            <div className="text-teal-500 hover:underline flex w-[100px] justify-around items-center">
              <BsFacebook /> <BsGoogle />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
