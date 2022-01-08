import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
            rel="stylesheet"
          />
          <link rel="apple-touch-icon" href="logo.svg" />
          <meta name="description" content="Ehtesham's Portfolio" />
          <meta property="og:type" content="Website" />
          <meta name="image" property="og:image" content="https://i.imgur.com/iqDJ1us.png" />
          <meta name="description" property="og:description" content="Ehtesham's Portfolio" /><meta name="author" content="Ehtesham Faraz" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
  );
}
