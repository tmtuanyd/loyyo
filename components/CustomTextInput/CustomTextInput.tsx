import React from 'react';
import { TextInput, TextInputProps } from '@mantine/core';
import classes from './CustomTextInput.module.css';

const CustomTextInput = ({
  placeholder,
  rightSection,
  ...props
}: TextInputProps & {
  rightSection?: string;
}) => {
  return (
    <TextInput
      {...props}
      label=""
      placeholder={placeholder}
      classNames={{
        input: classes.input,
        section: rightSection && classes.section,
      }}
      rightSection={rightSection}
    />
  );
};

export default CustomTextInput;
