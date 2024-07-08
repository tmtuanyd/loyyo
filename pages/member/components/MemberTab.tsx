import React, { useState } from 'react';
import { Flex, Text } from '@mantine/core';
import classes from '../MemberDetails.module.css';

const MemberTabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleChangeActiveTab = (value: number) => {
    if (value !== activeTab) setActiveTab(value);
  };

  return (
    <Flex w="auto" className={classes.tabs} bg="white" mx="auto" p={6} justify="space-between">
      <Flex
        h="100%"
        align="center"
        gap={10}
        className={`${classes.tab} ${activeTab === 1 ? classes.tabActive : ''}`}
        onClick={() => handleChangeActiveTab(1)}
      >
        <Text c="blue" fz={14} fw={600}>
          Wouter Meeuwisse
        </Text>
      </Flex>
      <Flex
        h={38}
        align="center"
        gap={10}
        className={`${classes.tab} ${activeTab === 2 ? classes.tabActive : ''}`}
        onClick={() => handleChangeActiveTab(2)}
      >
        <Text c="blue" fz={14} fw={600}>
          #4509403220
        </Text>
      </Flex>
    </Flex>
  );
};

export default MemberTabs;
