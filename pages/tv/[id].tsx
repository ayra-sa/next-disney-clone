import BannerDetail from "@/components/BannerDetail";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Similiar from "@/components/Similiar";
import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, {useEffect} from "react";
import ReactPlayer from "react-player";

type Props = {
  result: any,
  same: any,
  vid: any
};

function Tv({ result, same, vid }: Props) {
  console.log(result);
  const index = vid.results.findIndex((element: any) => element.type === "Trailer");
  const session = useSession()
  console.log(session);
  const router = useRouter()


  return (
    <Layout>
      <Head>
        <title>{result.name || result.original_name}</title>
        <link rel="icon" href="images/disney-logo.svg" />
      </Head>

      <div className="container mx-auto">
        <BannerDetail
          backdrop={result.backdrop_path || result.poster_path}
          title={result.name || result.original_name}
          genre={result.genres[0]?.name || null}
          overview={result.overview}
          season={`${result.number_of_seasons} seasons`}
          episodes={`${result.number_of_episodes} episodes`}
          runtime={null}
          release={null}
        />

        <div className="mt-20 px-5 lg:px-0">
          <h2 className="title">
            {result.name || result.original_name} - Trailer
          </h2>
          <div className="mt-8 w-full lg:w-2/6">
            <ReactPlayer
              url={`htpps://www.youtube.com/watch?v=${
                vid.results[index].key || vid.results[0].key
              }`}
              controls={true}
              height={250}
              width={"100%"}
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

Tv.requireAuth = true

export default Tv



export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const [detailRes, similiarRes, videoRes] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}&language=en-US`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.API_KEY}&language=en-US`
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
      vid: video
    },
  };
};


