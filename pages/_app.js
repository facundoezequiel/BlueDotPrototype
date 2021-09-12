import { useState } from "react";
import { lightTheme, darkTheme, GlobalStyles } from "../constants/themeConfig";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
        <Head>
          <title>Tesis - Facundo Brahim</title>
          <meta name="description" content="Tesis - Facundo Brahim" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <button onClick={toggleTheme}>Switch Theme</button>
        <Component {...pageProps} />
        {/* Global CSS */}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
