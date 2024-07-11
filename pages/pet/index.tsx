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
import { useSearchParams } from 'next/navigation';
import { PetType } from '@/core/type';

const pets: PetType[] = [
  {
    name: 'Brutus',
    characteristic: ['16mnd', '15kg', 'Reu', 'Type'],
    color: '#D13030',
    type: 'dog',
  },
  {
    name: 'Sjenkie',
    characteristic: ['10jr', '5kg', 'Reu', 'Type'],
    color: '#55BF52',
    type: 'cat',
  },
];

const index = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('pet');
  const petDetails = activeTab
    ? pets.find((pet) => pet.name.toLowerCase().includes(activeTab))
    : pets[0];

  if (!petDetails) {
    return <></>;
  }

  return (
    <>
      <Navbar type={NavbarType.PET_DETAIL} />
      <Container className="container" px={20}>
        <Flex mt={34} w={700} maw="100%" mx="auto" direction="column" gap={20}>
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
          <HealthBox petName={petDetails?.name} color={petDetails?.color} />
          <PetCharacteristic petDetails={petDetails} />
          <PetDetail petDetails={petDetails} />
        </Flex>
      </Container>
      <AddPetModal opened={opened} close={close} />
    </>
  );
};

export default index;
