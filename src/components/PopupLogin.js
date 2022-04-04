import { Box, Button, Checkbox, Dialog,  DialogContent, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

function PopupLogin(props) {
    const  { open, setOpen } = props;
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    return (
     <div>
      <Dialog
        open={open}
        onClose={handleClose}
      >
       <DialogContent>
        <Grid container>
         <Grid item  >
          <Box>
           <Typography component="h1" variant="h5">
             Sign in
           </Typography>
           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ margin: '20px 5px' }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>     
           </Box>
          </Box>
         </Grid>
        </Grid> 
       </DialogContent>
      </Dialog>
     </div>
    );
}

export default PopupLogin;