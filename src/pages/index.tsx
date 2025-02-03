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
            Hello, I&apos;m a Developer and a Startup Founder from Indonesia.
          </Box>

          <Box display={{ md: "flex" }}>
            <Box flexGrow={1}>
              <Heading as="h2" variant="page-title">
                Dimas Tri Mustakim
              </Heading>
              <p> Developer | Open Source and Tech Enthusiast</p>
              <a href="mailto:me@dimastri.com">me@dimastri.com</a>
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
                  src="/images/bangkit.jpg"
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
            <Paragraph>
              I am a passionate developer eager to learn and grow in the field.
              I thrive in both collaborative group environments and independent
              work settings. My ultimate career goal is to become an exceptional
              software engineer, dedicated to building cutting-edge
              technologies. I possess a knack for quickly adapting to new
              technologies through leveraging various available resources.
            </Paragraph>
            <Paragraph>
              I am well versed in backend development, devops, and cloud
              infrastructure. I am proficient in programming languages such as
              Python, Go and Javascript/Typescript. I also enjoy building things
              using different tech stack. Beyond technical skills, I actively
              seek opportunities to develop my management and interpersonal
              skills. Throughout my career and studies, I have gained gained
              valuable experience by working on various projects.
            </Paragraph>
            <Box my={4} textAlign="center">
              <NextLink
                href="https://tridims.notion.site/Some-of-My-Works-5b58dbfbacd5407b9ed2d081d7cbb0b9?pvs=4"
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
              <NextLink href="/static/files/CV.pdf" passHref scroll={false}>
                <Link target="_blank" rel="noopener noreferrer">
                  <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                    My CV
                  </Button>
                </Link>
              </NextLink>
            </Box>
          </Section>

          <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
              Bio
            </Heading>
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
              My hobbies are quite diverse, and I particularly enjoy building
              things using a wide range of tech stacks. I love exploring various
              tech-related subjects, trying out different technologies, and
              creating small projects. In my free time, I find joy in
              experimenting with and utilizing different programming languages,
              deploying and exploring a variety of open-source applications that
              catch my attention, and building my own mini-lab on my computer.
              Additionally, I also like playing games, reading books, manga, and
              watching movies, anime, as well as youtube.
            </Paragraph>
          </Section>

          {/* <Section delay={0.4}>
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
          </Section> */}

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
                    My Github. @tridims
                  </Button>
                </Link>
                {/* <Box my={4} textAlign="center">
                  <NextLink
                    href="https://github.com/tridims"
                    target="_blank"
                    scroll={false}
                  >
                    <Button
                      leftIcon={<IoLogoGithub />}
                      colorScheme="teal"
                      marginRight={5}
                    >
                      @tridims (Dimas Tri)
                    </Button>
                  </NextLink>
                </Box> */}
              </ListItem>
              {/* <ListItem>
                <Link href="https://twitter.com/trididev" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoTwitter />}
                  >
                    @trididev
                  </Button>
                </Link>
              </ListItem> */}
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
                    My LinkedIn Profile
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
                    My Kaggle Profile
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://www.medium.com/@tridims" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoMedium />}
                  >
                    My Medium Blog Post
                  </Button>
                </Link>
              </ListItem>
              {/* <ListItem>
                <Link href="https://dev.to/tridims" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoGithub />}
                  >
                    My Dev.to Profile
                  </Button>
                </Link>
              </ListItem> */}
            </List>
          </Section>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
export { getServerSideProps } from "../components/Chakra";
