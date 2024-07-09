import React from 'react';
import { Box, Button, Container, Select, Text } from '@mantine/core';
import { IconChevronDown, IconChevronLeft, IconSearch } from '@tabler/icons-react';
import classes from './Navbar.module.css';
import { NavbarType } from '@/core/enum';
import Logo from '@/assets/svg/logo.svg';
import UserIcon from '@/assets/svg/user.svg';
import PawIcon from '@/assets/svg/pawprint.svg';
import { useRouter } from 'next/navigation';
import DrawerMenu from '../DrawerMenu/DrawerMenu';

const Navbar = ({ type = NavbarType.DEFAULT }: { type?: NavbarType }) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <Container bg="#FFFFFF" px={0} h={65} w="100%" maw="unset" className={classes.root}>
      <Container h="100%" w="100%" className={classes.center}>
        <Box
          className={classes.space}
          w={{ base: 'calc(50% + 45px)', lg: 'calc((100% - 80px) / 2)' }}
          py={10}
        >
          <Logo className={classes.logo} onClick={() => router.push('/')} />
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
        <Box w={80} className={`${classes.center} ${classes.iconButton}`}>
          <Button variant="filled" color="red" className={classes.button}>
            {type === NavbarType.DEFAULT && <IconSearch />}
            {type === NavbarType.MEMBER && <UserIcon className={classes.whiteIcon} />}
            {type === NavbarType.PET_DETAIL && <PawIcon />}
          </Button>
        </Box>

        <Box
          display={{ base: 'none', lg: 'flex' }}
          className={classes.right}
          w="calc((100% - 80px) / 2)"
        >
          <Text c="#737A81" fw={700} fz={12}>
            POS:
          </Text>
          <Select
            label=""
            placeholder="Kassa of locatie naam"
            ml={8}
            rightSection={<IconChevronDown size={24} color="black" />}
            classNames={{ input: classes.selectInput }}
            data={['Option 1', 'Option 2']}
          />
        </Box>
        <Box display={{ base: 'initial', lg: 'none' }}>
          <DrawerMenu />
        </Box>
      </Container>
    </Container>
  );
};

export default Navbar;
