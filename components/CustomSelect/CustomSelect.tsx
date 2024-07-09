import React, { useState } from 'react';
import { Select } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './CustomSelect.module.css';

const CustomSelect = ({ placeholder }: { placeholder: string }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Select
      label=""
      placeholder={placeholder}
      rightSection={
        <IconChevronDown
          size={30}
          color="#228BE6"
          style={{
            transition: 'transform 0.3s ease',
            transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      }
      classNames={{
        input: classes.selectInput,
        root: classes.select,
        section: classes.downIcon,
        dropdown: classes.selectDropdown,
        option: classes.selectOption,
      }}
      data={['Option 1', 'Option 2']}
      onDropdownOpen={() => setDropdownOpen(true)}
      onDropdownClose={() => setDropdownOpen(false)}
    />
  );
};

export default CustomSelect;
