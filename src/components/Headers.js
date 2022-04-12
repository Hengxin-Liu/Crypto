import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { AppBar, Box, Button, Container, CssBaseline,IconButton,Menu,MenuItem,Toolbar,Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import Popup from './Popup';
import Login from './Login';

const pages = ['Coins','Exchanges','NFT','Publications','Resources'];

function Headers(props) {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [open,setOpen] = useState(false);
    const [open2,setOpen2] = useState(false);
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    return (
     <AppBar position='sticky' >
       <CssBaseline />
        <Container>
        <Toolbar disableGutters>
         <Link to="/"> 
          <Typography variant="h5" noWrap component="div"
           sx={{ mr: 4, display: { xs: 'none', md: 'flex' } }}>
            LOGO 
           </Typography>
         </Link> 
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
                 <Link to={`/${page.toLowerCase()}`}> <Typography textAlign="center">{page}</Typography> </Link>
                </MenuItem>
              ))}
            </Menu>
            </Box>
            <Box sx={{  flexGrow: 1,display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
             <Link to={`/${page.toLowerCase()}`}><Button key={page} onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                >{page}  
              </Button></Link>
            ))}
          </Box>
          <Box sx={{  display: { xs: 'flex', md: 'none' }}}>   
            <IconButton size="large" aria-label="account"
              aria-controls="account" aria-haspopup="true"
              onClick={() => setOpen(true)} color="inherit">
              <PersonIcon />
            </IconButton>
            <Popup open={open} setOpen={setOpen} >
                  <Login signup={false}/>
              </Popup>
          </Box>
          <Box sx={{  display: { xs: 'none', md: 'flex' } }}>
              <Button onClick={() => setOpen(true) } sx={{ my: 2, color: 'white', display: 'block' }}>
                Log in     
              </Button> 
               <Popup open={open} setOpen={setOpen} >
                  <Login signup={false}/>
              </Popup>
              <Button onClick={() => setOpen2(true)} sx={{ my: 2, color: 'white', display: 'block' }}>
                Sign up    
              </Button>
              <Popup open={open2} setOpen={setOpen2} >
                  <Login signup={true}/>
              </Popup>
             
          </Box>
        </Toolbar>
        </Container>
     </AppBar>

    );
}

export default Headers;