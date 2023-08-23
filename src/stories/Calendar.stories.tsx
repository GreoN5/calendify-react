import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
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
type Story = StoryObj<typeof meta>;

export const Calendar: Story = {
  render: () => <CalendarComponent />,
};
