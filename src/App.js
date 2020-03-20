import React from "react";
import { Box, Flex, Image, Link, Icon, Button, Stack, PseudoBox, useDisclosure, useColorMode } from "@chakra-ui/core";
import { Navbar, NavbarList, NavbarContainer, NavbarBrand } from "./components/Navbar";

import "./App.css";

function App() {
  const { isOpen: isDialogOpen, onOpen: onDialogOpen, onClose: onDialogClose } = useDisclosure();
  const { isOpen: isMenuOpen, onOpen: onMenuOpen, onClose: onMenuClose } = useDisclosure();
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
            <NavbarList d={{ base: "flex", md: "none" }} mr='2' ml='-8px'>
              <PseudoBox
                as='button'
                d='inline-flex'
                alignItems='center'
                justifyContent='center'
                p='2'
                text='gray.400'
                bg='transparent'
                borderWidth='2px'
                borderColor='transparent'
                rounded='md'
                _hover={{
                  color: "white",
                  bg: "gray.700"
                }}
                _focus={{
                  outline: "none",
                  color: "white",
                  bg: "gray.700"
                }}
                onClick={isMenuOpen ? onMenuClose : onMenuOpen}
              >
                <Icon size='6' name={isMenuOpen ? "tw-cross" : "tw-hamburger"} />
              </PseudoBox>
            </NavbarList>
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
            <Link
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
              <Icon name='tw-plus' ml='-.25rem' mr='2' h='5' w='5' />
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
                onClick={isDialogOpen ? onDialogClose : onDialogOpen}
              >
                <Image
                  size='8'
                  rounded='full'
                  src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt='Person literally smiling at you'
                />
              </PseudoBox>
              <Box pos='absolute' right='0' top='8' mt='2' w='48' rounded='md' shadow='lg' transformOrigin='top right'>
                {isDialogOpen && (
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
      <Box d={{ base: `${isMenuOpen ? "block" : "none"}`, md: "none" }}>
        <Stack spacing='1' px={{ base: 2, sm: 3 }} pt='2' pb='3'>
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
        </Stack>
        <Box pt='4' pb='3' borderTopWidth='1px' borderColor='gray.700'>
          <Flex align='center' px={{ base: "5", sm: "6" }}>
            <Box flexShrink='0'>
              <Image
                h='10'
                w='10'
                rounded='full'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt='Profile Picture'
              />
            </Box>
            <Box ml='3'>
              <Box fontSize='md' fontWeight='medium' lineHeight='base' color='white'>
                Tom Cook
              </Box>
              <Box fontSize='sm' fontWeight='medium' lineHeight='shorter' color='gray.400'>
                tom@example.com
              </Box>
            </Box>
          </Flex>
          <Stack spacing='1' px={{ base: 2, sm: 3 }} pt='2' pb='3'>
            <Link
              href='#test'
              d='block'
              px='3'
              py='2'
              rounded='md'
              fontSize='md'
              fontWeight='medium'
              color='gray.400'
              _hover={{
                color: "white",
                bg: "gray.700",
                textDecoration: "none"
              }}
              _focus={{ outline: "none", bg: "gray.700", color: "white" }}
            >
              Your Profile
            </Link>
            <Link
              href='#'
              d='block'
              px='3'
              py='2'
              rounded='md'
              fontSize='md'
              fontWeight='medium'
              color='gray.400'
              _hover={{
                color: "white",
                bg: "gray.700",
                textDecoration: "none"
              }}
              _focus={{ outline: "none", bg: "gray.700", color: "white" }}
            >
              Settings
            </Link>
            <PseudoBox
              as='button'
              px='3'
              py='2'
              rounded='md'
              fontSize='md'
              fontWeight='medium'
              color='gray.400'
              textAlign='left'
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
              {colorMode === "light" ? "Dark" : "Light"} Mode
            </PseudoBox>
            <Link
              href='#'
              d='block'
              px='3'
              py='2'
              rounded='md'
              fontSize='md'
              fontWeight='medium'
              color='gray.400'
              _hover={{
                color: "white",
                bg: "gray.700",
                textDecoration: "none"
              }}
              _focus={{ outline: "none", bg: "gray.700", color: "white" }}
            >
              Sign out
            </Link>
          </Stack>
        </Box>
      </Box>
    </Navbar>
  );
}

export default App;
