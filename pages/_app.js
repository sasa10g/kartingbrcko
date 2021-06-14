import React, { useEffect } from "react";
import Router from "next/router";
import { initGA, logPageView } from "../utils/analytics";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on("routeChangeComplete", logPageView);
  }, []);
  return <Component {...pageProps} />;
}
