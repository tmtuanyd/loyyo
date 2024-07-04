import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import { NavbarType, PetInfo } from '@/core/enum';
import { Accordion, Box, Container, Flex, Text } from '@mantine/core';
import DogIcon from '../../assets/svg/dog.svg';
import CatIcon from '../../assets/svg/cat.svg';
import HearIcon from '../../assets/svg/heart-beat.svg';
import classes from './Pet.module.css';
import { PET_ACTIVITY } from '@/core/constants/PetActivity.constance';
import PetActiveBox from '@/components/PetActiveBox/PetActiveBox';
import { IconChevronRight } from '@tabler/icons-react';
import Slider from 'react-slick';

//mock data
const petDetails = {
  name: 'Brutus',
  characteristic: ['16mnd', '15kg', 'Reu', 'Type'],
};

const actionData = [
  {
    title: 'Wegen',
    description: '14 juni 2023',
    suffix: 'kg',
    value: '15',
    color: '#228BE6',
  },
  {
    title: 'Voedingadvies',
    description: '',
    suffix: '',
    value: 'Bekijk advies',
    color: '#8422E6',
  },
  {
    title: 'Ontworming',
    description: 'Laatste kuur: <6 mnd',
    suffix: '',
    value: 'Start kuur',
    color: '#7BC4A8',
  },
];

const lifecycleData = [
  {
    date: '19 januari 2023',
    value: 'Brutus geboren',
  },
  {
    date: '23 maart 2023',
    value: 'Brutus komt thuis bij Wouter Meeuwisse',
  },
  {
    date: '1 April 2023',
    value: 'Brutus en Wouter komen voor het eerst samen bij PetsPlace',
  },
];

const index = () => {
  return (
    <>
      <Navbar type={NavbarType.PET_DETAIL} />
      <Container className="container">
        <Flex mt={34} w={700} maw="90%" mx="auto" direction="column" gap={20}>
          <Flex w={241} className={classes.tabs} bg="white" mx="auto" p={6} justify="space-between">
            <Flex
              h="100%"
              align="center"
              gap={10}
              className={`${classes.tab} ${classes.tabActive}`}
            >
              <Box pos="relative" className="inactive">
                <DogIcon />
              </Box>
              <Text c="blue" fz={14} fw={600}>
                Brutus
              </Text>
            </Flex>
            <Flex h="100%" align="center" gap={10} className={classes.tab}>
              <Box pos="relative" className="active">
                <CatIcon />
              </Box>
              <Text c="blue" fz={14} fw={600}>
                Sjenkie
              </Text>
            </Flex>
          </Flex>
          <Flex w="100%" bg="red" align="center" gap={22} className={classes.banner}>
            <HearIcon />
            <Text fz={20} fw="bold">
              Health Point: Brutus is al meer dan een jaar niet gewogen!
            </Text>
          </Flex>
          <Flex gap={20} align="center">
            <DogIcon className={classes.dogDetails} />
            <Text c="blue" fz={20} fw="bold">
              {petDetails.name}
            </Text>
            <Flex gap={5}>
              {petDetails.characteristic.map((item) => (
                <Box key={item} c="white" className={classes.characteristic}>
                  <Text fz={20} fw="bold">
                    {item}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Flex>
          <Accordion multiple classNames={{ chevron: classes.chevron, label: classes.label }}>
            {PET_ACTIVITY.map((item) => {
              const Icon = item.icon;
              return (
                <Accordion.Item
                  key={item.value}
                  value={item.value}
                  bg="white"
                  className={classes.accordion}
                >
                  <Accordion.Control icon={<Icon />}>
                    {`${item.title} ${item.value === PetInfo.LIFECYCLE ? petDetails.name : ''}`}
                  </Accordion.Control>
                  <Accordion.Panel>
                    {item.value === PetInfo.ACTION && (
                      <Flex gap={11}>
                        {actionData.map((action) => (
                          <PetActiveBox key={action.value} {...action} />
                        ))}
                        <IconChevronRight className={classes.iconRight} />
                      </Flex>
                    )}
                    {item.value === PetInfo.LIFECYCLE && (
                      <Flex direction="column" gap={12}>
                        {lifecycleData.map((data) => (
                          <Flex gap={9} align="center">
                            <Box bg="green" className={classes.smallCircle} />
                            <Box className={classes.lifecycleInfo}>{data.date}</Box>
                            <Box className={classes.lifecycleInfo}>{data.value}</Box>
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Accordion.Panel>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </Flex>
      </Container>
    </>
  );
};

export default index;
