import React from "react";
import { Box, Flex, Image, Link, Icon } from "@chakra-ui/core";

import "./App.css";

function App() {
  return (
    <div>
      <Box as='nav' bg='gray.800'>
        <Box maxW='7xl' mx='auto' px={{ base: 4, md: 6, lg: 8 }}>
          <Flex align='center' justify='between' h='16'>
            <Flex align='center'>
              <Box flexShrink='0'>
                <Image h='8' w='8' src='https://tailwindui.com/img/logos/workflow-mark-on-dark.svg' />
              </Box>
              <Box display={{ base: "none", md: "block" }}>
                <Flex ml='10' align='baseline'>
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
                    ml='4'
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
                    ml='4'
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
                    ml='4'
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
                    ml='4'
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
                </Flex>
              </Box>
            </Flex>
            <Box display={{ base: "none", md: "block" }}>
              <Flex align='center' ml={{ base: 4, md: 6 }}>
                <Icon sizes='6' />
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}

export default App;
