import { Flex, Text } from '@mantine/core';
import React from 'react';
import HearIcon from '@/assets/svg/heart-beat.svg';
import classes from '../Pet.module.css';
import { PetType } from '@/core/type';

const HealthBox = ({ petDetails }: { petDetails: PetType }) => {
  return (
    <Flex
      w="100%"
      bg={petDetails?.color || '#D13030'}
      align="center"
      gap={22}
      className={classes.banner}
    >
      <HearIcon />
      {petDetails?.type === 'dog' && (
        <Text fz={{ base: 16, lg: 20 }} fw="bold">
          Health Point: {petDetails?.name} is al meer dan een jaar niet gewogen!
        </Text>
      )}
      {petDetails?.type === 'cat' && (
        <Text fz={{ base: 16, lg: 20 }} fw="bold">
          Health Point: momenteel aandachtspunten voor {petDetails?.name}
        </Text>
      )}
    </Flex>
  );
};

export default HealthBox;
