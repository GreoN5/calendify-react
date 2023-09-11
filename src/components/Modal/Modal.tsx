import React, { FC, ReactNode } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { format } from 'date-fns';
import { ModalProps } from '@/components/Calendar/Calendar';
import { makeStyles } from 'tss-react/mui';

interface Props extends ModalProps {
  isOpen: boolean;
  currentDate: Date | null;
  onClose: () => void;
  onSaveChanges?: () => void;
  modalContent?: ReactNode;
}

const useStyles = makeStyles()({
  dialogWindow: {
    minWidth: '25%',
    maxWidth: '50%',
  },
});

const Modal: FC<Props> = ({
  isOpen,
  currentDate,
  onClose,
  onSaveChanges,
  modalContent,
  textareaValue,
  textareaStyle,
  ...props
}) => {
  const { classes } = useStyles();

  if (!currentDate) return null;

  return (
    <Dialog
      classes={{ ...props.classes, paper: classes.dialogWindow }}
      open={isOpen}
      onClose={onClose}
      {...props}
    >
      <DialogTitle>{format(currentDate, 'dd.MM.yyyy')}</DialogTitle>
      <DialogContent>
        {modalContent ? (
          modalContent
        ) : (
          <TextField
            multiline
            rows={4}
            maxRows={4}
            sx={{ width: '100%', ...textareaStyle }}
            value={textareaValue}
            variant="outlined"
          />
        )}
      </DialogContent>
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
