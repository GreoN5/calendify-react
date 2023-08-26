import React, { JSX, UIEvent, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { format } from 'date-fns';
import { CalendarContainer, DayContainer } from '@/components/Layout';
import Weekday from '@/components/Calendar/Weekday';
import { useDays, useWeekdays } from '@/hooks/useDays';
import { loadMoreWeeks } from '@/utils/date';

const Calendar = (): JSX.Element => {
  const { weekdays } = useWeekdays();
  const { days } = useDays();

  const [additionalDates, setAdditionalDates] = useState<Array<Date>>(days);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;

    if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
      const newWeeks = loadMoreWeeks(
        additionalDates[additionalDates.length - 1] || days[days.length - 1],
      );
      setAdditionalDates((prevState) => [...prevState, ...newWeeks]);
    }
  };

  return (
    <Box>
      <CalendarContainer onScroll={handleScroll}>
        {weekdays.map((day) => {
          return (
            <Weekday key={day} day={day}>
              {[...days, ...additionalDates]?.map((date) => {
                const dayOfWeek = format(date, 'EEEE');
                if (dayOfWeek !== day) return null; // match day of week with its date

                return (
                  <DayContainer key={date.toISOString()}>
                    <Typography>{format(date, 'dd.MM')}</Typography>
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
