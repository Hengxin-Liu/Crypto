import { Box, Button, Checkbox, FormControlLabel, Grid, Link, TextField, Dialog, DialogContent,Typography  } from '@mui/material';
import React, { useState } from 'react';

function PopupSignup(props) {
  const  { openup, setOpenup } = props;
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleClose = () => {
    setOpenup(false);
};
 return (
    <div>
    <Dialog
     open={openup}
     onClose={handleClose}>
     <DialogContent>
     <Grid container>
    <Grid item  >
     <Box>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width:'500px' }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          autoComplete="email"
          autoFocus
          onChange={(e)=>setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          id="password"
          onChange={(e)=>setPassword(e.target.value)}
        />
         <TextField
          margin="normal"
          required
          fullWidth
          label="Confirm Password"
          type="password"
          id="confirm password"
          onChange={(e)=>setConfirmpassword(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="I agree to CoinGecko's Terms of Service and Privacy Policy."
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="I would like to subscribe to CoinGecko's daily newsletter"
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

export default PopupSignup;