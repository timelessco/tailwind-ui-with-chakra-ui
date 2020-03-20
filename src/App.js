import React from "react";
import { Box, Flex, Image, Link, Icon, PseudoBox, Stack } from "@chakra-ui/core";

import "./App.css";

function App() {
  return (
    <div>
      <Box as='nav' bg='gray.800'>
        <Box maxW='7xl' mx='auto' px={{ base: 4, md: 6, lg: 8 }}>
          <Flex align='center' justify='space-between' h='16'>
            <Flex align='center'>
              <Box flexShrink='0'>
                <Image h='8' w='8' src='https://tailwindui.com/img/logos/workflow-mark-on-dark.svg' />
              </Box>
              <Box d={{ base: "none", md: "block" }}>
                <Stack spacing='4' isInline ml='10' align='baseline'>
                  <Link
                    href='#test'
                    px='3'
                    py='2'
                    rounded='md'
                    color='white'
                    bg='gray.900'
                    fontWeight='medium'
                    fontSize='sm'
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
                    color='gray.300'
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
                    color='gray.300'
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
                    color='gray.300'
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
                  <Link
                    href='#test'
                    px='3'
                    py='2'
                    rounded='md'
                    fontSize='sm'
                    fontWeight='medium'
                    color='gray.300'
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
                    Reports
                  </Link>
                </Stack>
              </Box>
            </Flex>
            <Box d={{ base: "none", md: "block" }}>
              <Flex align='center' ml={{ base: 4, md: 6 }}>
                <PseudoBox
                  as='button'
                  p='1'
                  borderWidth='2px'
                  borderColor='transparent'
                  color='gray.400'
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
                <PseudoBox
                  as='button'
                  ml='3'
                  pos='relative'
                  maxW='xs'
                  align='center'
                  fontSize='sm'
                  rounded='full'
                  color='white'
                  _focus={{ outline: "none", shadow: "0 0 0 2px currentColor" }}
                >
                  <Image
                    size='8'
                    rounded='full'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt='Person literally smiling at you'
                  />
                </PseudoBox>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}

export default App;
