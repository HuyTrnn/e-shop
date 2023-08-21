'use client'
import TableData from '@/components/Admin/Table'
import TableContent from '@/components/Admin/TableContent'
import ButtonSearch from '@/components/Button'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function ListCart() {
  return (
    <div className="bg-white-600 h-full">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold ">List orders</h2>
        <div className="flex gap-6">
          <button className="bg-primary-100 flex items-center justify-center hover:bg-hoverColor rounded-lg text-white-200 h-12 w-[200px]">
            <AiOutlineShoppingCart className="mr-2" /><span>Create new receipt</span>
          </button>
        </div>
      </div>
      <div className="bg-white-400 mt-10 py-8">
        <div className="flex items-center w-full px-8 mb-6">
          <ButtonSearch className="w-full" />
        </div>
        <div className="border">
          <TableContent />
        </div>
      </div>
    </div>
  )
}
