import React from 'react';
import { Box, Flex, Text } from '@mantine/core';
import DogIcon from '@/assets/svg/dog.svg';
import CatIcon from '@/assets/svg/cat.svg';
import classes from '../Pet.module.css';
import { PetType } from '@/core/type';

const PetCharacteristic = ({ petDetails }: { petDetails: PetType }) => {
  return (
    <Box className={classes.characteristicWrapper}>
      <Flex gap={20} align="center" w="max-content">
        {petDetails.type === 'dog' && <DogIcon className={classes.dogDetails} />}
        {petDetails.type === 'cat' && <CatIcon className={classes.dogDetails} />}
        <Text c="blue" fz={{ base: 16, lg: 20 }} fw="bold">
          {petDetails.name}
        </Text>
        <Flex gap={5}>
          {petDetails.characteristic.map((item) => (
            <Box key={item} c="white" className={classes.characteristic}>
              <Text fz={{ base: 16, lg: 20 }} fw="bold">
                {item}
              </Text>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default PetCharacteristic;
