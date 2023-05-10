import { Inter } from "@next/font/google";
import { NextPage } from "next";
import React from "react";

const FontMPlus = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap");
  `}</style>
);

export default FontMPlus;

const fontVar = Inter({
  style: "normal",
  weight: ["300", "700"],
  display: "swap",
  subsets: ["latin-ext"],
});

export function FontInter({ children }: { children: React.ReactNode }) {
  return <div className={fontVar.className}>{children}</div>;
}
