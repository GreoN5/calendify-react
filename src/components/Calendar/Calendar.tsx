import React, { ChangeEvent, FC, ReactNode, UIEvent, useState } from 'react';
import { Box, Button, Checkbox, Typography } from '@mui/material';
import { format } from 'date-fns';
import { CalendarContainer, DayContainer, WeekContainer } from '@/components/Layout';
import Weekday from '@/components/Calendar/Weekday';
import DatesContainer from '@/components/Layout/DatesContainer';
import Modal from '@/components/Modal';
import { useDays, useWeekdays } from '@/hooks/useDays';
import { loadMoreWeeks } from '@/utils/date';
import {
  isOfTypeCheckboxProps,
  isOfTypeCustomDateActionProps,
  isOfTypeModalProps,
} from '@/utils/props';

export type CustomDateActionProps = {
  dateActions?: ReactNode;
  useModal?: never;
  modalProps?: never;
  checkboxProps?: never;
  useCheckbox?: never;
};

export type ModalProps = {
  useModal?: boolean;
  modalProps?: {
    modalContent?: ReactNode;
    onSaveChanges?: () => void;
  };
  checkboxProps?: never;
  useCheckbox?: never;
  dateActions?: never;
};

export type CheckboxProps = {
  useCheckbox: boolean;
  checkboxProps: {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  useModal?: never;
  modalProps?: never;
  dateActions?: never;
};

type Props = CheckboxProps | ModalProps | CustomDateActionProps;

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

  const isModalProps = isOfTypeModalProps(props);
  const isCheckboxProps = isOfTypeCheckboxProps(props);
  const isCustomDateActionProps = isOfTypeCustomDateActionProps(props);

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
                    <Checkbox value={date} onChange={props.checkboxProps.onChange} />
                  </Box>
                ) : null}
                {isCustomDateActionProps ? props.dateActions : null}
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
        />
      )}
    </>
  );
};

export default Calendar;
