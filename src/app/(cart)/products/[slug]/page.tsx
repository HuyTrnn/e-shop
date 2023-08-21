'use client'
import CartPage from '@/components/Cart'
import { RootState, useAppDispatch } from '@/store'
import { fetchProductDetail } from '@/store/thunks/fetchProductDetail'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const detail = useSelector((state: RootState) => state.productDetail.data)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProductDetail(params.slug));
  },[dispatch, params.slug])
  
  return (
    <div>
      <CartPage data={detail}/>
    </div>
  )
}
