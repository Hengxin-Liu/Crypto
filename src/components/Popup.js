import { Dialog, DialogContent } from '@mui/material';
import React from 'react';

function Popup(props) {
   const { children, open, setOpen} = props;
   const handleClose = () => {
       setOpen();
   };

    return (
     <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          {children}
        </DialogContent>
     </Dialog>
    );
}

export default Popup;