import React from 'react';
import { Accordion, Box, Flex } from '@mantine/core';
import classes from '../MemberDetails.module.css';
import { EMemberInfo } from '@/core/enum';
import PetActiveBox from '@/components/PetActiveBox/PetActiveBox';
import { IconChevronDown } from '@tabler/icons-react';
import Slider from '@/components/Slider/Slider';
import { MEMBER_ACTIVITY } from '@/core/constants';

//mock data
const actionData = [
  {
    title: 'Wegen Brutus',
    description: '14 juni 2023',
    suffix: 'kg',
    value: '15',
    color: '#228BE6',
  },
  {
    title: 'Weeg Sjenkie',
    description: '8 jan 2024',
    suffix: 'kg',
    value: '4.2',
    color: '#228BE6',
  },
  {
    title: 'Ontworming',
    description: 'Laatste kuur: <6 mnd',
    suffix: '',
    value: 'Start kuur',
    color: '#7BC4A8',
  },
  {
    title: 'Voedingadvies',
    description: '',
    suffix: '',
    value: 'Bekijk advies',
    color: '#8422E6',
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

const MemberInfo = () => {
  return (
    <Accordion
      multiple
      chevron={<IconChevronDown />}
      classNames={{ chevron: classes.chevron, label: classes.label, control: classes.control }}
    >
      {MEMBER_ACTIVITY.map((item) => {
        const Icon = item.icon;
        return (
          <Accordion.Item
            key={item.value}
            value={item.value}
            bg="white"
            className={classes.accordion}
          >
            <Accordion.Control icon={<Icon className={classes.accordionIcon} />}>
              {item.title}
            </Accordion.Control>
            <Accordion.Panel>
              {item.value === EMemberInfo.ACTION && (
                <Box mt={18}>
                  <Slider gap={9}>
                    {actionData.map((action) => (
                      <PetActiveBox key={action.value} {...action} />
                    ))}
                  </Slider>
                </Box>
              )}
              {item.value === EMemberInfo.LIFECYCLE && (
                <Flex direction="column" gap={12}>
                  {lifecycleData.map((data) => (
                    <Flex gap={9} align="center" key={data.value}>
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

export default MemberInfo;
