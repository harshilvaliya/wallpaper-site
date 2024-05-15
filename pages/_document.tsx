import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/icon.png" />
          <meta name="description" content="Browse the wallpapers..." />
          <meta property="og:site_name" content="bhitchitram.netlify.app/" />
          <meta property="og:description" content="Browse the wallpapers..." />
          <meta property="og:title" content="BhitChitram" />
          <meta name="twitter:card" content="image" />
          <meta name="twitter:title" content="BhitChitram" />
          <meta name="twitter:description" content="wallpapers made by me" />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
