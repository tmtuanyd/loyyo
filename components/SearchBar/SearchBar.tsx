import { Box, Button, TextInput } from '@mantine/core';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import classes from './SearchBar.module.css';
import BarcodeIcon from '../../assets/svg/barcode.svg';

const SearchBar = () => {
  const router = useRouter();
  const handleSearch = () => {
    router.push('/member');
  };

  return (
    <Box w={560} mx="auto" className={classes.root} maw="100%" mt={59} mb={56}>
      <IconSearch color="#CED4DA" />
      <Box w="calc(100% - 148px)">
        <TextInput placeholder="Member look-up" classNames={{ input: classes.input }} size="20px" />
      </Box>
      <Button radius="50%" className={classes.icon}>
        <BarcodeIcon />
      </Button>
      <Button radius="50%" className={classes.icon} onClick={handleSearch}>
        <IconArrowRight />
      </Button>
    </Box>
  );
};

export default SearchBar;
