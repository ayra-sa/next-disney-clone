import Image from "next/image";
import React from "react";

type Props = {
  backdrop: string,
  title: string,
  genre: string,
  overview: string,
  season: any,
  episodes: any,
  runtime: any,
  release: any
};

export default function BannerDetail({
  backdrop,
  title,
  genre,
  overview,
  season,
  episodes,
  runtime,
  release
}: Props) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  const timeConvert = (t: number) => {
    const num = t
    const hours = (num / 60)
    const rhours = Math.floor(hours)
    const minutes = (hours - rhours) * 60
    const rminutes = Math.round(minutes)

    return `${rhours} hr ${rminutes} min`
  }


  return (
    <div className="relative w-full flex min-h-[350px] lg:min-h-[400px] mt-[15%] lg:mt-[10%]">
      <div className="p-14 w-2/5 bg-[#030b17] rounded-tl-xl rounded-bl-xl relative hidden lg:block">
        <div className="absolute w-1/4 h-full bg-overlay top-0 -right-[15%] z-10" />
        <h2 className="text-2xl mb-4">{title}</h2>
        <div className="flex gap-x-3 my-3 text-neutral-400">
          {season ? <p>{season}</p> : null}
          {episodes ? <p>{episodes}</p> : null}
          {runtime ? <p>{timeConvert(runtime)}</p> : null}
          {release ? <p>{new Date(release).getFullYear()}</p> : null}
          <p>{genre}</p>
        </div>
        <p>{overview}</p>
      </div>

      <Image
        src={`${BASE_URL}${backdrop}`}
        alt="backdrop"
        // fill
        width={0}
        height={0}
        className="object-center object-cover lg:object-fill rounded-tr-xl rounded-br-xl w-full lg:w-3/5 h-full"
        priority
        sizes="100vw"
      />
    </div>
  );
}
