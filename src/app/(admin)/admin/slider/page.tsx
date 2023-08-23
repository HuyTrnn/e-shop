'use client'
import { RootState, useAppDispatch } from '@/store'
import { fetchImgSlider } from '@/store/thunks/fetchImage';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function SliderPage() {
  const imgSlider = useSelector((state: RootState) => state.imgSlider)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchImgSlider())
  }, []);
  return (
    <div>
        <h2>Slider Page</h2>
        <div className="bg-white-400 rounded-lg p-10 h-full">
            <div className='h-full'>
                {!imgSlider ? <div>Loading...</div> : 
                  imgSlider.map((url : string,index : number) => (
                    <Image src={url} alt="slide" width={150} height={150} />
                  ))
                }
            </div>
        </div>
    </div>
  )
}
