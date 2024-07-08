import React from 'react';
import { Box, Button, Flex, Grid, Group, Modal } from '@mantine/core';
import PawPrintIcon from '@/assets/svg/pawprint.svg';
import classes from '../Pet.module.css';
import CustomSelect from '@/components/CustomSelect/CustomSelect';
import CustomTextInput from '@/components/CustomTextInput/CustomTextInput';

const AddPetModal = ({ opened, close }: { opened: boolean; close: () => void }) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      centered
      withCloseButton={false}
      classNames={{ body: classes.modalBody }}
      size="auto"
      closeOnClickOutside={false}
      trapFocus={false}
    >
      <Group bg="#D13030" px={18} py={15} flex="1" c="white" fz={20} fw={700}>
        <Box className={classes.pawPrintWrapper}>
          <PawPrintIcon />
        </Box>
        Voeg een Pet toe
        <Box ml="auto" onClick={close} style={{ cursor: 'pointer' }}>
          Sluiten
        </Box>
      </Group>
      <Box p={50}>
        <Grid>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <CustomSelect placeholder="Om wat voor huisdier gaat het" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <CustomSelect placeholder="Selecteer ras" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <CustomTextInput placeholder="Naam van het huisdier" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <CustomTextInput placeholder="Gewicht in KG" rightSection="KG" type="number" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <CustomTextInput placeholder="Geboorte datum (dd/mm/yyyy)" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <CustomTextInput placeholder="Bijzonderheden" />
          </Grid.Col>
        </Grid>
      </Box>
      <Flex w="100%" align="center" justify="center" mb={30}>
        <Button variant="filled" color="#228BE6" className={classes.submitButton}>
          Voeg huisdier toe!
        </Button>
      </Flex>
    </Modal>
  );
};

export default AddPetModal;
