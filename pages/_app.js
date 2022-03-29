import "../styles/globals.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import Layout from "../components/Layout";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
