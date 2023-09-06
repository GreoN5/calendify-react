import React, { FC, ReactNode, UIEvent, useState } from 'react';
import { Box, Button, Checkbox, CheckboxProps as CP, Typography } from '@mui/material';
import { format } from 'date-fns';
import { CalendarContainer, DayContainer, WeekContainer } from '@/components/Layout';
import Weekday from '@/components/Calendar/Weekday';
import DatesContainer from '@/components/Layout/DatesContainer';
import Modal from '@/components/Modal';
import { useDays, useWeekdays } from '@/hooks/useDays';
import { loadMoreWeeks } from '@/utils/date';
import { isOfTypeCalendarModalProps, isOfTypeCheckboxProps } from '@/utils/props';
import { DialogProps } from '@mui/material/Dialog/Dialog';

interface ModalProps extends Omit<DialogProps, 'open' | 'onClose' | 'onClick' | 'onChange'> {
  modalContent?: ReactNode;
  onSaveChanges?: () => void;
}

export type CalendarModalProps = {
  useModal?: boolean;
  modalProps?: ModalProps;
  checkboxProps?: never;
  useCheckbox?: never;
  dateActions?: never;
};

export type CheckboxProps = {
  useCheckbox: boolean;
  checkboxProps: Omit<CP, 'value'>;
  useModal?: never;
  modalProps?: never;
  dateActions?: never;
};

type Props = CheckboxProps | CalendarModalProps;

const Calendar: FC<Props> = (props) => {
  const { weekdays } = useWeekdays();
  const { days } = useDays();

  const [additionalDates, setAdditionalDates] = useState<Array<Date>>(days);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;

    if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
      const newWeeks = loadMoreWeeks(
        additionalDates[additionalDates.length - 1] || days[days.length - 1],
      );
      setAdditionalDates((prevState) => [...prevState, ...newWeeks]);
    }
  };

  const isModalProps = isOfTypeCalendarModalProps(props);
  const isCheckboxProps = isOfTypeCheckboxProps(props);

  return (
    <>
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
                <Typography py="4px">{format(date, 'dd.MM')}</Typography>
                {isModalProps ? (
                  <Box>
                    <Button
                      onClick={() => {
                        setCurrentDate(date);
                        setOpenModal(true);
                      }}
                      size="small"
                      variant="contained"
                    >
                      Open
                    </Button>
                  </Box>
                ) : null}
                {isCheckboxProps ? (
                  <Box>
                    <Checkbox value={date} {...props.checkboxProps} />
                  </Box>
                ) : null}
              </DayContainer>
            );
          })}
        </DatesContainer>
      </CalendarContainer>
      {isModalProps && (
        <Modal
          isOpen={openModal}
          currentDate={currentDate}
          modalContent={props.modalProps?.modalContent}
          onClose={() => setOpenModal(false)}
          onSaveChanges={props.modalProps?.onSaveChanges}
          {...props.modalProps}
        />
      )}
    </>
  );
};

export default Calendar;
