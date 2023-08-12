'use client'
import i18n from "@/i18n";
import { store } from "@/store";
import React from "react";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

export default function Wrappper({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ToastContainer />
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </Provider>
    </div>
  );
}
