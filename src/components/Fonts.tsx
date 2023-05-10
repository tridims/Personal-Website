import { Inter } from "@next/font/google";
import { NextPage } from "next";
import React from "react";

const FontMPlus = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap");
  `}</style>
);

const fontVar = Inter({
  style: "normal",
  weight: ["300", "700"],
  display: "swap",
  subsets: ["latin-ext"],
});

function FontInter({ children }: { children: React.ReactNode }) {
  return <div className={fontVar.className}>{children}</div>;
}

const FontHack = () => (
  <style jsx global>{`
    @import url("https://cdnjs.cloudflare.com/ajax/libs/hack-font/3.3.0/web/hack.css");
  `}</style>
);

export default FontMPlus;
export { FontInter, FontHack };
