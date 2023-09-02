import { CheckboxProps, ModalProps } from '@/components/Calendar/Calendar';

export const isOfTypeCheckboxProps = (props: unknown): props is CheckboxProps => {
  return Boolean((props as CheckboxProps)?.useCheckbox);
};

export const isOfTypeModalProps = (props: unknown): props is ModalProps => {
  return Boolean((props as ModalProps)?.useModal);
};
