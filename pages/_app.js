import { GlobalStyles } from "../constants/globalStyles";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tesis - Facundo Brahim</title>
        <meta name="description" content="Tesis - Facundo Brahim" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/Fonts/d-din/D-DIN.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/Fonts/d-din/D-DIN-Bold.woff"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
