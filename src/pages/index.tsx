import { type NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";

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
  IoLogoMedium,
} from "react-icons/io5";

import { FaKaggle } from "react-icons/fa";

import Image from "next/legacy/image";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dimas Tri Mustakim</title>
      </Head>
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
              <p>Computer Science Student | Open Source and Tech Enthusiast</p>
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
                  alt="Profile image, Hosted at Google Cloud Storage"
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
            {/* <Paragraph>
              I am a student in Brawijaya University in my second year.
              Currently I have interest in Software Engineering, Full-Stack
              Development, Machine Learning, and Security. Not yet to decide
              which one i would really want, but i belive that learning all of
              those will be helpful in building good stuff in the future.
            </Paragraph> */}
            <Paragraph>
              I am a computer science student who is passionate about learning
              and growing. I am currently looking for early professional
              experience. I am open to working in a group environment as well as
              working alone, and I enjoy working with people who are also
              interested in learning and improving. My short-term career goals
              include becoming a software engineer and in the long term want to
              make software as a service startup.
            </Paragraph>
            <Paragraph>
              I have worked with computer programming since before entering
              college, where I learned how to program and then taught myself
              more advanced concepts. I have been able to pick up new
              technologies quickly by listen to lessons in college, reading
              documentation and tutorials online, as well as building small
              project.
            </Paragraph>
            <Box my={4} textAlign="center">
              <NextLink
                href="https://www.notion.so/Portofolio-Dimas-Tri-Mustakim-377bf502fef8477e889905ae50a439fd"
                scroll={false}
                target="_blank"
              >
                <Button
                  rightIcon={<ChevronRightIcon />}
                  colorScheme="teal"
                  marginRight={5}
                >
                  My portfolio
                </Button>
              </NextLink>
              <NextLink href="#" scroll={false} target="_blank">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  My CV
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
              Hobbies
            </Heading>
            <Paragraph>
              My hobbies are pretty diverse. I love exploring tech-related
              stuff, trying different tech stacks, and creating some small
              projects. I also like reading books, mangas, and watching youtube
              videos.
            </Paragraph>
          </Section>

          <Section delay={0.4}>
            <Heading as="h3" variant="section-title">
              Blog
            </Heading>
            <Box my={4} textAlign="center">
              <NextLink
                href="https://www.medium.com/@tridim"
                scroll={false}
                target="_blank"
              >
                <Button
                  rightIcon={<ChevronRightIcon />}
                  colorScheme="teal"
                  marginRight={5}
                >
                  Read my articles on Medium!
                </Button>
              </NextLink>
            </Box>
          </Section>

          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
              Me on the web
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
                <Link
                  href="https://www.linkedin.com/in/dimastrim"
                  target="_blank"
                >
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoLinkedin />}
                  >
                    Dimas Tri Mustakim
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://www.kaggle.com/dimastri" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<FaKaggle />}
                  >
                    Dimas Tri Mustakim
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://www.medium.com/@tridim" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoMedium />}
                  >
                    Dimas Tri Mustakim
                  </Button>
                </Link>
              </ListItem>
            </List>
          </Section>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
export { getServerSideProps } from "../components/Chakra";
