import React, { FC } from 'react';
import { Typography } from '@mui/material';

type Props = {
  day: string;
};

const Weekday: FC<Props> = ({ day }) => {
  return <Typography textAlign="center">{day}</Typography>;
};

export default Weekday;
