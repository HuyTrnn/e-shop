import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react'


export default function ColectionLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <>
        <Header />
          {children}
        <Footer />
    </>
  )
}
