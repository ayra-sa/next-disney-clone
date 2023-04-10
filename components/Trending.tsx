import React from 'react'
import Carousel from './Carousel'

type Props = {
  data: []
}


export default function Trending({data}: Props) {

  return (
    <div>
        <h2 className='title'>Trending</h2>

        <Carousel data={data} page='page' />
    </div>
  )
}