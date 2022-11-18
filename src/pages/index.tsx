import { type NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";

import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Paragraph from "../components/Paragraph";
import { BioSection, BioYear } from "../components/Bio";
import Layout from "../layouts/Article";
import Section from "../components/Section";
import { GridItem } from "../components/GridItem";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";
import Image from "next/legacy/image";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home: NextPage = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          my={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          css={{ backdropFilter: "blur(10px)" }}
        >
          Hello, I&apos;m a computer science student from Indonesia.
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Dimas Tri Mustakim
            </Heading>
            <p>
              Digital Craftsman ( Developer ), Open Source and Tech Enthusiast
            </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/dimas.jpg"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I am a student in Brawijaya University in my second year. Currently
            I have interest in Software Engineering, Full-Stack Development,
            Machine Learning, and Security. Not yet to decide which one i would
            really want, but i belive that learning all of those will be helpful
            in building good stuff in the future. You can checkout my website in{" "}
            <NextLink
              href="https://www.dimastri.online"
              passHref
              legacyBehavior
            >
              <Link>here.</Link>
            </NextLink>
          </Paragraph>
          <Box my={4} textAlign="center">
            <NextLink href="/works" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2001</BioYear>
            Born in Batu City, East Java, Indonesia.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Started education in Brawijaya University, Computer Science Major.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥ (Hobbys and Interests)
          </Heading>
          <Paragraph>
            Exploring tech related stuff, reading manga, {""}
            <Link href="#" target="_blank">
              Data Science, Machine Learning
            </Link>
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web (Social Media)
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/tridims" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @tridims (Dimas Tri)
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/trididev" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  @trididev
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/dmstr_31" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @dmstr_31
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  Dimas Tri Mustakim
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
export { getServerSideProps } from "../components/Chakra";
