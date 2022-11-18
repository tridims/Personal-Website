import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";
import Fonts from "../components/Fonts";
import Layout from "../layouts/Main";
import Chakra from "../components/Chakra";
import { AnimatePresence } from "framer-motion";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps: { session, ...pageProps }, router }) => {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <SessionProvider session={session}>
        <Layout router={router}>
          <AnimatePresence
            exitBeforeEnter
            initial={true}
            onExitComplete={() => {
              window.scrollTo({ top: 0 });
            }}
          >
            <Component {...pageProps} />
          </AnimatePresence>
        </Layout>
      </SessionProvider>
    </Chakra>
  );
};

export default trpc.withTRPC(MyApp);
