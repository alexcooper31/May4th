import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'normalize.css';
import { ReactElement, useState } from 'react';
import { Cacher } from '../types/common';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    width: 100vw;
    height: 100vh;
    color: white;
    background-color: #08080A;
    display: flex;
    flex-direction: column;
    align-items: center;

    a, a:active {
      text-decoration: none;
      color: white;
    }
  }
`;

const theme = {
  colors: {
    black: '#08080A',
    blue: '#0112FE',
    lightGray: '#B0AFAF',
    darkGray: '#16171D',
  },
};

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const [cache, setCache] = useState<Cacher>({ films: [] });

  return (
    <>
      <Head>
        <title>Star Wars - May 4th</title>
        <link rel="icon" href="/icons/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700" rel="stylesheet" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="May 4th" />
        <meta property="og:title" content="Star Wars - May 4th" key="og-title" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component cache={cache} setCache={setCache} {...pageProps} />
      </ThemeProvider>
    </>
  );
}
