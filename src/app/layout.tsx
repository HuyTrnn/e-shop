import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from 'next/font/google'
import Wrapper from "@/components/LayoutWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: "Camelia Brand",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="csrf-token" content="{{ csrf_token() }}"></meta>
      <body className={roboto.className}>
        <Wrapper>
          {children}    
        </Wrapper>
      </body>
    </html>
  );
}
