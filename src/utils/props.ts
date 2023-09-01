import { CheckboxProps, CustomActionsProps } from '@/components/Calendar/Calendar';

export const isOfTypeCustomActionsProps = (props: unknown): props is CustomActionsProps => {
  return Boolean((props as CustomActionsProps)?.dateActions);
};

export const isOfTypeCheckboxProps = (props: unknown): props is CheckboxProps => {
  return Boolean((props as CheckboxProps)?.useCheckbox);
};
