import React from "react";
import { useColorMode, IconButton, Link, useDisclosure, Box } from "@chakra-ui/core";
import { MdMenu, MdClose } from "react-icons/md";

import { Nav, NavContainer, NavList, NavBrand, NavMenuButton } from "../molecules/Navbar";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen: isMenuOpen, onOpen: onMenuOpen, onClose: onMenuClose } = useDisclosure();

  return (
    <Nav>
      <NavContainer h='16' maxW='7xl' px={{ base: 4, md: 6, lg: 8 }}>
        <NavList isInline>
          <NavList isInline>
            {colorMode === "dark" ? (
              <>
                <NavBrand
                  d={{ base: "block", lg: "none" }}
                  h='8'
                  src='https://tailwindui.com/img/logos/workflow-mark-on-dark.svg'
                />
                <NavBrand
                  d={{ base: "none", lg: "block" }}
                  h='8'
                  src='https://tailwindui.com/img/logos/workflow-logo-on-dark.svg'
                />
              </>
            ) : (
              <>
                <NavBrand
                  d={{ base: "block", lg: "none" }}
                  h='8'
                  src='https://tailwindui.com/img/logos/workflow-mark-on-white.svg'
                />
                <NavBrand
                  d={{ base: "none", lg: "block" }}
                  h='8'
                  src='https://tailwindui.com/img/logos/workflow-logo-on-white.svg'
                />
              </>
            )}
          </NavList>
          <NavList d={{ base: "none", md: "flex" }} isInline spacing='4' ml='6'>
            <Link
              href='#test'
              px='3'
              py='2'
              rounded='md'
              fontSize='sm'
              fontWeight='medium'
              lineHeight='shorter'
              _focus={{
                outline: "none",
                color: "white",
                bg: "gray.700"
              }}
              _hover={{
                color: "white",
                bg: "gray.700",
                textDecoration: "none"
              }}
            >
              Dashboard
            </Link>
            <Link
              href='#test'
              px='3'
              py='2'
              rounded='md'
              fontSize='sm'
              fontWeight='medium'
              lineHeight='shorter'
              _focus={{
                outline: "none",
                color: "white",
                bg: "gray.700"
              }}
              _hover={{
                color: "white",
                bg: "gray.700",
                textDecoration: "none"
              }}
            >
              Team
            </Link>
            <Link
              href='#test'
              px='3'
              py='2'
              rounded='md'
              fontSize='sm'
              fontWeight='medium'
              lineHeight='shorter'
              _focus={{
                outline: "none",
                color: "white",
                bg: "gray.700"
              }}
              _hover={{
                color: "white",
                bg: "gray.700",
                textDecoration: "none"
              }}
            >
              Projects
            </Link>
            <Link
              href='#test'
              px='3'
              py='2'
              rounded='md'
              fontSize='sm'
              fontWeight='medium'
              lineHeight='shorter'
              _focus={{
                outline: "none",
                color: "white",
                bg: "gray.700"
              }}
              _hover={{
                color: "white",
                bg: "gray.700",
                textDecoration: "none"
              }}
            >
              Calendar
            </Link>
          </NavList>
        </NavList>
        <NavList isInline spacing='4'>
          <NavList>
            <IconButton icon='moon' onClick={toggleColorMode}></IconButton>
          </NavList>
          <NavList d={{ base: "flex", md: "none" }}>
            <NavMenuButton
              icon={isMenuOpen ? MdClose : MdMenu}
              onClick={isMenuOpen ? onMenuClose : onMenuOpen}
              fontSize='22px'
            />
          </NavList>
        </NavList>
      </NavContainer>
      <Box d={{ base: `${isMenuOpen ? "block" : "none"}`, md: "none" }}>
        <NavList spacing='1' px={{ base: 2, sm: 3 }} pt='2' pb='3'>
          <Link
            href='#test'
            d='block'
            px='3'
            py='2'
            rounded='md'
            fontSize='md'
            fontWeight='medium'
            color='white'
            bg='gray.900'
            _focus={{ outline: "none", bg: "gray.700", color: "white" }}
          >
            Dashboard
          </Link>
          <Link
            href='#'
            d='block'
            px='3'
            py='2'
            rounded='md'
            fontSize='md'
            fontWeight='medium'
            _hover={{
              color: "white",
              bg: "gray.700",
              textDecoration: "none"
            }}
            _focus={{ outline: "none", bg: "gray.700", color: "white" }}
          >
            Team
          </Link>
          <Link
            href='#'
            d='block'
            px='3'
            py='2'
            rounded='md'
            fontSize='md'
            fontWeight='medium'
            _hover={{
              color: "white",
              bg: "gray.700",
              textDecoration: "none"
            }}
            _focus={{ outline: "none", bg: "gray.700", color: "white" }}
          >
            Projects
          </Link>
          <Link
            href='#'
            d='block'
            px='3'
            py='2'
            rounded='md'
            fontSize='md'
            fontWeight='medium'
            _hover={{
              color: "white",
              bg: "gray.700",
              textDecoration: "none"
            }}
            _focus={{ outline: "none", bg: "gray.700", color: "white" }}
          >
            Calendar
          </Link>
        </NavList>
      </Box>
    </Nav>
  );
};

export default Navbar;
