import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import { NavbarType } from '@/core/enum';
import { Button, Container, Flex } from '@mantine/core';
import PetCharacteristic from './components/PetCharacteristic';
import PetDetail from './components/PetDetail';
import PetTabs from './components/PetTabs';
import HealthBox from './components/HealthBox';
import { IconPlus } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import AddPetModal from './components/AddPetModal';

const index = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Navbar type={NavbarType.PET_DETAIL} />
      <Container className="container">
        <Flex mt={34} w={700} maw="90%" mx="auto" direction="column" gap={20}>
          <Flex align="center" pos="relative">
            <PetTabs />
            <Button
              variant="filled"
              c="blue"
              pos="absolute"
              right={0}
              w={{ base: 30, lg: 50 }}
              h={{ base: 30, lg: 50 }}
              p={0}
              style={{ borderRadius: 12 }}
              onClick={open}
            >
              <IconPlus color="white" />
            </Button>
          </Flex>
          <HealthBox />
          <PetCharacteristic />
          <PetDetail />
        </Flex>
      </Container>
      <AddPetModal opened={opened} close={close} />
    </>
  );
};

export default index;
