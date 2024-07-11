import React, { useCallback, useState } from 'react';
import { Box, Flex, Text } from '@mantine/core';
import classes from '../Pet.module.css';
import DogIcon from '@/assets/svg/dog.svg';
import CatIcon from '@/assets/svg/cat.svg';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const PetTabs = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeTab = searchParams.get('pet');

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleChangeActiveTab = (value: string) => {
    if (value !== activeTab) router.push(pathname + '?' + createQueryString('pet', value));
  };

  return (
    <Flex w={241} className={classes.tabs} bg="white" mx="auto" p={6} justify="space-between">
      <Flex
        h="100%"
        align="center"
        gap={10}
        className={`${classes.tab} ${activeTab === 'brutus' ? classes.tabActive : ''}`}
        onClick={() => handleChangeActiveTab('brutus')}
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
        className={`${classes.tab} ${activeTab === 'sjenkie' ? classes.tabActive : ''}`}
        onClick={() => handleChangeActiveTab('sjenkie')}
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
