import { CalendarCheckboxProps, CalendarModalProps } from '@/components/Calendar/Calendar';

export const isOfTypeCheckboxProps = (props: unknown): props is CalendarCheckboxProps => {
  return Boolean((props as CalendarCheckboxProps)?.useCheckbox);
};

export const isOfTypeCalendarModalProps = (props: unknown): props is CalendarModalProps => {
  return Boolean((props as CalendarModalProps)?.useModal);
};
