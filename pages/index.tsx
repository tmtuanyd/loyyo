import Navbar from '@/components/Navbar/Navbar';
import SearchBar from '@/components/SearchBar/SearchBar';
import { Box, Container, Flex, Text } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './index.module.css';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Container className="container" w="100%" maw="unset" px={0}>
        <SearchBar />
        <Box
          h={175}
          w={{ base: '100%', lg: 560 }}
          maw="100%"
          bg="#CFE5F5"
          className={classes.infoBox}
          mx="auto"
          px={32}
        >
          <Text c="blue" ta="center" fw={700} size="lg">
            Zoek een member, voeg een member toe, scan een pass of wacht op een betaling
          </Text>
        </Box>
        <Flex display={{ base: 'flex', lg: 'none' }} h="112px" bg="white">
          <Box className={classes.select}>
            No action available <IconChevronDown />
          </Box>
        </Flex>
        <Box component="a" href="/" c="blue" ta="center" mx="auto" mt="auto">
          Need help?
        </Box>
      </Container>
    </>
  );
}
