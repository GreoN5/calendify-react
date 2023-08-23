import React, { FC, PropsWithChildren } from 'react';
import { Typography } from '@mui/material';
import WeekdayContainer from '@/components/Layout/WeekdayContainer';
import WeekColumnContainer from '@/components/Layout/WeekColumnContainer';

type Props = {
  day: string;
};

const Weekday: FC<PropsWithChildren<Props>> = ({ day, children }) => {
  return (
    <WeekColumnContainer>
      <WeekdayContainer>
        <Typography>{day}</Typography>
      </WeekdayContainer>
      {children}
    </WeekColumnContainer>
  );
};

export default Weekday;
