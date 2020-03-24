import React from "react";
import { Box, Flex, Stack, Image, IconButton } from "@chakra-ui/core";

export const Nav = ({ children, ...props }) => {
  return (
    <Box as='nav' {...props}>
      {children}
    </Box>
  );
};

export const NavContainer = ({ children, ...props }) => {
  return (
    <Flex align='center' justify='space-between' mx='auto' {...props}>
      {children}
    </Flex>
  );
};

export const NavList = ({ children, ...props }) => {
  return (
    <Stack align='center' {...props}>
      {children}
    </Stack>
  );
};

export const NavBrand = ({ children, ...props }) => {
  return (
    <Flex align='center' flexShrink='0' {...props}>
      <Image {...props}>{children}</Image>
    </Flex>
  );
};

export const NavMenuButton = ({ children, ...props }) => {
  return <IconButton {...props} />;
};
