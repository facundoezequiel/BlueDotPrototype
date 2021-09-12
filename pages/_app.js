import { GlobalStyles } from "../constants/globalStyles";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tesis - Facundo Brahim</title>
        <meta name="description" content="Tesis - Facundo Brahim" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
