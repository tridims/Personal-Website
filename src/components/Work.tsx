import NextLink from "next/link";
import { Heading, Box, Image, Link, Badge } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

type ChildrenOnlyProps = {
  children: React.ReactNode;
};

export const Title = ({ children }: ChildrenOnlyProps) => (
  <Box>
    <NextLink href="/works" passHref legacyBehavior>
      <Link>Works</Link>
    </NextLink>
    <span>
      {" "}
      <ChevronRightIcon />{" "}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);

type WorkImageProps = {
  src: string;
  alt: string;
};

export const WorkImage = ({ src, alt }: WorkImageProps) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
);

export const Meta = ({ children }: ChildrenOnlyProps) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);
