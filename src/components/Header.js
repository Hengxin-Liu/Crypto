import { AppBar, Box, Button, Toolbar,} from '@mui/material';
import React ,{useState}from 'react';
import PopupLogin from './PopupLogin';
import PopupSignup from './PopupSignup';


function Header() {
    const [open,setOpen] = useState(false);
    const [openup,setOpenup] = useState(false);
    return (
   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         <Button color="inherit">Coins</Button>
         <Button color="inherit">Exchange</Button>
         <Button color="inherit">NFT</Button>
         <Button color="inherit" >Publications</Button>
         <div className='grow'></div>
         <Button color="inherit" 
          onClick={() => setOpen(true)}
         >  
           Log in
         </Button>
         <PopupLogin open={open} setOpen={setOpen}/>
         <Button color="inherit"
          onClick={() => setOpenup(true)}
         >
             Sign up
         </Button>
         <PopupSignup openup={openup} setOpenup={setOpenup}/>
        </Toolbar>
      </AppBar>
    </Box>
      
    
    );
}

export default Header;