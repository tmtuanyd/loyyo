import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import { NavbarType } from '@/core/enum';
import { Box, Container, Flex, Grid, Text } from '@mantine/core';
import classes from './Member.module.css';
import UserIcon from '../../assets/svg/user.svg';
import PawPrintIcon from '../../assets/svg/pawprint.svg';
import DogIcon from '../../assets/svg/dog.svg';
import CatIcon from '../../assets/svg/cat.svg';
import { IconChevronDown, IconChevronRight } from '@tabler/icons-react';
import PetRow from '@/components/PetRow/PetRow';

const index = () => {
  const petsData = [
    {
      icon: <DogIcon />,
      describe: 'Brutus - 16mnd - 15kg',
      active: false,
    },
    { icon: <CatIcon />, describe: 'Sjenkie - 10jr - 5kg', active: true },
  ];

  return (
    <>
      <Navbar type={NavbarType.MEMBER} />
      <Container className="container">
        <Flex mt={68} w={700} maw="90%" mx="auto" direction={{ base: 'column', lg: 'row' }}>
          <Flex
            w={{ base: '100%', lg: '50%' }}
            bg="green"
            pos="relative"
            h={{ base: 205, lg: 184 }}
            className={classes.leftBox}
            direction="column"
            c="white"
          >
            <Box
              bg="white"
              className={`roundIcon ${classes.leftIcon}`}
              pos="absolute"
              left="50%"
              top={0}
            >
              <UserIcon />
            </Box>
            <Flex gap={18} align="center" justify="center" my={37}>
              <Text fz={20} fw={700}>
                Wouter Meeuwisse
              </Text>
              <IconChevronRight />
            </Flex>
            <Grid>
              <Grid.Col span={4} ta="center">
                <Text fw={700} fz={24}>
                  19
                </Text>
                <Text fz={12}>bezoeken</Text>
              </Grid.Col>
              <Grid.Col span={4} ta="center">
                <Text fw={700} fz={24}>
                  Premium
                </Text>
                <Text fz={12}>#4509403220</Text>
              </Grid.Col>
              <Grid.Col span={4} ta="center">
                <Text fw={700} fz={24}>
                  2
                </Text>
                <Text fz={12}>Pets</Text>
              </Grid.Col>
            </Grid>
          </Flex>
          <Flex
            w={{ base: '100%', lg: '50%' }}
            pos="relative"
            bg="white"
            h={184}
            className={classes.rightBox}
            direction="column"
            px={29}
            justify="center"
            gap={10}
          >
            <Box
              bg="green"
              className={`roundIcon ${classes.rightIcon}`}
              pos="absolute"
              left="50%"
              top={0}
            >
              <PawPrintIcon />
            </Box>
            {petsData.map((pet, index) => (
              <React.Fragment key={index}>
                <PetRow icon={pet.icon} petInfo={pet.describe} isActive={pet.active} />
                {index < petsData.length - 1 && <Box w="100%" h={1} bg="gray" />}
              </React.Fragment>
            ))}
          </Flex>
        </Flex>
        <Box className={classes.select}>
          Select action <IconChevronDown />
        </Box>
        <Box component="a" href="/" c="blue" ta="center" mx="auto" mt="auto">
          Need help?
        </Box>
      </Container>
    </>
  );
};

export default index;
