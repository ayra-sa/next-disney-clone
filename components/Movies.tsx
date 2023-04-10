import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Carousel from "./Carousel";


type Props = {};


export default function Movies({ title, data }: Props) {

  return (
    <div>
      <h2 className="title">{title}</h2>

        <Carousel data={data} page='movie' />

    </div>
  );
}
