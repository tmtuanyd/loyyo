import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import { NavbarType } from '@/core/enum';
import { Container, Flex } from '@mantine/core';
import PetCharacteristic from './components/PetCharacteristic';
import PetDetail from './components/PetDetail';
import PetTabs from './components/PetTabs';
import HealthBox from './components/HealthBox';

const index = () => {
  return (
    <>
      <Navbar type={NavbarType.PET_DETAIL} />
      <Container className="container">
        <Flex mt={34} w={700} maw="90%" mx="auto" direction="column" gap={20}>
          <PetTabs />
          <HealthBox />
          <PetCharacteristic />
          <PetDetail />
        </Flex>
      </Container>
    </>
  );
};

export default index;
