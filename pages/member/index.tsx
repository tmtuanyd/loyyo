import React, { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import { NavbarType, UserQuickAction } from '@/core/enum';
import { Box, Container, Group, Select, SelectProps } from '@mantine/core';
import classes from './Member.module.css';
import { IconArrowsLeftRight, IconChevronDown } from '@tabler/icons-react';
import UserInfoBox from './components/UserInfoBox';
import PawPrintIcon from '@/assets/svg/pawprint.svg';
import UserIcon from '@/assets/svg/user.svg';
import { useRouter } from 'next/navigation';

const options = [
  { value: UserQuickAction.PETS, label: 'Pets' },
  { value: UserQuickAction.TRANSACTION_HISTORY, label: 'Transactiegeschiedenis' },
  { value: UserQuickAction.MEMBER_DETAILS, label: 'Member details' },
];

const icons: Record<UserQuickAction, React.ReactNode> = {
  [UserQuickAction.PETS]: <PawPrintIcon />,
  [UserQuickAction.TRANSACTION_HISTORY]: <IconArrowsLeftRight color="#228be6" />,
  [UserQuickAction.MEMBER_DETAILS]: <UserIcon />,
};

const renderSelectOption: SelectProps['renderOption'] = ({ option }) => {
  return (
    <>
      <Group flex="1" gap="xs" className={classes.option}>
        {option.label}
        {icons[option.value as UserQuickAction]}
      </Group>
    </>
  );
};

const index = () => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClickOptions = (value: string | null) => {
    if (value === UserQuickAction.PETS) {
      router.push('/pet');
      return;
    }
    if (value === UserQuickAction.MEMBER_DETAILS) {
      router.push('/member/details');
      return;
    }
    if (value === UserQuickAction.TRANSACTION_HISTORY) {
      router.push('/');
      return;
    }
  };

  return (
    <>
      <Navbar type={NavbarType.MEMBER} />
      <Container className="container">
        <UserInfoBox />
        <Select
          label=""
          placeholder="Quick actions"
          data={options}
          comboboxProps={{ position: 'top', middlewares: { flip: false, shift: false } }}
          rightSection={
            <IconChevronDown
              size={30}
              color="white"
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
          renderOption={renderSelectOption}
          onChange={handleClickOptions}
          onDropdownOpen={() => setDropdownOpen(true)}
          onDropdownClose={() => setDropdownOpen(false)}
        />
        <Box component="a" href="/" c="blue" ta="center" mx="auto" mt="auto">
          Need help?
        </Box>
      </Container>
    </>
  );
};

export default index;
