import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { AppBar, Avatar, Box, Button, Container, CssBaseline,IconButton,Menu,MenuItem,Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import Popup from './Popup';
import Login from './Login';


const pages = ['Coins','Exchanges','NFT','Publications','Resources'];


function Headers(props) {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [open,setOpen] = useState(false);
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
    const handlePop = () => {
        setOpen(true);
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
            <Menu
              id="account" anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'bottom',horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top',horizontal: 'left'}}
              open={Boolean(anchorElUser)} onClose={handleCloseUserMenu }
              sx={{ display: { xs: 'block', md: 'none' } }} > 
               <MenuItem  onClick={handleCloseUserMenu }>
                 <Typography textAlign="center" >Log in</Typography> 
                </MenuItem>
                 <MenuItem  onClick={handleCloseUserMenu }>
                 <Typography textAlign="center" >Sign Up</Typography> 
                </MenuItem>
            </Menu>
            <IconButton size="large" aria-label="account"
              aria-controls="account" aria-haspopup="true"
              onClick={handleOpenUserMenu} color="inherit">
              <PersonIcon />
            </IconButton>
            </Box>
            <Box sx={{  display: { xs: 'none', md: 'flex' } }}>
              <Button onClick={handlePop} sx={{ my: 2, color: 'white', display: 'block' }}>
                Log in     
              </Button>
              <Popup open={open} setOpen={setOpen}>
                  <Login />
              </Popup>
              <Button onClick={handlePop} sx={{ my: 2, color: 'white', display: 'block' }}>
                Sign up    
              </Button>
              <Popup open={open} setOpen={setOpen}>
                  <Login />
              </Popup>
          </Box>
        </Toolbar>
        </Container>
     </AppBar>

    );
}

export default Headers;