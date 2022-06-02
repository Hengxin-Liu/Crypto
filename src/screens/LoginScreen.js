import { Alert, Box, Button, Checkbox, FilledInput, FormControl, FormControlLabel, FormHelperText, Grid,Stack,Typography, useFormControl } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const validEmail = new RegExp('[0-9a-z_$]+@[a-z]+\.[a-z]{2,3}');

function LoginScreen(props) {
  const [signup ,setSignup] = useState(props.signup);
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
 useEffect(() => {
    setSignup(props.signup);
},[props.signup]);
 
 const EmailHelper = () => {
   const { filled } = useFormControl() || {};
   const helperText = React.useMemo(() => {
     if (filled && !validEmail.exec(email)) {
       return <Alert severity="info"> Please enter right email </Alert>; 
       }
       return null;
   }, [filled]);
  return <FormHelperText>{helperText}</FormHelperText>;
}

 const  PasswordHelper = () => {
   const { filled } = useFormControl() || {};
   const helperText = React.useMemo(() => {
     if (filled ) {
       return  !password 
       ? <Alert severity="info"> Please type password  </Alert> 
       :  password !== confirmpassword 
       ? <Alert severity="error"> Password doesn't match  </Alert>
       : null;  
     }
     return null;
    }, [filled]);
  return <FormHelperText>{helperText}</FormHelperText>;
}

 const handleSubmit = (event) => {
    event.preventDefault();
    if(!validEmail.exec(email)){
      
    }
}; 
    return (
      <React.Fragment>
        <Grid container>  
         <Box component="form" noValidate onSubmit={handleSubmit} sx={{ margin:'50px 10px', width:'520px'}} autoComplete="off">
           <Grid item xs={12}>
            <Typography component="h1" variant="h5">
             {signup ?  'Sign up' : 'Log in'}
            </Typography>
           </Grid>
            <FormControl fullWidth >
              <FilledInput placeholder="Please enter email" 
                required  name="email" className="vertical-gap"
                label="Email" type="email" id={ signup ? "new-email" : "email"}
                onChange={(e)=>setEmail(e.target.value)}/>
              {signup ? <EmailHelper /> : null}
             </FormControl>
            <FormControl fullWidth >
             <FilledInput placeholder="Please enter password" 
             required  name="password" className="vertical-gap"
             label="Password" type="password" id={signup ? "new-password" : "password"} 
             onChange={(e)=>setPassword(e.target.value)}/>
            </FormControl>
            {signup && (
             <Grid item xs={12}>
              <FormControl fullWidth className="vertical-gap">
                <FilledInput placeholder="Please confirm Password" 
                required  name="confirm-password" className="vertical-gap"
                label="Confirm-Password" type="password" id="confirmpassword" 
                onChange={(e)=>setConfirmpassword(e.target.value)}/>
               <PasswordHelper />
              </FormControl>
             </Grid>)}
            {signup ? (
             <Stack>
              <FormControlLabel
               control={<Checkbox value="agree" color="primary" />}
               label={<Typography variant="body2" >I agree to CoinGecko's Terms of Service and Privacy Policy</Typography>}/>
              <FormControlLabel
               control={<Checkbox value="subscrib" color="primary" />}
               label={<Typography variant="body2" >I would like to subscribe to CoinGecko's daily newsletter</Typography>}/>
             </Stack>
            ) : (  
              <Grid container  direction="row" justifyContent="space-between" alignItems="center">
               <Grid item >
                <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label={<Typography variant="body2" >Remember me</Typography>} />
               </Grid>
               <Grid item >
                <Link to="#" >
                 Forgot password?
                </Link>
               </Grid>
              </Grid>
              )}
            <Button type="submit" fullWidth variant="contained"
             sx={{ margin: '10px 0px' }} >
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
      </React.Fragment>
    );
}

export default LoginScreen;