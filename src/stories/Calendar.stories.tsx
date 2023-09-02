import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Button } from '@mui/material';
import CalendarComponent from '@/components/Calendar';

const meta: Meta<typeof CalendarComponent> = {
  title: 'Calendar/Calendar',
  component: CalendarComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = Omit<StoryObj<typeof meta>, 'args'>;

export const Calendar: Story = {
  render: () => <CalendarComponent />,
};

export const CalendarCheckbox: Story = {
  render: () => <CalendarComponent useCheckbox onChange={(e) => console.log(e)} />,
};

export const CalendarModal: Story = {
  render: () => <CalendarComponent useModal onSaveChanges={() => console.log('calendar modal')} />,
};

export const CalendarCustomModal: Story = {
  render: () => (
    <CalendarComponent
      useModal
      modalContent={
        <Box>
          <Button>Date</Button>
        </Box>
      }
    />
  ),
};
