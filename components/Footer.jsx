import React from "react";
import {
  AiOutlineGithub,
  AiOutlineHeatMap,
  AiOutlineMessage,
  AiOutlineRedEnvelope,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BiMap } from "react-icons/bi";

const Footer = () => {
  return (
    <footer
      className="w-full p-6 flex flex-col bg-gray-900 gap-4 text-white py-10"
      id="contact"
    >
      <div className="flex flex-col gap-4 md:max-w-[600px] md:mx-auto">
        <h1 className="text-orange-400 font-bold">Selastio Fadli Rahman</h1>
        <a
          href="https://g.page/jvalley-depok?share"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className="w-full flex items-center gap-4">
            <p>Jl Kh Muhasan 1 no 79 Depok Jawa Barat Indonesia</p>
          </div>
        </a>

        <a
          href="https://wa.me/6281213655573?text=Hello%20Fadli"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className="w-full flex items-center gap-4">
            <AiOutlineWhatsApp /> +6281213655573
          </div>
        </a>

        <a
          href="mailto:fadliselaz@gmail.com"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className="w-full flex items-center gap-4">
            <AiOutlineRedEnvelope /> fadliselaz@gmail.com
          </div>
        </a>
        <a
          href="https://github.com/jemblonganvalley?tab=repositories"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className="w-full flex items-center gap-4">
            <AiOutlineGithub /> jemblonganvalley
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
