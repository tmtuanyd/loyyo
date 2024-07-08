import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import { NavbarType } from '@/core/enum';
import { Container, Flex } from '@mantine/core';
import MemberTabs from './components/MemberTab';
import HealthBox from '../pet/components/HealthBox';

const MemberDetails = () => {
  return (
    <>
      <Navbar type={NavbarType.MEMBER} />
      <Container className="container">
        <Flex mt={34} w={700} maw="90%" mx="auto" direction="column" gap={20}>
          <MemberTabs />
          <HealthBox />
        </Flex>
      </Container>
    </>
  );
};

export default MemberDetails;
