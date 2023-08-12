import CartPage from '@/components/Cart'
import React from 'react'

export default function ProductDetail({ params }: { params: { slug: string } }) {
  return (
    <div>{params.slug}
      <CartPage/>
    </div>
  )
}
