import React from 'react';
import { Box, Text } from '@mantine/core';
import classes from './PetActiveBox.module.css';

type PetActiveBoxProp = {
  color: string;
  title: string;
  description?: string;
  value: string;
  suffix?: string;
};

const PetActiveBox = ({ color, title, description, value, suffix }: PetActiveBoxProp) => {
  return (
    <Box w={167} h={138} px={15} py={15} bg={color} className={classes.root}>
      <Text fz={18} fw="bold" mb={12} c="white">
        {title}
      </Text>
      {!!description && (
        <Text fz={12} c="white" mb={6}>
          {description}
        </Text>
      )}
      <Box className={`${classes.button} ${suffix ? classes.notRoundButton : ''}`}>
        {value}{' '}
        {suffix && (
          <>
            <Box className={classes.divider} />
            <Text fw={700} fz={20}>
              {' '}
              {suffix}
            </Text>
          </>
        )}
      </Box>
    </Box>
  );
};

export default PetActiveBox;
