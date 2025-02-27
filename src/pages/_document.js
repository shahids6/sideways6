import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a4f9d" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Sideways 6",
              "image": "/brand-logo.svg",
              "description": "Sideways 6, a division of AD6 Advertising, specializes in innovative event planning and brand building.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "No. 134/1, Ground Floor, Lakshmaiah Block, Ganganagar",
                "addressLocality": "Bengaluru",
                "postalCode": "560024",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "13.0206",
                "longitude": "77.5895"
              },
              "url": "https://sideways6.in",
              "telephone": "+91-XXXXXXXXXX",
              "priceRange": "₹₹₹"
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
