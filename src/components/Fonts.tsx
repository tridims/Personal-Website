import { M_PLUS_Rounded_1c } from "@next/font/google";
import { NextPage } from "next";
import React from "react";

const Fonts = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap");
  `}</style>
);

export default Fonts;

const fontVar = M_PLUS_Rounded_1c({
  style: "normal",
  weight: ["300", "700"],
  display: "swap",
});

// export default function Fonts({ children }: { children: React.ReactNode }) {
//   return <main className={fontVar.className}>{children}</main>;
// }
