import { Alert, Box, Button, FilledInput, FormControl, FormHelperText, Grid,  Typography, useFormControl } from '@mui/material';
import React, { useEffect, useState } from 'react';

function AddCoin(props) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState();
function NameHelperText() {
    const { filled } = useFormControl() || {};
    const helperText = React.useMemo(() => {
      if (filled) {
        if(name.length > 7) {
          return <Alert severity="info">
            Should be less than 7
            </Alert>
        }
      }
      return ;
    }, [filled]);
    return <FormHelperText>{helperText}</FormHelperText>;
  }
  const add =  (name,price) => {
     fetch("http://localhost:5000/coins",{
      method: "POST",
      body: JSON.stringify({
        id: "",
        name: name,
        price: price,
        onehour: null,
        oneday: null,
        sevendays: null,
        onedayVolume: 1.5 * price,
        mkt_cap: 2 * price
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
   .then(res => res.json())
 }
 useEffect( ()=> {
   
 },[]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.length > 7 || !name){
     alert("Your name should be less than 7 characters");
    }
    else{
      add(name,price);
    }
  }
    return (
       <Grid container>
        <Box component="form" onSubmit={handleSubmit} autoComplete="off" mt={2} width="400px"
         sx={{
           margin:'50px 10px', width:'520px',
            '& .MuiTextField-root': { mb: 2 },
          }}>
         <Grid item xs={12}>
          <Typography component="div" variant="h5" >
            Add Coins
          </Typography>
         </Grid>
         <Grid item xs={12}>
          <FormControl fullWidth >
            <FilledInput placeholder="Name"
              fullWidth required className="vertical-gap"
              id="name" label="Name" variant='filled' type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)} />
           {name.length > 7 ? <NameHelperText/> : null}
          </FormControl>
         </Grid>
         <Grid item xs={12}>
          <FormControl fullWidth >
            <FilledInput placeholder="Price"
              fullWidth required className="vertical-gap"
              label="Price" variant='filled' type="number" 
              value={price}
              onChange={(e) => setPrice(e.target.value)} />
          </FormControl> 
         </Grid>
         <Grid item xs={12} mt={2}>
          <Button type="submit" variant="contained" fullWidth 
          > Submit </Button>
         </Grid>
        </Box>
       </Grid>
    );
}

export default AddCoin;