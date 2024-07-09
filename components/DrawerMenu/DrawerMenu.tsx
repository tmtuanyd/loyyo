import React from 'react';
import { IconMenu2 } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Drawer } from '@mantine/core';

const DrawerMenu = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <IconMenu2 color="var(--mantine-color-blue-filled)" onClick={open} size={27} />
      <Drawer opened={opened} onClose={close} title="Menu" size="100%" trapFocus={false}></Drawer>
    </>
  );
};

export default DrawerMenu;
