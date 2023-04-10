import Image from "next/image"

type Props = {}

export default function Hero({}: Props) {
  return <section className="flex flex-col place-content-center min-h-screen items-center">
    <div className="relative w-full h-screen">
      <Image 
        src='/images/banner.webp'
        alt="banner"
        fill
        priority
        className="object-center"
      />
    </div>
  </section>
}