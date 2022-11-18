import Navbar from "../components/Navbar";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Main = ({
  children,
  router,
}: {
  children: React.ReactNode;
  router: any;
}) => {
  return (
    <Box as="main" pb={8}>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
