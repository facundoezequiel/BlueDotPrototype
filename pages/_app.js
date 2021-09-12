import { useState } from "react";
import { lightTheme, darkTheme, GlobalStyles } from "../constants/themeConfig"
import { ThemeProvider } from "styled-components"
import Head from "next/head";

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <>
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <Head>
        <title>Tesis - Facundo Brahim</title>
        <meta name="description" content="Tesis - Facundo Brahim" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <button onClick={toggleTheme}>Switch Theme</button>
      <Component {...pageProps} />
      {/* Global CSS */}
    </ThemeProvider>
    </>
  )
}

export default MyApp;
