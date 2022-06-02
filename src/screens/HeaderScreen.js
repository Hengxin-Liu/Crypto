import React, { createContext, useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { AppBar, Box, Button,IconButton,Menu,MenuItem,Toolbar,Tooltip,Typography, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import Popup from '../components/Popup';
import Login from './LoginScreen';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });
const pages = ['Coins','Exchanges','NFT','Publications','Resources'];

function HeaderScreen(props) {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [open,setOpen] = useState(false);
    const [open2,setOpen2] = useState(false);
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const handleClose2= () => {
      setOpen2(false);
    };
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
    <React.Fragment>
     <AppBar position='sticky' >
        <Toolbar disableGutters >
          <Box sx={{ margin:'0 3vh', display: { xs: 'none', md: 'flex' }}}>
            <Link to="/">  
             <img src='/images/logo.png' alt='Crypto' width="50" /> 
            </Link> 
           </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
            <IconButton size="large" aria-label="menu"
              aria-controls="menu-appbar" aria-haspopup="true"
              onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar" anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom',horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top',horizontal: 'left'}}
              open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }} >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                 <Link to={`/${page.toLowerCase()}`} key={page}>
                    <Typography textAlign="center">{page}</Typography> 
                 </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
            <Box sx={{  flexGrow: 1,display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
             <Link to={`/${page.toLowerCase()}`} key={page}>
               <Button key={page} onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                >{page}  
              </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{  display: { xs: 'flex', md: 'none' }}}>   
            <IconButton size="large" aria-label="account"
              aria-controls="account" aria-haspopup="true"
              onClick={() => setOpen(true)} color="inherit">
              <PersonIcon />
            </IconButton>
            <Popup open={open} onClose={handleClose} >
                  <Login signup={false}/>
              </Popup>
          </Box>
          <Box sx={{ margin:'0 3vh', display: { xs: 'none', md: 'flex' } }}>
           <Tooltip title="Theme">
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
             {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
           </Tooltip>
            <Button onClick={() => setOpen(true) } sx={{ my: 2, color: 'white', display: 'block' }}>
                Log in     
            </Button> 
               <Popup open={open}  onClose={handleClose} >
                  <Login signup={false}/>
               </Popup>
            <Button onClick={() => setOpen2(true)} sx={{ my: 2, color: 'white', display: 'block' }}>
                Sign up    
            </Button>
               <Popup open={open2}  onClose={handleClose2} >
                  <Login signup={true}/>
               </Popup> 
          </Box>
        </Toolbar>
     </AppBar>
    </React.Fragment>
    );
}

export default HeaderScreen;