import React, { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';
import classes from './CustomDatePicker.module.css';

const CustomDatePicker = ({ placeholder }: { placeholder: string }) => {
  const [value, setValue] = useState<Date | null>(null);
  return ( 
    <DatePickerInput
      label=""
      placeholder={placeholder}
      value={value}
      onChange={setValue}
      classNames={{ input: classes.input }}
    />
  );
};

export default CustomDatePicker;
