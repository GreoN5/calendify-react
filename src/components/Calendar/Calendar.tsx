import React, { FC, ReactNode, UIEvent, useState } from 'react';
import { Typography } from '@mui/material';
import { format } from 'date-fns';
import { CalendarContainer, DayContainer, WeekContainer } from '@/components/Layout';
import Weekday from '@/components/Calendar/Weekday';
import { useDays, useWeekdays } from '@/hooks/useDays';
import { loadMoreWeeks } from '@/utils/date';
import DatesContainer from '@/components/Layout/DatesContainer';

type Props = {
  dateActions?: ReactNode;
};

const Calendar: FC<Props> = ({ dateActions }) => {
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
    <CalendarContainer>
      <WeekContainer>
        {weekdays.map((day) => {
          return <Weekday key={day} day={day} />;
        })}
      </WeekContainer>
      <DatesContainer onScroll={handleScroll}>
        {[...days, ...additionalDates]?.map((date) => {
          return (
            <DayContainer key={date.toISOString()} minWidth="80px">
              <Typography>{format(date, 'dd.MM')}</Typography>
              {dateActions}
            </DayContainer>
          );
        })}
      </DatesContainer>
    </CalendarContainer>
  );
};

export default Calendar;
