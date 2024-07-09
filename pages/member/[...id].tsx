import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import { NavbarType } from '@/core/enum';
import { Container, Flex } from '@mantine/core';
import MemberTabs from './components/MemberTab';
import HealthBox from '../pet/components/HealthBox';
import UserCharacteristic from './components/UserCharacteristic';
import MemberInfo from './components/MemberInfo';

const MemberDetails = () => {
  return (
    <>
      <Navbar type={NavbarType.MEMBER} />
      <Container className="container" px={20}>
        <Flex mt={34} w={700} maw="100%" mx="auto" direction="column" gap={15}>
          <MemberTabs />
          <HealthBox />
          <UserCharacteristic />
          <MemberInfo />
        </Flex>
      </Container>
    </>
  );
};

export default MemberDetails;
