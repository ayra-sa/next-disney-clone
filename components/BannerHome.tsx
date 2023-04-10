import React from 'react'

type Props = {}

export default function BannerHome({}: Props) {
  return (
    <div className='h-64 w-full px-5 py-8 bg-neutral-600 mt-[20%] lg:mt-[10%] mb-20 rounded-xl'>
        <h1 className='font-bold text-2xl mb-5'>Welcome to Next Disney+</h1>

        <p>let&apos;s find popular movies and tv series on this platform, you can search for trending shows, read the details, and watch the trailers</p>
    </div>
  )
}