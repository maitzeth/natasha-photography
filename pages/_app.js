import "../styles/globals.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import Layout from "../components/Layout";
import { RecoilRoot } from "recoil";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script
        src="https://cdn.jsdelivr.net/npm/universalsmoothscroll@5.0.0/universalsmoothscroll-min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/universalsmoothscroll@5.0.0/universalsmoothscroll-ease-functions-min.js"
        strategy="beforeInteractive"
      />
    </RecoilRoot>
  );
}

export default MyApp;
