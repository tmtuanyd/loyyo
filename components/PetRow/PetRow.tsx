import React, { ReactNode } from 'react';
import { Box, Flex, Text } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import classes from './PetRow.module.css';

const PetRow = ({
  icon,
  petInfo,
  isActive,
}: {
  icon: ReactNode;
  petInfo: string;
  isActive: boolean;
}) => {
  const router = useRouter();

  return (
    <Flex align="center" gap={20} w="100%">
      <Box pos="relative" className={`${classes.icon} ${isActive ? 'active' : 'inactive'}`}>
        {icon}
      </Box>
      <Text c="gray" fw={700}>
        {petInfo}
      </Text>
      <IconChevronRight
        color="var(--mantine-color-blue-filled)"
        className={classes.rightIcon}
        onClick={() => router.push('/pet')}
      />
    </Flex>
  );
};

export default PetRow;
