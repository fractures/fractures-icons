import "@fractures/css";
import React, { useEffect } from "react";
import "@fractures/css";
import { useRouter } from "next/router";
import * as Fathom from "fathom-client";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    Fathom.load("BMEOELVT");

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }

    router.events.on("routeChangeComplete", onRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
