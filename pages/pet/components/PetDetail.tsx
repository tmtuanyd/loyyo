import React from 'react';
import { Accordion, Box, Flex } from '@mantine/core';
import classes from '../Pet.module.css';
import { PET_ACTIVITY } from '@/core/constants/PetActivity.constance';
import { PetInfo } from '@/core/enum';
import PetActiveBox from '@/components/PetActiveBox/PetActiveBox';
import { IconChevronDown } from '@tabler/icons-react';
import Slider from '@/components/Slider/Slider';
import { PetType } from '@/core/type';

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

const PetDetail = ({ petDetails }: { petDetails: PetType }) => {
  return (
    <Accordion
      multiple
      chevron={<IconChevronDown />}
      classNames={{ chevron: classes.chevron, label: classes.label, control: classes.control }}
    >
      {PET_ACTIVITY.map((item) => {
        const Icon = item.icon;
        return (
          <Accordion.Item
            key={item.value}
            value={item.value}
            bg="white"
            className={classes.accordion}
          >
            <Accordion.Control icon={<Icon className={classes.accordionIcon} />}>
              {`${item.title} ${item.value === PetInfo.LIFECYCLE ? petDetails.name : ''}`}
            </Accordion.Control>
            <Accordion.Panel>
              {item.value === PetInfo.ACTION && (
                <Slider gap={9}>
                  {actionData.map((action) => (
                    <PetActiveBox key={action.value} {...action} />
                  ))}
                </Slider>
              )}
              {item.value === PetInfo.LIFECYCLE && (
                <Flex direction="column" gap={12} style={{ overflow: 'auto' }} pb={8}>
                  {lifecycleData.map((data) => (
                    <Flex gap={9} align="center" key={data.value} w="max-content">
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
  );
};

export default PetDetail;
