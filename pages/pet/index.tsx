import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import { NavbarType } from '@/core/enum';
import { Container } from '@mantine/core';

const index = () => {
  return (
    <>
      <Navbar type={NavbarType.PET_DETAIL} />
      <Container className="container"></Container>
    </>
  );
};

export default index;
