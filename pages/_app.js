import "../styles/globals.css";
import FacebookPixel from "../components/common/facebookPixel";
import MainLayout from "../components/layout/index";
import defaultLayout from "../components/layout/default";
import { Toaster } from "react-hot-toast";

import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import FloatingWhatsAppBtn from "../components/FloatingWhatsapp";
import { useEffect, useState } from "react";
import AppLoader from "../components/appLoader";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || defaultLayout;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const nav = performance.getEntriesByType("navigation")[0];
    if (nav?.type === "reload") {
      console.log("Page was refreshed");
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <FacebookPixel />
      <FloatingWhatsAppBtn />
      <MainLayout>
        <Layout>
          <AppLoader isLoading={isLoading} setIsLoading={setIsLoading}>
            <Component {...pageProps} />
          </AppLoader>
        </Layout>
        <Toaster />
      </MainLayout>
    </>
  );
}

export default MyApp;
