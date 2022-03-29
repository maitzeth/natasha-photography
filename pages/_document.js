import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={true}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          src="https://cdn.jsdelivr.net/npm/universalsmoothscroll@5.0.0/universalsmoothscroll-min.js"
          integrity="sha256-IqPIGT7RvWzXXDYRpTVf/zKiksCWB1iV0rtNBzfSiY4="
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/universalsmoothscroll@5.0.0/universalsmoothscroll-ease-functions-min.js"
          integrity="sha256-eCnsdTWjKrEFyVTl2SCBg+EBqB9IJALKgme5MP625FY="
          crossorigin="anonymous"
        ></script>
      </body>
    </Html>
  );
}

export default Document;
