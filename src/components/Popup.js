import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';

function Popup(props) {
   const { children, open, onClose} = props;
    return (
     <Dialog open={open}  >
       <DialogTitle sx={{ m: 0, p: 2 }} > {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
       ) : null}
      </DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
     </Dialog>
    );
}
Popup.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default Popup;