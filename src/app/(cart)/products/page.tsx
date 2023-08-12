'use client'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'



export default function page() {
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if(pathname === "/products") {
            router.push("/")
        }
    },[])
  return (
    <div>Loading</div>
  )
}
