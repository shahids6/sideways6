import "@/styles/globals.css";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sideways 6" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://sideways6.in" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
