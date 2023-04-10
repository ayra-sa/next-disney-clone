import React from 'react'
import Carousel from './Carousel'

type Props = {
  data: [],
  title: string
}

export default function Shows({data, title}: Props) {
  return (
    <div>
      <h2 className='title'>{title}</h2>

      <Carousel data={data} page='tv' />
    </div>
  )
}