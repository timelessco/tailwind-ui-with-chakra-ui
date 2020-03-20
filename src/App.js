import React from "react";
import { Box, Flex, Image, Link, Icon, Button, PseudoBox, useDisclosure, useColorMode } from "@chakra-ui/core";
import { Navbar, NavbarList, NavbarContainer, NavbarBrand, NavbarLink } from "./components/Navbar";

import "./App.css";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    /* =========================================================================
      Box component as HTML Native nav tag
      Specify Color and Background for the nav here with ColorMode
      ========================================================================== */
    <Navbar color='gray.300' bg='transparent'>
      {/* =========================================================================
        Flex component with align center, justify space-between and mx auto(centered horizontally)
        ========================================================================== */}
      <NavbarContainer h='16' maxW='7xl' px={{ base: 4, md: 6, lg: 8 }}>
        {/* =========================================================================
        Flex Component with align center to group two groups of nav items
        ========================================================================== */}
        <NavbarList>
          {/* =========================================================================
          Flex Component with align center and flex shrink 0 to group Brand Icon
          ========================================================================== */}
          <NavbarBrand>
            {colorMode === "dark" ? (
              <>
                <Image
                  d={{ base: "block", lg: "none" }}
                  h='8'
                  src='https://tailwindui.com/img/logos/workflow-mark-on-dark.svg'
                />
                <Image
                  d={{ base: "none", lg: "block" }}
                  h='8'
                  src='https://tailwindui.com/img/logos/workflow-logo-on-dark.svg'
                />
              </>
            ) : (
              <>
                <Image
                  d={{ base: "block", lg: "none" }}
                  h='8'
                  src='https://tailwindui.com/img/logos/workflow-mark-on-white.svg'
                />
                <Image
                  d={{ base: "none", lg: "block" }}
                  h='8'
                  src='https://tailwindui.com/img/logos/workflow-logo-on-white.svg'
                />
              </>
            )}
          </NavbarBrand>
          <NavbarList d={{ base: "none", md: "flex" }} spacing='4' ml='6'>
            <NavbarLink
              href='#test'
              px='3'
              py='2'
              rounded='md'
              color='white'
              bg='gray.900'
              fontSize='sm'
              fontWeight='medium'
              lineHeight='shorter'
              _focus={{
                outline: "none",
                bg: "gray.700"
              }}
              _hover={{
                textDecoration: "none"
              }}
            >
              Dashboard
            </NavbarLink>
            <NavbarLink
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
            </NavbarLink>
            <NavbarLink
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
            </NavbarLink>
            <NavbarLink
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
            </NavbarLink>
          </NavbarList>
        </NavbarList>
        <NavbarList spacing='4' color='gray.400'>
          <Box flexShrink='0' rounded='md' shadow='sm'>
            <Button
              py='2'
              rounded='md'
              fontWeight='medium'
              color='white'
              bg='indigo.500'
              lineHeight='shorter'
              borderWidth='1px'
              borderColor='transparent'
              _hover={{
                bg: "indigo.400"
              }}
              _focus={{
                outline: "none",
                shadow: "outlineIndigo",
                borderColor: "indigo.600"
              }}
              _active={{
                bg: "indigo.600"
              }}
            >
              <Icon name='small-add' ml='-.25rem' mr='2' h='5' w='5' />
              <span>New Job</span>
            </Button>
          </Box>
          <NavbarList spacing='3' d={{ base: "none", md: "flex" }}>
            <PseudoBox
              as='button'
              p='1'
              borderWidth='2px'
              borderColor='transparent'
              rounded='full'
              _hover={{
                color: "white"
              }}
              _focus={{
                outline: "none",
                color: "white",
                bg: "gray.700"
              }}
              onClick={toggleColorMode}
            >
              <Icon size='6' name={colorMode === "light" ? "moon" : "sun"} />
            </PseudoBox>
            <PseudoBox
              as='button'
              p='1'
              borderWidth='2px'
              borderColor='transparent'
              rounded='full'
              _hover={{
                color: "white"
              }}
              _focus={{
                outline: "none",
                color: "white",
                bg: "gray.700"
              }}
            >
              <Icon size='6' name='tw-bell' />
            </PseudoBox>
            <Flex pos='relative'>
              <PseudoBox
                as='button'
                maxW='xs'
                align='center'
                fontSize='sm'
                rounded='full'
                color='white'
                _focus={{ outline: "none", shadow: "0 0 0 2px currentColor" }}
                onClick={isOpen ? onClose : onOpen}
              >
                <Image
                  size='8'
                  rounded='full'
                  src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt='Person literally smiling at you'
                />
              </PseudoBox>
              <Box pos='absolute' right='0' top='8' mt='2' w='48' rounded='md' shadow='lg' transformOrigin='top right'>
                {isOpen && (
                  <Box py='1' rounded='md' bg='white' shadow='xs'>
                    <Link
                      href='#test'
                      d='block'
                      px='4'
                      py='2'
                      fontSize='sm'
                      color='gray.700'
                      _hover={{ bg: "gray.100" }}
                      _focus={{ outline: "none", bg: "gray.100" }}
                    >
                      Your Profile
                    </Link>
                    <Link
                      href='#test'
                      d='block'
                      px='4'
                      py='2'
                      fontSize='sm'
                      color='gray.700'
                      _hover={{ bg: "gray.100" }}
                      _focus={{ outline: "none", bg: "gray.100" }}
                    >
                      Settings
                    </Link>
                    <Link
                      href='#test'
                      d='block'
                      px='4'
                      py='2'
                      fontSize='sm'
                      color='gray.700'
                      _hover={{ bg: "gray.100" }}
                      _focus={{ outline: "none", bg: "gray.100" }}
                    >
                      Sign out
                    </Link>
                  </Box>
                )}
              </Box>
            </Flex>
          </NavbarList>
        </NavbarList>
      </NavbarContainer>
    </Navbar>
  );
}

export default App;
