import React from "react";
import { Box, Flex, Stack, Link } from "@chakra-ui/core";

export const Navbar = ({ children, ...props }) => {
  return (
    <Box as='nav' {...props}>
      {children}
    </Box>
  );
};

export const NavbarContainer = ({ children, ...props }) => {
  return (
    <Flex align='center' justify='space-between' mx='auto' {...props}>
      {children}
    </Flex>
  );
};

export const NavbarList = ({ children, ...props }) => {
  return (
    <Stack isInline align='center' {...props}>
      {children}
    </Stack>
  );
};

export const NavbarBrand = ({ children, ...props }) => {
  return (
    <Flex align='center' flexShrink='0' {...props}>
      {children}
    </Flex>
  );
};

export const NavbarLink = ({ children, ...props }) => {
  return <Link {...props}>{children}</Link>;
};
