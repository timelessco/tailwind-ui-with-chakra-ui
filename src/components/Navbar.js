import React from "react";
import { Box, Flex } from "@chakra-ui/core";

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

export const NavbarGroup = ({ children, ...props }) => {
  return (
    <Flex align='center' {...props}>
      {children}
    </Flex>
  );
};

export const NavbarBrand = ({ children, ...props }) => {
  return (
    <Flex align='center' flexShrink='0' {...props}>
      {children}
    </Flex>
  );
};
