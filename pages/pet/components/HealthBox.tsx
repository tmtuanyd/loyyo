import { Flex, Text } from '@mantine/core';
import React from 'react';
import HearIcon from '@/assets/svg/heart-beat.svg';
import classes from '../Pet.module.css';

const HealthBox = ({ petName, color = '#D13030' }: { petName: string; color?: string }) => {
  return (
    <Flex w="100%" bg={color} align="center" gap={22} className={classes.banner}>
      <HearIcon />
      <Text fz={{ base: 16, lg: 20 }} fw="bold">
        Health Point: {petName} is al meer dan een jaar niet gewogen!
      </Text>
    </Flex>
  );
};

export default HealthBox;
