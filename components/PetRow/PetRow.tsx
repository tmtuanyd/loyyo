import React, { ReactNode } from 'react';
import { Box, Flex, Text } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import classes from './PetRow.module.css';

const PetRow = ({
  icon,
  petInfo,
  isActive,
  pathName,
}: {
  icon: ReactNode;
  petInfo: string;
  isActive: boolean;
  pathName: string;
}) => {
  const router = useRouter();

  return (
    <Flex
      align="center"
      gap={20}
      w="100%"
      onClick={() => router.push(pathName)}
      style={{ cursor: 'pointer' }}
    >
      <Box pos="relative" className={`${classes.icon} ${isActive ? 'active' : 'inactive'}`}>
        {icon}
      </Box>
      <Text c="#AFAFAF" fw={700}>
        {petInfo}
      </Text>
      <IconChevronRight color="var(--mantine-color-blue-filled)" className={classes.rightIcon} />
    </Flex>
  );
};

export default PetRow;
