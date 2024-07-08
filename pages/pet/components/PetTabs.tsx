import React, { useState } from 'react';
import { Box, Flex, Text } from '@mantine/core';
import classes from '../Pet.module.css';
import DogIcon from '@/assets/svg/dog.svg';
import CatIcon from '@/assets/svg/cat.svg';

const PetTabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleChangeActiveTab = (value: number) => {
    if (value !== activeTab) setActiveTab(value);
  };

  return (
    <Flex w={241} className={classes.tabs} bg="white" mx="auto" p={6} justify="space-between">
      <Flex
        h="100%"
        align="center"
        gap={10}
        className={`${classes.tab} ${activeTab === 1 ? classes.tabActive : ''}`}
        onClick={() => handleChangeActiveTab(1)}
      >
        <Box pos="relative" className="inactive">
          <DogIcon />
        </Box>
        <Text c="blue" fz={14} fw={600}>
          Brutus
        </Text>
      </Flex>
      <Flex
        h="100%"
        align="center"
        gap={10}
        className={`${classes.tab} ${activeTab === 2 ? classes.tabActive : ''}`}
        onClick={() => handleChangeActiveTab(2)}
      >
        <Box pos="relative" className="active">
          <CatIcon />
        </Box>
        <Text c="blue" fz={14} fw={600}>
          Sjenkie
        </Text>
      </Flex>
    </Flex>
  );
};

export default PetTabs;
