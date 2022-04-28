import "../styles/globals.css";
import "lightgallery.js/dist/css/lightgallery.css";
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
