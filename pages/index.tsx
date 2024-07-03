import Navbar from '@/components/Navbar/Navbar';
import SearchBar from '@/components/SearchBar/SearchBar';
import { Box, Container, Text } from '@mantine/core';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Container
        display="flex"
        style={{ flexDirection: 'column', justifyContent: 'space-around' }}
        h="calc(100vh - 65px)"
        pt={65}
      >
        <SearchBar />
        <Box
          h={175}
          w={560}
          maw="100%"
          bg="#CFE5F5"
          style={{
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          mx="auto"
          px={32}
        >
          <Text c="blue" ta="center" fw={700} size="lg">
            Zoek een member, voeg een member toe, scan een pass of wacht op een betaling
          </Text>
        </Box>
        <Box component="a" href="/" c="blue" ta="center" mx="auto">
          Need help?
        </Box>
      </Container>
    </>
  );
}
