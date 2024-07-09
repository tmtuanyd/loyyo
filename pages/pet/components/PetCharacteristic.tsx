import React from 'react';
import { Box, Flex, Text } from '@mantine/core';
import DogIcon from '@/assets/svg/dog.svg';
import classes from '../Pet.module.css';

//mock data
const petDetails = {
  name: 'Brutus',
  characteristic: ['16mnd', '15kg', 'Reu', 'Type'],
};

const PetCharacteristic = () => {
  return (
    <Box className={classes.characteristicWrapper}>
      <Flex gap={20} align="center" w="max-content">
        <DogIcon className={classes.dogDetails} />
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
