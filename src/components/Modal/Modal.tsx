import React, { FC, ReactNode } from 'react';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { format } from 'date-fns';

type Props = {
  isOpen: boolean;
  currentDate: Date | null;
  onClose: () => void;
  onSaveChanges?: () => void;
  modalContent?: ReactNode;
};

const Modal: FC<Props> = ({
  isOpen,
  currentDate,
  onClose,
  onSaveChanges,
  modalContent,
  ...props
}) => {
  if (!currentDate) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} {...props}>
      <DialogTitle>{format(currentDate, 'dd.MM.yyyy')}</DialogTitle>
      {modalContent}
      <DialogActions>
        {onSaveChanges ? (
          <Button onClick={onSaveChanges} variant="contained">
            Save
          </Button>
        ) : null}
        <Button onClick={onClose} variant="outlined">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
