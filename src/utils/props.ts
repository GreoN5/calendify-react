import { CheckboxProps, CustomDateActionProps, ModalProps } from '@/components/Calendar/Calendar';

export const isOfTypeCustomDateActionProps = (props: unknown): props is CustomDateActionProps => {
  return Boolean((props as CustomDateActionProps)?.dateActions);
};

export const isOfTypeCheckboxProps = (props: unknown): props is CheckboxProps => {
  return Boolean((props as CheckboxProps)?.useCheckbox);
};

export const isOfTypeModalProps = (props: unknown): props is ModalProps => {
  return Boolean((props as ModalProps)?.useModal);
};
