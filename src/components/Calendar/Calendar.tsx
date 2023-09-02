import React, { ChangeEvent, FC, ReactNode, UIEvent, useState } from 'react';
import { Box, Checkbox, Typography } from '@mui/material';
import { format } from 'date-fns';
import { CalendarContainer, DayContainer, WeekContainer } from '@/components/Layout';
import Weekday from '@/components/Calendar/Weekday';
import DatesContainer from '@/components/Layout/DatesContainer';
import { useDays, useWeekdays } from '@/hooks/useDays';
import { loadMoreWeeks } from '@/utils/date';
import { isOfTypeCheckboxProps, isOfTypeModalProps } from '@/utils/props';

export type ModalProps = {
  useModal?: boolean;
  modalContent?: ReactNode;
  onSaveChanges?: () => void;
  useCheckbox?: never;
  onChange?: never;
};

export type CheckboxProps = {
  useCheckbox: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  useModal?: never;
  modalContent?: never;
  onSaveChanges?: never;
};

type Props = CheckboxProps | ModalProps;

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

  const isModalProps = isOfTypeModalProps(props);
  const isCheckboxProps = isOfTypeCheckboxProps(props);

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
              minHeight={!isCheckboxProps ? '60px' : undefined}
            >
              <Typography>{format(date, 'dd.MM')}</Typography>
              {isModalProps && !props.modalContent ? <Box></Box> : null}
              {isModalProps && props.modalContent ? props.modalContent : null}
              {isCheckboxProps ? (
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
