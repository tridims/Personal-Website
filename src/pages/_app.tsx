import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import { ChakraProvider } from "@chakra-ui/react";
import chakraTheme from "../lib/ChakraTheme";
import Fonts from "../components/Fonts";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
  router,
}) => {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Fonts />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      {/* </Fonts> */}
    </ChakraProvider>
  );
};

export default trpc.withTRPC(MyApp);
