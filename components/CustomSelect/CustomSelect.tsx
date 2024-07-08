import React from 'react';
import { Select } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './CustomSelect.module.css';

const CustomSelect = ({ placeholder }: { placeholder: string }) => {
  return (
    <Select
      label=""
      placeholder={placeholder}
      rightSection={<IconChevronDown size={30} color="#228BE6" />}
      classNames={{
        input: classes.selectInput,
        root: classes.select,
        section: classes.downIcon,
        dropdown: classes.selectDropdown,
        option: classes.selectOption,
      }}
    />
  );
};

export default CustomSelect;
