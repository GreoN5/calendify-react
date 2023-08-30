import React, { ChangeEvent, FC, ReactNode, UIEvent, useState } from 'react';
import { Box, Checkbox, Typography } from '@mui/material';
import { format } from 'date-fns';
import { CalendarContainer, DayContainer, WeekContainer } from '@/components/Layout';
import Weekday from '@/components/Calendar/Weekday';
import DatesContainer from '@/components/Layout/DatesContainer';
import { useDays, useWeekdays } from '@/hooks/useDays';
import { loadMoreWeeks } from '@/utils/date';
import { isOfTypeCheckboxProps, isOfTypeCustomActionsProps } from '@/utils/props';

export type CustomActionsProps = {
  dateActions?: ReactNode;
};

export type CheckBoxProps = {
  useCheckBox?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

type Props = CustomActionsProps | CheckBoxProps;

const Calendar: FC<Props> = (props) => {
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

  const isCustomActions = isOfTypeCustomActionsProps(props);
  const isCheckboxActions = isOfTypeCheckboxProps(props);

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
            <DayContainer
              key={date.toISOString()}
              minWidth="80px"
              minHeight={!isCheckboxActions ? '60px' : undefined}
            >
              <Typography>{format(date, 'dd.MM')}</Typography>
              {isCustomActions ? props.dateActions : null}
              {isCheckboxActions ? (
                <Box>
                  <Checkbox value={date} onChange={props.onChange} />
                </Box>
              ) : null}
            </DayContainer>
          );
        })}
      </DatesContainer>
    </CalendarContainer>
  );
};

export default Calendar;
