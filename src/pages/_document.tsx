import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html data-theme="winter" lang="en">
      <Head />
      <body className="dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
