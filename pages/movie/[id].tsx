import BannerDetail from "@/components/BannerDetail";
import Layout from "@/components/Layout";
import Similiar from "@/components/Similiar";
import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ReactPlayer from "react-player";

type Props = {
  result: any;
  same: any;
  vid: any;
};

function Movie({ result, same, vid }: Props) {
  const index = vid.results.findIndex((element) => element.type === "Trailer");
  const router = useRouter()
  
  return (
    <Layout>
      <Head>
        <title>{result.title || result.original_title}</title>
        <link rel="icon" href="images/disney-logo.svg" />
      </Head>

      <div className="container mx-auto">
        <BannerDetail
          backdrop={result.backdrop_path || result.poster_path}
          title={result.title || result.original_title}
          genre={result.genres[0]?.name || null}
          overview={result.overview}
          release={result.release_date}
          runtime={result.runtime}
        />

        <div className="mt-20 px-5 lg:px-0">
          <h2 className="title">{result.title || result.original_title} - Trailer</h2>
          <div className="mt-8 w-full lg:w-2/6">
            <ReactPlayer
              url={`htpps://www.youtube.com/watch?v=${vid.results[index].key || vid.results[0].key}`}
              controls={true}
              height={250}
              width={'100%'}
              style={{ borderRadius: 50 }}
            />
          </div>
        </div>

        <div className="mt-20 px-5 lg:px-0">
          <h2 className="title">More Like This</h2>
          <Similiar data={same.results} />
        </div>
      </div>
    </Layout>
  );
}

Movie.requireAuth = true

export default Movie

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const [detailRes, similiarRes, videoRes] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.API_KEY}&language=en-US`
    ),
  ]);

  const [detail, similiar, video] = await Promise.all([
    detailRes.json(),
    similiarRes.json(),
    videoRes.json(),
  ]);

  return {
    props: {
      result: detail,
      same: similiar,
      vid: video,
    },
  };
};
