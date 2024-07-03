import Navbar from '@/components/Navbar/Navbar';
import { NavbarType } from '@/core/enum';
import React from 'react';

const index = () => {
  return (
    <>
      <Navbar type={NavbarType.MEMBER} />
    </>
  );
};

export default index;
