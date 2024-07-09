import React from 'react';
import { Box, Flex, Text } from '@mantine/core';
import UserIcon from '@/assets/svg/user.svg';
import classes from '../MemberDetails.module.css';

//mock data
const memberDetails = {
  name: 'Wouter',
  characteristic: ['2 pets', 'Cat: Sjenkie', 'Dog: Brutus'],
};

const UserCharacteristic = () => {
  return (
    <Box className={classes.characteristicWrapper}>
      <Flex gap={20} align="center" w="max-content">
        <UserIcon className={classes.userIcon} />
        <Text c="blue" fz={{ base: 16, lg: 20 }} fw="bold">
          {memberDetails.name}
        </Text>
        <Flex gap={5} pt={8} pb={2}>
          {memberDetails.characteristic.map((item, index) => (
            <Box
              key={item}
              c="white"
              className={classes.characteristic}
              bg={index === 0 ? '#c6c6c6' : '#228BE6'}
              px={25}
              pos="relative"
            >
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

export default UserCharacteristic;
