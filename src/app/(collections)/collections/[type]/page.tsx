import ListItem from '@/components/ListProducts'
import React from 'react'

export default function Collection({ params }: { params: { type: string } }) {
  return (
    <div>
        <ListItem name={params.type}/>
    </div>
  )
}
