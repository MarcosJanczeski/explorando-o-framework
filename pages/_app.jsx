import Head from "next/head";
import GlobalStyles from "../src/styles/global";

export default function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      {/*
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
      */}
      <title>EXPLORANDO NEXTJS - ALURA</title>
    </Head >
    <GlobalStyles />
    <Component {...pageProps} />
  </>
}
