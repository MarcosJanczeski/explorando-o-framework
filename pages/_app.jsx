import GlobalStyles from "../src/styles/global";

export default function MyApp({ Component, pageProps }) {
  return <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
}
