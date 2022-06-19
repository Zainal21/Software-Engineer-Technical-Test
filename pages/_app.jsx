import "../styles/globals.css";
import Header from "@/components/base/header";
import Footer from "@/components/base/footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
