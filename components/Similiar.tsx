import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {};

export default function Similiar({ data }: Props) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  const router = useRouter();


  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      navigation={true}
      breakpoints={{
        640: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 8,
          spaceBetween: 10,
        },
      }}
      modules={[Navigation]}
      className="py-8 mySwiper"
    >
      {data.map((d) => (
        <SwiperSlide
          key={d.id}
          className="group relative h-52 cursor-pointer transition-all duration-300 hover:scale-125 hover:z-10 first:hover:origin-left"
          onClick={() => router.replace(`/movie/${d.id}`)}
        >
          <Image
            src={`${BASE_URL}${d.poster_path}`}
            alt="poster"
            className="object-center rounded-lg"
            priority
            fill
            sizes="100vw"
          />
          <div className="absolute p-3 thumb-overlay top-0 bottom-0 left-0 right-0 hidden flex-col rounded-lg justify-end transition-all duration-200 group-hover:flex">
            <b className="text-[8px]">{`${
              d.title || d.original_title || d.name || d.original_name
            }`}</b>
            {/* <p>{d.overview}</p> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
