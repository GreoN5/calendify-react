import React, { JSX } from 'react';
import { CalendarContainer, DayContainer } from '@/components/Layout';
import { useDays, useWeekdays } from '@/hooks/useDays';
import Weekday from '@/components/Calendar/Weekday';
import { Box, Typography } from '@mui/material';
import { format } from 'date-fns';

const Calendar = (): JSX.Element => {
  const { weekdays } = useWeekdays();
  const { days } = useDays();

  return (
    <Box>
      <CalendarContainer>
        {weekdays.map((day) => {
          return (
            <Weekday day={day}>
              {days.map((date) => {
                const dayOfWeek = format(date, 'EEEE');
                if (dayOfWeek !== day) return null; // match day of week with its date

                return (
                  <DayContainer>
                    <Typography>{format(date, 'dd')}</Typography>
                  </DayContainer>
                );
              })}
            </Weekday>
          );
        })}
      </CalendarContainer>
    </Box>
  );
};

export default Calendar;
