import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tavan Bogd Finance</title>

        <meta property="og:title" content="Mezorn Studio" />
        <meta
          property="og:description"
          content="Таван Богд Финанс компаний даалгавар."
        />
        <meta property="og:type" content="website" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
