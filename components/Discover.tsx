import React from 'react'
import Carousel from './Carousel'

type Props = {}

export default function Discover({data, title}: Props) {

  return (
    <div>
        <h2 className="title">{title}</h2>

        <Carousel data={data} page='page' />
    </div>
  )
}