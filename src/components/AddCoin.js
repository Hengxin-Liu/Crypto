import { Alert, Box, Button, FormHelperText, Grid, TextField, Typography, useFormControl } from '@mui/material';
import React, { useState } from 'react';

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
  const add =  () => {
     fetch("http://localhost:5000/coins",{
      method: "POST",
      body: JSON.stringify({
        id: "",
        name: `${name}`,
        price: `${price}`,
        onehour: null,
        oneday: null,
        sevendays: null,
        onedayVolume: null,
        mkt_cap: null
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
   .then(res => res.json())
 }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.length > 7 || !name){
     alert("Your name should be less than 7 characters");
    }
    else{
      add();
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
          <Typography component="h1" variant="h5" mb={2}>
            Add Coins
          </Typography>
         </Grid>
         <Grid item xs={12}>
          <TextField  id="name" label="Name" variant='filled' type="text" fullWidth required
            onChange={(e) => setName(e.target.value)} value={name}
            helperText={<NameHelperText />} 
            />
         </Grid>
         <Grid item xs={12}>
          <TextField id="price" label="Price" variant='filled' type="number" fullWidth required
             onChange={(e) => setPrice(e.target.value)} value={price} />
         </Grid>
         <Grid item xs={12}>
          <Button type="submit" variant="contained" fullWidth
          > Submit </Button>
         </Grid>
        </Box>
       </Grid>
    );
}

export default AddCoin;