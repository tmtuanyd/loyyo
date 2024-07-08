import { Flex, Text } from '@mantine/core';
import React from 'react';
import HearIcon from '@/assets/svg/heart-beat.svg';
import classes from '../Pet.module.css';

const HealthBox = () => {
  return (
    <Flex w="100%" bg="red" align="center" gap={22} className={classes.banner}>
      <HearIcon />
      <Text fz={20} fw="bold">
        Health Point: Brutus is al meer dan een jaar niet gewogen!
      </Text>
    </Flex>
  );
};

export default HealthBox;
