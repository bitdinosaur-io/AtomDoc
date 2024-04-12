import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logowhite from "./asset/imgs/logo-white.png";
import Image from "next/image";
import Logo from "./components/logo";

const config: DocsThemeConfig = {
  // editLink:null,
  logo: () => {
    return (
      <div className=" nx-w-full nx-h-full nx-flex nx-items-center">
        {/* <Image
          src={Logowhite}
          alt="LogoPic"
          width={100}
          height={100}
          className="nx-h-12"
        /> */}
        <Logo height={24} />
        <span className="nx-mx-2 nx-font-bold nx-hidden nx-text-indigo-600 md:nx-inline nx-select-none">
          Atomscan
        </span>
      </div>
    );
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Atomscan API Doc",
    };
  },
  // docsRepositoryBase: "https://github.com//",
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
