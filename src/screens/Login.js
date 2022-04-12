import { Box, Button, Checkbox, FormControlLabel, Grid,Stack,TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Login(props) {

    const [signup ,setSignup] = useState(props.signup);
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
    }; 
    useEffect(() => {
     setSignup(props.signup);
  },[props.signup]);
    return (
     <div>
        <Grid container>  
         <Box component="form" noValidate onSubmit={handleSubmit} sx={{ margin:'50px 10px', width:'520px'}} >
           <Grid item xs={12}>
            <Typography component="h1" variant="h5">
             {signup ?  'Sign up' : 'Log in'}
            </Typography>
           </Grid>
           <Grid item xs={12}>
            <TextField margin="normal" required fullWidth id="email"
              label="Email Address" name="email" autoComplete="email" autoFocus
              onChange={(e)=>setEmail(e.target.value)}/>
            </Grid>
            <Grid item xs={12}>
             <TextField margin="normal" required fullWidth name="password"
              label="Password" type="password" id="password" autoComplete="current-password"
              onChange={(e)=>setPassword(e.target.value)} />
            </Grid>
            { signup ? (
             <Stack>
             <FormControlLabel
             control={<Checkbox value="agree" color="primary" />}
             label={<Typography variant="body2" >I agree to CoinGecko's Terms of Service and Privacy Policy</Typography>}/>
             <FormControlLabel
              control={<Checkbox value="subscrib" color="primary" />}
              label={<Typography variant="body2" >I would like to subscribe to CoinGecko's daily newsletter</Typography>}/>
             </Stack>
              ) : (  
              <Grid container  direction="row"
              justifyContent="space-between"
              alignItems="center">
               <Grid item >
                <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label={<Typography variant="body2" >Remember me</Typography>} />
               </Grid>
               <Grid item >
                <Link to="#" variant="body2">
                 Forgot password?
                </Link>
               </Grid>
              </Grid>
              )}
            <Button
              type="submit" fullWidth variant="contained"
              sx={{ margin: '10px 0px' }}
            >
            {signup ? 'Sign up' : 'Sign in'} 
            </Button>
            <Box textAlign="center" sx={{ mt: 1 }}>
             {signup ? (    
                <Typography component="h6">
                 Already have account? <Link to="#"  onClick={() => setSignup(false)}>Log in</Link>
                </Typography>
              ) : (          
                 <Typography component="h6">
                 Don't have an account? <Link to="#" onClick={() => setSignup(true)}>Sign Up</Link>
                </Typography>      
              )}    
             </Box>
           </Box>     
        </Grid> 
     </div>
    );
}

export default Login;