import Image from 'next/image'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import Carousel from './Carousel'

type Props = {}


export default function Trending({data}: Props) {

  return (
    <div>
        <h2 className='title'>Trending</h2>

        <Carousel data={data} page='page' />
    </div>
  )
}