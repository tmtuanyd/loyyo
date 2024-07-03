import React from 'react';
import { Box, Button, Container, Select, Text } from '@mantine/core';
import { IconChevronLeft, IconPaw, IconSearch, IconUser } from '@tabler/icons-react';
import classes from './Navbar.module.css';
import { NavbarType } from '@/core/enum';
import Link from 'next/link';
import Logo from '../../assets/svg/logo.svg';
import UserIcon from '../../assets/svg/user.svg';
import { useRouter } from 'next/navigation';

const Navbar = ({ type = NavbarType.DEFAULT }: { type?: NavbarType }) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <Container bg="#FFFFFF" h={65} w="100%" maw="unset" className={classes.root}>
      <Container h="100%" w="100%" className={classes.center}>
        <Box className={classes.space} w="calc((100% - 80px) / 2)" py={10}>
          <Logo />
          <Box className={classes.right}>
            {type !== NavbarType.DEFAULT && (
              <Box onClick={handleBack} className={classes.right}>
                <IconChevronLeft color="var(--mantine-color-blue-filled)" />
                <Text c="blue" fw={600} mr={15}>
                  Terug
                </Text>
              </Box>
            )}
          </Box>
        </Box>
        <Box w={80} className={classes.center}>
          <Button variant="filled" color="red" className={classes.button}>
            {type === NavbarType.DEFAULT && <IconSearch />}
            {type === NavbarType.MEMBER && <UserIcon className={classes.whiteIcon} />}
            {type === NavbarType.PET_DETAIL && <IconPaw />}
          </Button>
        </Box>

        <Box display="flex" className={classes.right} w="calc((100% - 80px) / 2)">
          <Text c="gray" fw={700} fz={12}>
            POS:
          </Text>
          <Select label="" placeholder="Kassa of locatie naam" ml={8} />
        </Box>
      </Container>
    </Container>
  );
};

export default Navbar;
