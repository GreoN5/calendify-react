import { CalendarModalProps, CheckboxProps } from '@/components/Calendar/Calendar';

export const isOfTypeCheckboxProps = (props: unknown): props is CheckboxProps => {
  return Boolean((props as CheckboxProps)?.useCheckbox);
};

export const isOfTypeCalendarModalProps = (props: unknown): props is CalendarModalProps => {
  return Boolean((props as CalendarModalProps)?.useModal);
};
