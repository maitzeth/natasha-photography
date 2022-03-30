import "../styles/globals.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
