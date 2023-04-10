import { ProtectedLayout } from "@/components/ProtectedLayout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";

const mons = Montserrat({ subsets: ['latin'] })

// add requireAuth to AppProps
type AppPropsWithAuth = AppProps & {
  Component: {
    requireAuth?: boolean;
  };
};

export default function App({ Component, pageProps }: AppPropsWithAuth) {
  console.log(Component.requireAuth)
  return <SessionProvider session={pageProps.session}>
    {Component.requireAuth ? (
      <ProtectedLayout>
        <div className={mons.className}>
          <Component {...pageProps} />
        </div>
      </ProtectedLayout>
    ) : (
      <div className={mons.className}>
        <Component {...pageProps} />
      </div>
    )}
  </SessionProvider>;
}