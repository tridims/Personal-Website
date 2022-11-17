import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";
import theme from "../lib/ChakraTheme";

export default function Chakra({
  cookies,
  children,
}: {
  cookies: any;
  children: React.ReactNode;
}) {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}

export async function getServerSideProps({ req }: any) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}
