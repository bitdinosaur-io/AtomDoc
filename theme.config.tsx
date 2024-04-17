import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Logowhite from "./asset/imgs/logo-white.png";
import Image from "next/image";
import Logo from "./components/logo";
import Link from "next/link";

const config: DocsThemeConfig = {
  // editLink:null,
  logo: () => {
    return (
      <div className="nx-w-full nx-h-full nx-flex nx-items-center">
        <Logo height={24} />
        <span className="nx-mx-2 nx-font-bold nx-hidden nx-text-indigo-600 md:nx-inline nx-select-none">
          Atomscan
        </span>
      </div>
    );
  },
  logoLink: "https://atomscan.org",
  head: function useHead() {
    const { title: pageTitle } = useConfig();
    const title = `${pageTitle} | Atomscan Doc| Atomscan (Atomicals Blockchain Explorer)`;

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="apple-mobile-web-app-title" content="Atomscan Doc" />
        <meta name="description" content="Welcome to the Atomscan APIs documentation 🚀." />
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="Welcome to the Atomscan APIs documentation 🚀." />

        {["description", "og:description", "twitter:description"].map(
          (property) => (
            <meta
              key={property}
              name={property}
              content={"Welcome to the Atomscan APIs documentation 🚀."}
            />
          )
        )}

        {/* font */}
        {/* <link
          rel="preload"
          href="./asset/fonts/Chillax-Variable.ttf"
          as="font"
          crossOrigin=""
          type="font/ttf"
        /> */}
      </>
    );
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s | Atomscan Doc| Atomscan (Atomicals Blockchain Explorer)",
    };
  },
  docsRepositoryBase: "https://atomscan.org",
  footer: {
    text: "©2022-2024 Bitdinosaur",
  },
  toc: {
    backToTop: true,
    float: true,
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
};

export default config;
